// Run against Slidev plus a dedicated Chromium debugging profile:
// npm run dev -- --port 3030
// chromium --headless --no-sandbox --enable-unsafe-swiftshader --remote-debugging-port=9222 --user-data-dir=$(mktemp -d)
// node checks/force-demo.mjs
// Optional: SLIDEV_URL=http://127.0.0.1:4245 CDP_URL=http://127.0.0.1:9339
// Also checks deck readability and the edited controls/motion using the same browser tab.
import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { setTimeout as delay } from 'node:timers/promises'
import { parseSync } from '@slidev/parser'
import { connect } from './browser.mjs'

const { slides } = parseSync(readFileSync(new URL('../slides.md', import.meta.url), 'utf8'))
for (const [index, item] of slides.entries()) {
  if (item.frontmatter.class?.split(/\s+/).includes('demo-slide'))
    assert.match(item.note, /Goal:.*Show:.*Use:.*Limit:/s, `presenter notes for demo ${index + 1}`)
}
const slide = slides.findIndex(item => item.content.includes('# D3 Can Compute the Layout, Too')) + 1
assert.ok(slide > 1)
assert.ok(slides[slide - 2].content.includes('# One Event, from D3 to Three.js'))
const base = process.env.SLIDEV_URL || 'http://127.0.0.1:3030'
const { send, evaluate, waitFor, key, errors, close } = await connect()
const status = 'document.querySelector(".force-layout-status")?.textContent'
const button = 'document.querySelector(".force-layout-controls button")'
const settled = `${status}?.includes('settled')`
const stats = () => evaluate('window.forceCheck')

