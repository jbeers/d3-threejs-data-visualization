// Serve the extracted release under a subdirectory with a plain static server:
// stage=$(mktemp -d)
// mkdir -p "$stage/talks"
// cp -R dist "$stage/talks/threejs"
// python3 -m http.server 4246 --bind 127.0.0.1 --directory "$stage"
// Start a dedicated Chromium profile as described in force-demo.mjs, then:
// node checks/release.mjs
// Optional: STATIC_SITE_URL=http://127.0.0.1:4246/talks/threejs/ CDP_URL=http://127.0.0.1:9222
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { parseSync } from '@slidev/parser'
import { connect } from './browser.mjs'

const base = new URL(process.env.STATIC_SITE_URL || 'http://127.0.0.1:4246/talks/threejs/')
assert.ok(base.pathname.endsWith('/'), 'include the static directory trailing slash')
const { slides } = parseSync(readFileSync(new URL('../slides.md', import.meta.url), 'utf8'))
const { send, evaluate, waitFor, key, errors, responses, close } = await connect()
const root = number => `document.querySelector('[data-slidev-no="${number}"] .slidev-layout')`
const ready = number => `location.hash.split('?')[0] === '#/${number}' && ${root(number)}?.checkVisibility()`
const resource = name => `performance.getEntriesByName(${JSON.stringify(new URL(name, base).href)}).length > 0`

try {
  await send('Page.enable')
  await send('Runtime.enable')
  await send('Network.enable')
  await send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 800, deviceScaleFactor: 1, mobile: false })
  await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] })
  for (let number = 1; number <= slides.length; number++) {
    await send('Page.navigate', { url: `${base}#/${number}?clicks=3` })
    await waitFor(ready(number))
    const urls = await evaluate(`[...${root(number)}.querySelectorAll('img[src], video[src], a[href]')].map(e => e.src || e.href)`)
    for (const value of urls) {
      const url = new URL(value)
      if (url.origin === base.origin)
        assert.ok(url.pathname.startsWith(base.pathname), `slide ${number}: URL escapes the deployment directory: ${url}`)
    }
    await waitFor(`[...${root(number)}.querySelectorAll('img')].every(e => e.complete && e.naturalWidth > 0)`)
    await waitFor(`[...${root(number)}.querySelectorAll('video')].every(e => e.readyState >= 1)`)
    if (number === 13) await waitFor(resource('fonts/helvetiker_regular.typeface.json'))
    if (number === 22) {
      await evaluate(`(() => {
        const select = document.querySelector('#three-geometry');
        select.value = 'suzanne'; select.dispatchEvent(new Event('change', { bubbles: true }));
      })()`)
      await waitFor(resource('suzanne.obj'))
    }
  }

  // A bookmarked slide survives reload without the host supplying an SPA fallback.
  const previous = await evaluate('performance.timeOrigin')
  await send('Page.reload')
  await waitFor(`performance.timeOrigin > ${previous} && ${ready(slides.length)}`)
  await key('ArrowLeft', 'ArrowLeft', 37)
  await waitFor(`${root(slides.length - 1)}?.checkVisibility()`)
  assert.match(await evaluate('location.hash'), new RegExp(`^#/${slides.length - 1}(?:\\?|$)`))
  for (const response of responses.filter(r => new URL(r.url).origin === base.origin)) {
    assert.ok(response.url.startsWith(base.href), `request escapes the deployment directory: ${response.url}`)
    assert.ok(response.status < 400, `${response.status}: ${response.url}`)
  }
  assert.deepEqual(errors, [], 'no browser errors')
  console.log(`PASS: ${slides.length} static slides, images, videos, font/model loading, subdirectory URLs, hash navigation, and reload.`)
} finally {
  await close()
}
