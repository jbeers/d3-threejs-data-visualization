// npm run dev -- --port 3030
// chromium --headless --no-sandbox --enable-unsafe-swiftshader --remote-debugging-port=9222 --user-data-dir=$(mktemp -d)
// node checks/deathstar.mjs (optional: SLIDEV_URL, CDP_URL)
import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { setTimeout as delay } from 'node:timers/promises'
import { parseSync } from '@slidev/parser'
import { connect } from './browser.mjs'

const { slides } = parseSync(readFileSync(new URL('../slides.md', import.meta.url), 'utf8'))
const slide = slides.findIndex(item => item.content.includes('<DeathStarBriefing')) + 1
assert.ok(slide > 0)
assert.ok(!slides[slide - 1].content.includes('<video'))
const base = process.env.SLIDEV_URL || 'http://127.0.0.1:3030'
const { send, evaluate, waitFor, key, errors, responses, close } = await connect()
const canvas = 'document.querySelector(".deathstar-canvas canvas")'
const stats = () => evaluate('window.deathstarCheck')
// Drive the test browser's clock, not a hidden playback control in the component.
const seek = async time => {
  await evaluate(`window.deathstarCheck.rotation = null; window.deathstarCheck.vertices = 0; window.deathstarCheck.time = ${time * 1000}`)
  await delay(100)
}
const capture = async name => {
  const { data } = await send('Page.captureScreenshot', { format: 'png' })
  writeFileSync(join(tmpdir(), `kcdc-deathstar-${name}.png`), Buffer.from(data, 'base64'))
  return data
}