try {
  await send('Page.enable')
  await send('Runtime.enable')
  await send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 800, deviceScaleFactor: 1, mobile: false })
  await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'no-preference' }] })
  // Observe real WebGL calls, not component-private functions or a mocked renderer.
  await send('Page.addScriptToEvaluateOnNewDocument', { source: `
    window.forceCheck = { allocations: 0, uploads: 0, draws: 0, deletions: 0, last: [] };
    const buffers = new WeakSet();
    const prototype = WebGL2RenderingContext.prototype;
    for (const name of ['bufferData', 'bufferSubData', 'drawArrays', 'deleteBuffer']) {
      const original = prototype[name];
      prototype[name] = function(...args) {
        const stats = window.forceCheck;
        if (name === 'bufferData' && args[1]?.length === 960 && args[2] === this.DYNAMIC_DRAW) {
          buffers.add(this.getParameter(this.ARRAY_BUFFER_BINDING));
          stats.allocations++;
          stats.last = Array.from(args[1]);
        }
        if (name === 'bufferSubData' && buffers.has(this.getParameter(this.ARRAY_BUFFER_BINDING))) {
          stats.uploads++;
          stats.last = Array.from(args[2]);
        }
        if (name === 'drawArrays' && args[0] === this.POINTS && args[2] === 320) stats.draws++;
        if (name === 'deleteBuffer' && buffers.has(args[0])) stats.deletions++;
        return original.apply(this, args);
      };
    }
  ` })
  await send('Page.navigate', { url: `${base}/${slide}` })
  await waitFor(`${button} && !${button}.disabled && window.forceCheck.draws > 1`)
  const moving = await stats()
  await waitFor(settled)
  const initial = await stats()
  assert.equal(initial.allocations, 1, 'one dynamic position buffer')
  assert.equal(initial.last.length, 960)
  assert.ok(initial.last.every(Number.isFinite))
  assert.notDeepEqual(initial.last, moving.last, 'D3 moves the rendered points')
  await delay(500)
  assert.equal((await stats()).draws, initial.draws, 'no perpetual rendering after settling')

  await evaluate(`${button}.focus()`)
  await key(' ', 'Space', 32)
  await waitFor(`${status}?.includes('Alternate key') && !${settled}`)
  assert.equal(await evaluate('location.pathname'), `/${slide}`, 'keyboard activation does not advance the slide')
  await waitFor(settled)
  const regrouped = await stats()
  assert.notDeepEqual(regrouped.last, initial.last, 'Regroup changes the positions')
  assert.equal(regrouped.allocations, 1, 'Regroup reuses the same GPU position buffer')

  // Leave mid-simulation, then return. Old buffers/canvases must not survive.
  await evaluate(`${button}.click(); document.activeElement?.blur()`)
  await waitFor(`!${settled}`)
  await key('ArrowRight', 'ArrowRight', 39)
  await waitFor(`location.pathname === '/${slide + 1}' && !document.querySelector('.force-layout-canvas canvas')`)
  const left = await stats()
  assert.equal(left.deletions, 1)
  await delay(400)
  assert.equal((await stats()).draws, left.draws, 'no force rendering after leaving')
  await key('ArrowLeft', 'ArrowLeft', 37)
  await waitFor(`${button} && !${button}.disabled && window.forceCheck.allocations === 2`)
  assert.equal(await evaluate('document.querySelectorAll(".force-layout-canvas canvas").length'), 1)

  await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] })
  await waitFor(`${settled} && ${status}?.includes('reduced motion')`)
  await delay(200)
  const reduced = await stats()
  await evaluate(`${button}.click()`)
  await waitFor(`${settled} && ${status}?.includes('Alternate key')`)
  const reducedRegroup = await stats()
  assert.notDeepEqual(reducedRegroup.last, reduced.last, 'reduced motion still permits regrouping')
  await delay(500)
  assert.equal((await stats()).draws, reducedRegroup.draws, 'reduced motion has no continuing animation')

  // Resize after settling: update camera/buffer without restarting the simulation.
  await evaluate('document.querySelector(".force-layout-stage").style.height = "220px"')
  await waitFor(`window.forceCheck.draws > ${reducedRegroup.draws}`)
  assert.equal((await stats()).allocations, 2)
  assert.equal(await evaluate('document.querySelector(".force-layout-canvas canvas").height === document.querySelector(".force-layout-canvas").clientHeight'), true)

  for (const number of [slide, slide + 1, slide + 2]) {
    await send('Page.navigate', { url: `${base}/${number}` })
    await waitFor(`document.querySelector('[data-slidev-no="${number}"] .slidev-layout')`)
    await delay(500)
    const overflow = await evaluate(`(() => {
      const root = document.querySelector('[data-slidev-no="${number}"] .slidev-layout');
      const bounds = root.getBoundingClientRect();
      return [...root.querySelectorAll('h1, h2, pre, .text-base, .text-lg, .force-layout-controls')]
        .filter(element => element.getBoundingClientRect().bottom > bounds.bottom || element.scrollWidth > element.clientWidth + 1)
        .map(element => element.textContent.slice(0, 80));
    })()`)
    const { data } = await send('Page.captureScreenshot', { format: 'png' })
    writeFileSync(join(tmpdir(), `kcdc-force-${number}.png`), Buffer.from(data, 'base64'))
    assert.deepEqual(overflow, [], `slide ${number} fits`)
  }

  await send('Page.navigate', { url: `${base}/${slide}` })
  await waitFor(`${button} && !${button}.disabled`)
  await evaluate('document.querySelector(".force-layout-canvas canvas").getContext("webgl2").getExtension("WEBGL_lose_context").loseContext()')
  await waitFor(`${status}?.includes('WebGL unavailable') && document.querySelector('.force-layout-fallback circle')`)
  assert.equal(await evaluate(`${button}.disabled`), true)

  await send('Page.navigate', { url: `${base}/${slide}?print=true&range=${slide}` })
  await waitFor('document.querySelectorAll(".force-layout-fallback circle").length === 320')
  assert.equal((await stats()).allocations, 0, 'print mode never initializes WebGL')
  assert.equal(await evaluate(`${button}.disabled`), true)
  const printed = await send('Page.captureScreenshot', { format: 'png' })
  writeFileSync(join(tmpdir(), 'kcdc-force-print.png'), Buffer.from(printed.data, 'base64'))
  console.log('PASS: real point-buffer updates/reuse, keyboard regroup, cooling, leave/re-entry, reduced motion, resizing, fallback, and print state.')

  const go = async number => {
    await send('Page.navigate', { url: `${base}/${number}?clicks=3` })
    await waitFor(`location.pathname === '/${number}' && document.querySelector('[data-slidev-no="${number}"] .slidev-layout')?.checkVisibility()`)
    await evaluate('document.fonts.ready.then(() => true)')
    await delay(450)
  }
  const picture = async selector => {
    const clip = await evaluate(`(() => {
      const {x,y,width,height} = document.querySelector(${JSON.stringify(selector)}).getBoundingClientRect();
      return {x,y,width,height,scale:1};
    })()`)
    return (await send('Page.captureScreenshot', { format: 'png', clip })).data
  }
  const layoutIssues = []
  for (let number = 1; number <= slides.length; number++) {
    await go(number)
    const issues = await evaluate(`(() => {
      const root = document.querySelector('[data-slidev-no="${number}"] .slidev-layout');
      const bounds = root.getBoundingClientRect(), issues = [];
      const luminance = rgb => {
        const [r,g,b] = rgb.match(/[\\d.]+/g).slice(0,3).map(Number).map(v => {
          const c = v / 255;
          return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
        });
        return 0.2126*r + 0.7152*g + 0.0722*b;
      };
      const nodes = [...root.querySelectorAll('*')].filter(e =>
        !e.closest('svg, .slidev-vclick-hidden') && e.getBoundingClientRect().width &&
        e.checkVisibility({ opacityProperty: true, visibilityProperty: true }) && (
          e.matches('button,input,select,pre') || [...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())
        ));
      for (const e of nodes) {
        const b = e.getBoundingClientRect(), css = getComputedStyle(e);
        const name = (e.textContent.trim() || e.id || e.tagName).slice(0, 65);
        if (b.bottom > bounds.bottom + 1 || b.left < bounds.left - 1 || b.right > bounds.right + 1 || b.top < bounds.top - 1)
          issues.push('Outside slide: ' + name);
        if (parseFloat(css.fontSize) < 12.5) issues.push('Tiny label: ' + name);
        const code = e.closest('pre.shiki,.demo-code,.svg-demo-code');
        if (code) {
          const fg = luminance(css.color), bg = luminance(getComputedStyle(code).backgroundColor);
          if ((Math.max(fg,bg) + 0.05) / (Math.min(fg,bg) + 0.05) < 4.5)
            issues.push('Code contrast below 4.5:1: ' + name);
        }
        if (e.closest('pre,.demo-code') && e.scrollWidth > e.clientWidth + 1)
          issues.push('Code needs horizontal scrolling: ' + name);
        for (let p = e.parentElement; p && p !== root; p = p.parentElement) {
          const s = getComputedStyle(p), r = p.getBoundingClientRect();
          if ((s.overflowY === 'hidden' && (b.bottom > r.bottom + 1 || b.top < r.top - 1)) ||
              (s.overflowX === 'hidden' && (b.left < r.left - 1 || b.right > r.right + 1))) {
            issues.push('Clipped by panel: ' + name); break;
          }
        }
      }
      const lead = root.querySelector('.demo-lead'), stage = root.querySelector('.demo-stage');
      if (lead && stage && lead.getBoundingClientRect().bottom > stage.getBoundingClientRect().top + 1)
        issues.push('Demo covers its purpose');
      for (const image of root.querySelectorAll('img'))
        if (!image.complete || !image.naturalWidth || !image.hasAttribute('alt')) issues.push('Missing image/alt: ' + image.src);
      return [...new Set(issues)];
    })()`)
    if (issues.length) layoutIssues.push({ slide: number, issues })
    const { data } = await send('Page.captureScreenshot', { format: 'png' })
    writeFileSync(join(tmpdir(), `kcdc-deck-${number}.png`), Buffer.from(data, 'base64'))
  }
  writeFileSync(join(tmpdir(), 'kcdc-deck-layout.json'), JSON.stringify(layoutIssues, null, 2))
  assert.deepEqual(layoutIssues, [], 'visible content fits the slides and panels at readable sizes')

  // The simplified SVG/Three.js panels expose native controls, not overlapping cards.
  for (const number of [21, 22]) {
    await go(number)
    const summary = `document.querySelector('[data-slidev-no="${number}"] summary')`
    const details = `document.querySelector('[data-slidev-no="${number}"] details')`
    await evaluate(`${summary}.focus()`)
    await key(' ', 'Space', 32)
    await waitFor(`${details}.open`)
    assert.equal(await evaluate('location.pathname'), `/${number}`)
    await key(' ', 'Space', 32)
    await waitFor(`!${details}.open`)
    if (number === 21) {
      await evaluate('document.querySelector("#svg-color").focus()')
      await key('ArrowRight', 'ArrowRight', 39)
      await waitFor('document.querySelector("#svg-color").value === "211"')
      assert.equal(await evaluate('location.pathname'), '/21')
    } else {
      const before = await picture('.three-demo-canvas')
      await evaluate('const input = document.querySelector("#three-geometry"); input.value = "sphere"; input.dispatchEvent(new Event("change", {bubbles:true}))')
      await delay(200)
      assert.notEqual(await picture('.three-demo-canvas'), before, 'geometry control changes the rendered object')
    }
  }

  await go(33)
  assert.equal(await evaluate('document.querySelector("#entry-exit-count").value'), '3')
  await delay(1200)
  assert.equal(await evaluate('document.querySelector("#entry-exit-count").value'), '3', 'no automatic record cycling')
  await evaluate('document.querySelector("#entry-exit-count").focus()')
  await key('End', 'End', 35)
  await waitFor('document.querySelector("#entry-exit-count").value === "5"')
  assert.equal(await evaluate('location.pathname'), '/33')
  await go(35)
  const empty = await picture('.stagger-stage')
  await evaluate('document.querySelector(".stagger-load-button").focus()')
  await key(' ', 'Space', 32)
  await delay(200)
  const loaded = await picture('.stagger-stage')
  assert.notEqual(loaded, empty, 'entry control still works with reduced motion')
  await delay(300)
  assert.equal(await picture('.stagger-stage'), loaded, 'reduced motion settles entry immediately')

  // Observe the real object matrices: decorative rotation must not move data positions.
  await send('Page.addScriptToEvaluateOnNewDocument', { source: `
    window.motionMatrices = [];
    const names = new WeakMap(), p = WebGL2RenderingContext.prototype;
    const get = p.getUniformLocation, set = p.uniformMatrix4fv;
    p.getUniformLocation = function(program, name) {
      const location = get.call(this, program, name);
      if (location) names.set(location, name);
      return location;
    };
    p.uniformMatrix4fv = function(...args) {
      if (names.get(args[0]) === 'modelViewMatrix') window.motionMatrices.push(Array.from(args[2]));
      return set.apply(this, args);
    };
  ` })
  const matrices = async () => {
    await evaluate('window.motionMatrices = []')
    await delay(300)
    const values = await evaluate('window.motionMatrices')
    assert.ok(values.length > 0, 'real meshes were rendered')
    return values
  }
  const unique = values => [...new Set(values.map(v => v.join(',')))].sort()
  await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'no-preference' }] })
  await go(36)
  const rotating = await matrices()
  const later = await matrices()
  assert.deepEqual(unique(rotating.map(m => m.slice(12, 15))), unique(later.map(m => m.slice(12, 15))), 'data positions stay fixed during rotation')
  assert.notDeepEqual(unique(rotating), unique(later), 'rotation actually changes')
  await evaluate('document.querySelector(".demo-button").focus()')
  await key(' ', 'Space', 32)
  await waitFor('document.querySelector(".demo-button").getAttribute("aria-pressed") === "true"')
  assert.equal(await evaluate('location.pathname'), '/36')
  assert.deepEqual(unique(await matrices()), unique(await matrices()), 'Pause freezes the rotation')
  await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] })
  await go(36)
  assert.equal(await evaluate('document.querySelector(".demo-button").disabled'), true)
  assert.deepEqual(unique(await matrices()), unique(await matrices()), 'reduced motion has no rotation')
  assert.deepEqual(errors, [], 'no unexpected runtime errors')
  console.log('PASS: full-deck layout/readability, native controls, stable entry state, reduced-motion entry, fixed data positions, and keyboard pause.')
} finally {
  await close()
}
