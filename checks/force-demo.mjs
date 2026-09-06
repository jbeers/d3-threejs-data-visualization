// Run against Slidev plus a dedicated Chromium debugging profile:
// npm run dev -- --port 3030
// chromium --headless --no-sandbox --enable-unsafe-swiftshader --remote-debugging-port=9222 --user-data-dir=$(mktemp -d)
// node checks/force-demo.mjs
// Optional: SLIDEV_URL=http://127.0.0.1:4245 CDP_URL=http://127.0.0.1:9339
import assert from 'node:assert/strict'
import { once } from 'node:events'
import { readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { setTimeout as delay } from 'node:timers/promises'
import { parseSync } from '@slidev/parser'

const { slides } = parseSync(readFileSync(new URL('../slides.md', import.meta.url), 'utf8'))
const slide = slides.findIndex(item => item.content.includes('# D3 Can Compute the Layout, Too')) + 1
assert.ok(slide > 1)
assert.ok(slides[slide - 2].content.includes('# One Event, from D3 to Three.js'))
const base = process.env.SLIDEV_URL || 'http://127.0.0.1:3030'
const cdp = process.env.CDP_URL || 'http://127.0.0.1:9222'
// Create our own tab; never navigate an existing user tab.
const target = await (await fetch(`${cdp}/json/new?about:blank`, { method: 'PUT' })).json()
const socket = new WebSocket(target.webSocketDebuggerUrl)
await once(socket, 'open')
let sequence = 0
const pending = new Map(), errors = []
socket.addEventListener('message', ({ data }) => {
  const message = JSON.parse(data)
  if (message.id) {
    const [resolve, reject] = pending.get(message.id)
    pending.delete(message.id)
    message.error ? reject(message.error) : resolve(message.result)
  } else if (message.method === 'Runtime.exceptionThrown') errors.push(message.params.exceptionDetails)
  else if (message.method === 'Runtime.consoleAPICalled' && message.params.type === 'error') errors.push(message.params.args)
})
const send = (method, params = {}) => new Promise((resolve, reject) => {
  pending.set(++sequence, [resolve, reject])
  socket.send(JSON.stringify({ id: sequence, method, params }))
})
const evaluate = async expression => {
  const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })
  assert.ok(!result.exceptionDetails, JSON.stringify(result.exceptionDetails))
  return result.result.value
}
const waitFor = async expression => {
  for (let i = 0; i < 150; i++) {
    if (await evaluate(expression)) return
    await delay(100)
  }
  throw new Error(`Timed out: ${expression}`)
}
const key = async (key, code, windowsVirtualKeyCode) => {
  for (const type of ['keyDown', 'keyUp']) await send('Input.dispatchKeyEvent', { type, key, code, windowsVirtualKeyCode })
}
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
  assert.deepEqual(errors, [], 'no unexpected runtime errors')
  console.log('PASS: real point-buffer updates/reuse, keyboard regroup, cooling, leave/re-entry, reduced motion, resizing, fallback, print state, and slide layout.')
} finally {
  socket.close()
  await fetch(`${cdp}/json/close/${target.id}`)
}