try {
  await send('Page.enable')
  await send('Runtime.enable')
  await send('Network.enable')
  await send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 800, deviceScaleFactor: 1, mobile: false })
  await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'no-preference' }] })
  await send('Page.addScriptToEvaluateOnNewDocument', { source: `
    // This dedicated test profile must not follow or move a live presenter session.
    localStorage.setItem('slidev-sync-directions', JSON.stringify({ viewerSend: false, viewerReceive: false, presenterSend: false, presenterReceive: false }));
    window.deathstarCheck = { time: 0, draws: 0, allocations: 0, deletions: 0, invalid: 0 };
    const requestFrame = window.requestAnimationFrame.bind(window);
    // Keep Slidev's own navigation/transition clock running normally.
    window.requestAnimationFrame = callback => requestFrame(time => callback(callback.name === 'tick' ? window.deathstarCheck.time : time));
    const p = WebGL2RenderingContext.prototype, names = new WeakMap(), views = new WeakMap();
    const getUniformLocation = p.getUniformLocation;
    p.getUniformLocation = function(program, name) {
      const location = getUniformLocation.call(this, program, name);
      if (location) names.set(location, { program, name });
      return location;
    };
    for (const name of ['drawElements', 'drawElementsInstanced', 'bufferData', 'deleteBuffer', 'uniformMatrix4fv']) {
      const original = p[name];
      p[name] = function(...args) {
        if (this.canvas.closest('.deathstar-canvas')) {
          const s = window.deathstarCheck;
          if (name.startsWith('draw')) s.draws++;
          if (name === 'bufferData') {
            s.allocations++;
            if (args[1]?.some?.(v => !Number.isFinite(v))) s.invalid++;
          }
          if (name === 'deleteBuffer') s.deletions++;
          if (name === 'uniformMatrix4fv') {
            if (args[2].some(v => !Number.isFinite(v))) s.invalid++;
            const uniform = names.get(args[0]);
            if (uniform?.name === 'modelViewMatrix') views.set(uniform.program, Array.from(args[2]));
          }
          // The largest solid mesh is the station hull; draw order and uniform caching may vary.
          if (name === 'drawElements' && args[1] > (s.vertices || 0)) {
            s.vertices = args[1];
            s.rotation = views.get(this.getParameter(this.CURRENT_PROGRAM));
          }
        }
        return original.apply(this, args);
      };
    }
  ` })
  await send('Page.navigate', { url: `${base}/${slide}` })
  await waitFor(`${canvas} && window.deathstarCheck.draws > 30`)
  assert.equal(await evaluate('document.querySelectorAll(".deathstar-briefing button, .deathstar-briefing input, .deathstar-briefing select").length'), 0, 'no playback controls')
  await seek(3)
  const overview = await capture('station')
  const overviewRotation = (await stats()).rotation
  await seek(4)
  assert.notEqual(await capture('horizontal'), overview, 'station rotates horizontally')
  await seek(9.5)
  assert.notEqual(await capture('polar'), overview, 'station rolls over the pole')
  const angles = []
  for (let tenth = 79; tenth <= 141; tenth++) {
    await seek(tenth / 10)
    const matrix = (await stats()).rotation
    assert.ok(matrix, 'the station was rendered')
    angles.push(Math.atan2(matrix[6], matrix[5]))
  }
  const steps = angles.slice(1).map((angle, i) => Math.atan2(Math.sin(angle - angles[i]), Math.cos(angle - angles[i])))
  assert.ok(steps.every(step => step >= -1e-6), 'polar rotation never reverses')
  assert.ok(Math.abs(steps.reduce((sum, step) => sum + step, 0) - (Math.PI * 2 + 0.85)) < 1e-5, 'roll keeps its final sector alignment')
  assert.ok(Math.abs(steps[0]) < 1e-6 && Math.abs(steps.at(-1)) < 1e-6, 'roll stays still outside 8–14 seconds')
  assert.ok(steps.slice(1).every((step, i) => Math.abs(step - steps[i]) < 0.015), 'polar rotation has no abrupt speed changes')
  await seek(14)
  assert.match(await evaluate('document.querySelector(".deathstar-phase").textContent'), /Surface grid/)
  await capture('surface-selection')
  await seek(15.5)
  const surface = await capture('surface-grid')
  assert.notEqual(surface, overview, 'selected surface grid expands')
  await seek(18)
  await capture('detail-selection')
  await seek(21)
  assert.match(await evaluate('document.querySelector(".deathstar-phase").textContent'), /Detail grid/)
  assert.notEqual(await capture('detail-grid'), surface, 'second, nested grid expands')
  assert.equal(await evaluate('document.querySelector(".deathstar-heading")'), null, 'no invented HUD')
  const built = await stats()
  await seek(24.1)
  assert.equal(await evaluate('document.querySelector(".deathstar-phase").textContent'), 'Station overview', 'loop jumps back to the beginning without interaction')
  await seek(27)
  assert.ok((await stats()).rotation.every((value, i) => Math.abs(value - overviewRotation[i]) < 1e-6), 'second loop repeats the original station orientation')
  await capture('loop')
  assert.equal((await stats()).allocations, built.allocations, 'loop reuses geometry and GPU buffers')
  assert.equal((await stats()).invalid, 0, 'all geometry and camera matrices are finite')

  await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] })
  await waitFor(`document.querySelector('.deathstar-status')?.textContent.includes('Reduced motion')`)
  await delay(100)
  const reduced = await stats()
  await delay(300)
  assert.equal((await stats()).draws, reduced.draws, 'motion preference stops rendering immediately')
  await seek(28)
  assert.equal((await stats()).draws, reduced.draws, 'reduced motion stays static as time advances')
  assert.equal(await evaluate('document.querySelector(".deathstar-phase").textContent'), 'Station overview')
  await capture('reduced-motion')
  const overflows = await evaluate(`(() => {
    const root = document.querySelector('[data-slidev-no="${slide}"] .slidev-layout');
    const bounds = root.getBoundingClientRect();
    return [...root.querySelectorAll('button,input,.deathstar-status,.text-sm')]
      .filter(e => e.getBoundingClientRect().bottom > bounds.bottom + 1 || e.scrollWidth > e.clientWidth + 1)
      .map(e => e.textContent || e.tagName);
  })()`)
  assert.deepEqual(overflows, [], 'fallback status and attribution fit the slide')

  await send('Emulation.setDeviceMetricsOverride', { width: 1920, height: 1080, deviceScaleFactor: 2, mobile: false })
  await waitFor(`${canvas}.width === Math.round(${canvas}.getBoundingClientRect().width) * 2`)
  await capture('hidpi')
  await evaluate('document.activeElement?.blur()')
  await key('ArrowRight', 'ArrowRight', 39)
  await waitFor(`location.pathname === '/${slide + 1}' && !${canvas}`)
  const left = await stats()
  assert.ok(left.deletions > 0, 'leaving releases GPU buffers')
  await delay(300)
  assert.equal((await stats()).draws, left.draws, 'no rendering after leaving')
  await key('ArrowLeft', 'ArrowLeft', 37)
  await waitFor(`location.pathname === '/${slide}' && ${canvas} && window.deathstarCheck.allocations > ${left.allocations}`)
  assert.equal(await evaluate('document.querySelectorAll(".deathstar-canvas canvas").length'), 1)
  assert.equal(await evaluate('document.querySelector(".deathstar-phase").textContent'), 'Station overview', 'reduced-motion re-entry shows the station')
  await evaluate(`${canvas}.getContext('webgl2').getExtension('WEBGL_lose_context').loseContext()`)
  await waitFor(`!${canvas} && document.querySelector('.deathstar-fallback')`)
  assert.match(await evaluate('document.querySelector(".deathstar-status").textContent'), /WebGL unavailable/)
  await capture('fallback')

  await send('Page.navigate', { url: `${base}/${slide}?print=true&range=${slide}` })
  await waitFor('document.querySelector(".deathstar-fallback")')
  assert.equal((await stats()).allocations, 0, 'print uses SVG, never WebGL')
  await capture('print')
  assert.ok(!responses.some(r => /Death.*Star.*webm/i.test(r.url)), 'no compressed video requested')
  assert.deepEqual(errors, [], 'no browser or shader errors')
  console.log('PASS: control-free autoplay/reset loop, smooth rotation and grid zooms, geometry reuse, reduced motion, HiDPI resize, leave/re-entry, WebGL fallback, and print.')
} finally {
  await close()
}
