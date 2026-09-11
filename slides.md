---
title: Data Visualization with D3 and Three.js
colorSchema: light
class: talk-title
---

# Breaking the DOM Limit

<div class="talk-subtitle">High-performance data visualization<br>with D3 and Three.js</div>
<div class="talk-thesis">Keep the D3 you know. Give it another way to draw.</div>
<div class="talk-author">Jacob Beers</div>

---

# Explore the Talk Online

<div class="flex items-center justify-center gap-12 mt-10">
  <img
    src="/images/d3-threejs-data-viz-qr.svg"
    class="w-80 rounded-xl shadow-lg"
    alt="QR code linking to the talk online"
  />
  <div class="max-w-lg text-xl">
    <p>Scan to explore the talk online.</p>
    <a href="https://jbeers.github.io/talks/d3-threejs-data-viz">
      jbeers.github.io/talks/d3-threejs-data-viz
    </a>
  </div>
</div>

---
class: deathstar-slide
---

# A Matter of Life and Death

<div class="grid grid-cols-2 gap-8 items-center">

<div>

What if the Rebels had given Luke Skywalker a CSV file instead of a clear 3D view?

</div>

<DeathStarBriefing />

</div>

<div class="mt-4 text-sm text-slate-600">
Three.js reconstruction · briefing reference: <a href="https://www.youtube.com/watch?v=f8CW2xTT8zo">Axeman3D</a>
</div>

<style>
.slidev-layout.deathstar-slide {
  justify-content: flex-start;
  padding-top: 6.5rem;
}
</style>

<!--
- Reconstructs the supplied 24-second “Death Star Briefing - improved” clip by Axeman3D: grow the station into view, rotate horizontally, roll over the pole, select a surface square, and magnify two nested grids. The supplied clip ends before the trench fly-through; no buildings, cockpit HUD, or exhaust-port shot are added.
- The equator-mounted dish, latitude bands, polar meridians, and monochrome lines follow the briefing plans, not the final movie prop's off-equator dish. Geometry restores lines obscured by the reference's artifacts; camera timings are sampled approximations, not a frame-exact restoration.
- Autoplays while this slide is active, jumping back to the beginning every 24 seconds. There are no playback controls. Reduced motion shows the full-size station without animation. Print and unavailable WebGL use a static schematic.
-->

---
class: target-briefing
---

# Trench Run Targets

The rebellion is doomed.

<div class="relative">

```csv
Target,Team,Pilot,Distance,Size,Notes
Exhaust Port,Red,Luke,0.5 m,2 m,"Primary target, about the size of a womp rat"
TIE Fighters,Red,Biggs,Variable,Small,Keep off Luke
Turbolasers,Gold,Dutch,2 km,Large,Shoot back
Trench Walls,All,Everyone,0 m,Huge,NOT A TARGET
Darth Vader,Any,Anyone,Variable,Human,Avoid
Death Star,All,Everyone,Right there,120 km,Destroy
```

<figure class="absolute -right-3 -bottom-10 m-0 w-24">
  <img src="/images/excel-file-icon.png" alt="Excel file icon" />
</figure>

</div>

<div v-click="1" class="rebel-doomed-reveal">
  <img src="/videos/starwars-porkins.gif" alt="Porkins in his X-wing cockpit" />
  <span>The rebels would be doomed</span>
</div>

<style>
.target-briefing {
  --slidev-code-font-size: 18px;
  --slidev-code-line-height: 30px;
  --slidev-code-radius: 0.8rem;
  background: var(--talk-paper);
  color: var(--talk-ink);
}

.target-briefing p {
  color: var(--talk-muted);
  margin-bottom: 2rem;
}

.target-briefing .slidev-code {
  border: 1px solid var(--talk-border);
}

.rebel-doomed-reveal {
  align-items: center;
  bottom: 1.5rem;
  display: flex;
  gap: 1rem;
  left: 3.5rem;
  position: absolute;
  z-index: 1;
}

.rebel-doomed-reveal img {
  border-radius: 0.75rem;
  box-shadow: 0 0.25rem 0.75rem rgb(15 23 42 / 20%);
  display: block;
  width: 14rem;
}

.rebel-doomed-reveal span {
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.25;
  max-width: 12rem;
}
</style>

---
class: space-viz
---

# A Visualization in Space

Since I know the importance of a good visualization you can imagine my excitement when I was selected to work on building a data visualization for a space project!

My employer, Ortus Solutions, was contracted to help USRA build a proof-of-concept project called Multi-Messenger.

<div class="flex items-center justify-center gap-10 mt-10">
  <img src="/images/ortus-logo.png" class="h-24 object-contain" alt="Ortus Solutions" />
  <div class="text-6xl">🤝</div>
  <div class="bg-[#0a1931] rounded-xl p-4 inline-block">
    <img src="/images/usra-logo.svg" class="h-24 object-contain" alt="USRA" />
  </div>
</div>

<style>
.space-viz {
  background: #ffffff;
}
</style>

---

# Multi-Messenger: Portal to the Universe

<div class="project-overview">
  <p>Events from several observatories, together on one sky map.<br>D3 did the calculations; SVG drew the map.</p>
  <figure>
    <img src="/images/multi-messenger-screenshot.png" class="project-screenshot" alt="Observatory events plotted on the Multi-Messenger sky map" />
  </figure>
</div>

<!--
- The supplied screenshot is cropped to the map: 1556 × 844 at (350, 148) in multi-messenger-screenshot.png. No plotted content is removed; the original is retained. This is not a performance measurement.
- Original project description: “The Portal to the Universe is a demonstration that covers approximately one year of data from April 1, 2019 through March 27, 2020 for the Fermi Gamma-ray Burst Monitor, the LIGO and Virgo Gravitational-wave observatories, and the Zwicky Transient Facility.”
-->

---
class: team-slide
---

# So We Assembled a Team

<div class="grid grid-cols-4 gap-6 mt-8 px-4">

<div class="team-card">
<img src="/images/usra-logo.svg" class="team-logo bg-[#0a1931] rounded px-2 py-1" alt="USRA" />
<div class="team-name">Bill Cleveland</div>
<div class="team-role">USRA</div>
</div>

<div class="team-card">
<img src="/images/usra-logo.svg" class="team-logo bg-[#0a1931] rounded px-2 py-1" alt="USRA" />
<div class="team-name">Adam Goldstein</div>
<div class="team-role">USRA</div>
</div>

<div class="team-card">
<img src="/images/usra-logo.svg" class="team-logo bg-[#0a1931] rounded px-2 py-1" alt="USRA" />
<div class="team-name">Michael O'Dell</div>
<div class="team-role">USRA</div>
</div>

<div class="team-card">
<img src="/images/ortus-logo.png" class="team-logo" alt="Ortus Solutions" />
<div class="team-name">Jorge Reyes</div>
<div class="team-role">Project Manager</div>
</div>

<div class="team-card">
<img src="/images/ortus-logo.png" class="team-logo" alt="Ortus Solutions" />
<div class="team-name">Esme Acevedo</div>
<div class="team-role">Developer</div>
</div>

<div class="team-card">
<img src="/images/ortus-logo.png" class="team-logo" alt="Ortus Solutions" />
<div class="team-name">Tom Buettell</div>
<div class="team-role">QA Tester</div>
</div>

<div class="team-card">
<img src="/images/ortus-logo.png" class="team-logo" alt="Ortus Solutions" />
<div class="team-name">Lourdes Munoz</div>
<div class="team-role">Project Manager</div>
</div>

<div class="team-card">
<img src="/images/ortus-logo.png" class="team-logo" alt="Ortus Solutions" />
<div class="team-name">Jacob Beers</div>
<div class="team-role">Developer</div>
</div>

</div>

<style>
.team-slide .team-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  padding: 1.25rem 1rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.05);
}

.team-slide .team-logo {
  height: 2.25rem;
  margin: 0 auto 0.75rem;
  object-fit: contain;
}

.team-slide .team-logo[src*="ortus-logo"] {
  height: 4.5rem;
}

.team-slide .team-name {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
}

.team-slide .team-role {
  color: #64748b;
  font-size: 0.9rem;
}
</style>

---

# NASA Grant Winner

<img src="/images/nasa-grant-triangle-v2.svg" class="grant-diagram" alt="Diagram connecting NASA, USRA, and Ortus Solutions" />

<div class="grant-caption">Multi-Messenger won a grant from NASA!</div>

<style>
.grant-diagram {
  display: block;
  height: 25.2rem;
  margin: 5rem auto 0;
  width: 42rem;
}

.grant-caption {
  font-size: 1.15rem;
  text-align: center;
}
</style>

---
class: family-slide
---

# A Family Connection to NASA

<div class="family-columns">
  <figure class="family-photo">
    <img src="/images/pa-and-uncle-greg.jpg" alt="Pa and Uncle Greg together in a family photograph" />
    <figcaption>Pa and Uncle Greg</figcaption>
  </figure>
  <div class="family-copy">
    <p>This was especially meaningful to me.</p>
    <p>My grandpa worked was an engineer who sub contracted for the <strong>Apollo moon mission</strong>, and my uncle created <strong>3D mission animations at NASA</strong>.</p>
    <p>I wanted to get this right.</p>
  </div>
</div>

<style>
.slidev-layout.family-slide {
  background: var(--talk-paper);
  justify-content: flex-start;
  padding-top: 7rem;
}

.family-columns {
  align-items: center;
  display: grid;
  gap: 3rem;
  grid-template-columns: 16.5rem minmax(0, 1fr);
}

.family-photo {
  margin: 0;
}

.family-photo img {
  border-radius: 0.75rem;
  display: block;
  height: auto;
  width: 100%;
}

.family-photo figcaption {
  color: #475569;
  font-size: 1rem;
  margin-top: 0.5rem;
  text-align: center;
}

.family-copy {
  color: #334155;
  font-size: 1.4rem;
  line-height: 1.5;
}

.family-copy p {
  line-height: inherit;
  margin: 0 0 1.25rem;
}

.family-copy p:last-child {
  border-left: 3px solid #2563eb;
  color: #1e40af;
  font-weight: 600;
  margin-bottom: 0;
  padding-left: 1rem;
}
</style>

---
class: review-slide
---

# So I Decided to Review the Visualization

I was dismayed...

<div class="review-reveal">
  <div>
    <div v-click="1">
      <li>The controls weren't smooth</li>
      <li>Dropped frames</li>
      <li>Didn't feel responsive</li>
    </div>
    <div v-click="2" class="review-janky">JANKY!</div>
  </div>
  <SlidevVideo
    v-click="1"
    :src="resolveAssetUrl('/videos/before-demo.webm')"
    controls
    autoplay
    muted
    playsinline
    preload="metadata"
    timestamp="0.2"
    autoreset="click"
    class="review-video"
    aria-label="Original SVG celestial map interaction recording"
  >
    <a :href="resolveAssetUrl('/videos/before-demo.webm')">Watch the original SVG demo.</a>
  </SlidevVideo>
</div>

<div v-click="3" class="review-final">What would my ancestors think?</div>

<script setup>
import { resolveAssetUrl } from '@slidev/client'
</script>

<style>
.review-slide {
  justify-content: flex-start;
  padding-top: 7rem;
}

.review-slide h1 {
  line-height: 1.15;
}

.review-reveal {
  align-items: center;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 2fr;
  margin-top: 0rem;
  min-height: 16rem;
}

.review-janky {
  color: #dc2626;
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
}

.review-video {
  aspect-ratio: 1555 / 837;
  background: #0f172a;
  border: 1px solid #94a3b8;
  border-radius: 1rem;
  display: block;
  object-fit: contain;
  width: 100%;
}

.review-final {
  font-size: 1.5rem;
  font-style: italic;
  margin-top: 2rem;
  text-align: center;
}
</style>

---
class: three-scene-slide
clicks: 3
---

# Enter Three.js

<div class="three-scene-stage">
  <div
    class="three-scene-copy"
    :class="{ 'three-scene-copy--compact': $clicks >= 1 }"
  >
    Three.js lets us keep D3’s math and change how we draw.
  </div>
  <div
    ref="sceneHost"
    class="three-scene-canvas"
    role="img"
    aria-label="Illustrative cubes labeled GPU drawing, D3 math, and 2D or 3D"
  ></div>
</div>

<script setup>
import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { nextTick, ref, watch } from 'vue'
import { onSlideEnter, onSlideLeave, resolveAssetUrl, useSlideContext } from '@slidev/client'

const sceneHost = ref(null)
const { $clicks: clicks } = useSlideContext()

let renderer
let scene
let camera
let animationFrame
let resizeObserver
let geometry
let material
let labelMaterial
let reduceMotion = false
const labelGeometries = []
const cubeStates = []
const labelText = ['GPU drawing', 'D3 math', '2D or 3D']

function resize() {
  if (!renderer || !camera || !sceneHost.value) return

  const width = sceneHost.value.clientWidth
  const height = sceneHost.value.clientHeight
  if (!width || !height) return

  renderer.setSize(width, height, false)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
}

function applyClicks(clicks) {
  if (!scene) return

  const count = Math.max(0, Math.min(3, clicks))
  const positions = count === 1 ? [0] : count === 2 ? [-2.8, 0] : [-2.8, 2.8, 0]

  cubeStates.forEach(({ group }, index) => {
    group.userData.targetX = positions[index] ?? 0
    group.userData.targetScale = index < count ? 1 : 0
  })
}

function animate() {
  if (!renderer || !scene || !camera) return

  animationFrame = requestAnimationFrame(animate)
  cubeStates.forEach(({ group, cube }) => {
    const { targetX, targetScale } = group.userData
    group.position.x += (targetX - group.position.x) * (reduceMotion ? 1 : 0.08)
    group.scale.setScalar(group.scale.x + (targetScale - group.scale.x) * (reduceMotion ? 1 : 0.1))
    if (!reduceMotion) {
      cube.rotation.x += 0.008
      cube.rotation.y += 0.012
    }
  })
  renderer.render(scene, camera)
}

function createLabels() {
  const currentScene = scene
  new FontLoader().load(resolveAssetUrl('/fonts/helvetiker_regular.typeface.json'), (font) => {
    if (scene !== currentScene || !renderer) return

    labelMaterial = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      metalness: 0.15,
      roughness: 0.35,
    })
    labelText.forEach((text, index) => {
      const textGeometry = new TextGeometry(text, {
        bevelEnabled: true,
        bevelSegments: 2,
        bevelSize: 0.012,
        bevelThickness: 0.02,
        curveSegments: 4,
        depth: 0.08,
        font,
        size: 0.27,
      })
      textGeometry.center()

      const label = new THREE.Mesh(textGeometry, labelMaterial)
      label.position.y = -1.35
      label.rotation.x = -0.12
      cubeStates[index].group.add(label)
      labelGeometries.push(textGeometry)
    })
    applyClicks(clicks.value)
  })
}

function createScene() {
  if (renderer || !sceneHost.value) return

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100)
  camera.position.z = 8.5

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  sceneHost.value.appendChild(renderer.domElement)

  geometry = new THREE.BoxGeometry(1.3, 1.3, 1.3)
  material = new THREE.MeshNormalMaterial()
  scene.add(new THREE.AmbientLight(0xffffff, 0.7))
  const keyLight = new THREE.DirectionalLight(0xffffff, 2)
  keyLight.position.set(-3, 4, 6)
  scene.add(keyLight)

  for (let index = 0; index < 3; index++) {
    const group = new THREE.Group()
    const cube = new THREE.Mesh(geometry, material)
    group.userData.targetX = 0
    group.userData.targetScale = 0
    group.add(cube)
    group.scale.setScalar(0)
    scene.add(group)
    cubeStates.push({ group, cube })
  }

  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  createLabels()
  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(sceneHost.value)
  resize()
  applyClicks(clicks.value)
  animate()
}

function disposeScene() {
  if (animationFrame) cancelAnimationFrame(animationFrame)
  resizeObserver?.disconnect()
  geometry?.dispose()
  material?.dispose()
  labelGeometries.forEach((labelGeometry) => labelGeometry.dispose())
  labelMaterial?.dispose()
  renderer?.dispose()
  renderer?.domElement.remove()

  cubeStates.length = 0
  labelGeometries.length = 0
  renderer = scene = camera = animationFrame = resizeObserver = geometry = material = labelMaterial = undefined
}

watch($clicks, applyClicks)
onSlideEnter(async () => {
  await nextTick()
  createScene()
  applyClicks(clicks.value)
})
onSlideLeave(disposeScene)
</script>

<style>
.three-scene-slide {
  background: #000;
  color: #fff;
  overflow: hidden;
}

.three-scene-slide h1 {
  color: #fff;
  z-index: 3;
}

.three-scene-stage {
  inset: 0;
  position: absolute;
}

.three-scene-copy {
  color: #fff;
  font-size: 1.55rem;
  left: 50%;
  line-height: 1.4;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: top 700ms ease, transform 700ms ease;
  width: min(52rem, 76%);
  z-index: 2;
  animation: three-scene-copy-fade-in 800ms ease 300ms forwards;
}

.three-scene-copy--compact {
  top: 7.2rem;
  transform: translateX(-50%) scale(0.72);
}

.three-scene-canvas {
  inset: 5.5rem 2.5rem 1rem;
  position: absolute;
}

.three-scene-canvas canvas {
  display: block;
  height: 100%;
  width: 100%;
}

@keyframes three-scene-copy-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>

<!--
- Goal: introduce the rendering option, not promise a universal speedup. Show: reveal the three labels in order. Use: GPU drawing alongside D3 calculations. Limit: changing renderers does not remove CPU-side work.
- The cubes are decorative illustrations. Their positions, sizes, and rotation do not encode records. Reduced motion on entry makes reveals immediate and stops rotation.
-->

---
class: handoff-slide
---

# What Is Three.js?

Cross-browser JavaScript library that makes it easier to work with WebGPU.

JavaScript manages your data and calls the Three.js API. Three.js works with the WebGPU APIs provided by the browser to send the data to your GPU.

Made by mrdoob on March 23 in the year... <span v-click="1">2010!</span>

<img v-click="1" src="/images/threejs-first-commits.png" class="mx-auto mt-auto h-64 max-w-full object-contain" alt="Three.js commit history showing mrdoob’s first commit on March 23, 2010 and first public version on April 23, 2010" />

---
class: handoff-slide
---

# Will Three.js Work with D3?

<div class="mb-5 text-xl">YES! Keep D3’s calculations. Replace the SVG drawing.</div>

<div class="grid grid-cols-3 gap-4">
  <section class="svg-demo-panel">
    <h2>Application / Vue</h2>
    <p>Records, selection, UI, and lifecycle.</p>
    <div class="text-sm text-slate-600">Owns the application state.</div>
  </section>
  <section class="svg-demo-panel">
    <h2>D3</h2>
    <p>Projections, scales, and layout calculations.</p>
    <div class="text-sm text-slate-600">Produces numbers—not necessarily DOM.</div>
  </section>
  <section class="svg-demo-panel">
    <h2>Three.js</h2>
    <p>Render objects, buffers, and drawing.</p>
    <div class="text-sm text-slate-600">Turns those numbers into graphics.</div>
  </section>
</div>

<div class="mt-6 rounded-xl bg-blue-100 px-5 py-4 text-center text-lg text-blue-900">
Records → D3 calculations → numeric attributes → Three.js drawing
</div>

<div class="mt-5 text-lg">
A WebGL renderer can render both 2D and 3D. The sky is the limit!
</div>

<!--
- Sources: portal-to-the-universe at 6fc819a, under modules_app/core/resources/assets/js/. CelestialMap.vue watches stores/searchStore.js results.loc and calls createSkyMap().setData(); skyProjection.mjs owns the geographic calculations; SkyMap.js owns render resources and drawing.
- Projections, scales, and layouts are D3 capabilities, not a claim that this application uses all three. This case uses geoStereographic, geographic paths/circles, and a fixed classification palette—not a force layout or a continuous mark-size scale.
- Graphic mode draws flat markers with an OrthographicCamera. Space mode uses the same projected event positions and adds representative 3D objects; it does not infer physical event distances from RA/Dec.
- The useful boundary is numeric data, not a mandatory DOM selection. D3 can still produce SVG paths, Canvas paths, or numbers consumed by another renderer.
- We will trace one event through the actual handoff after the SVG/Three.js rendering fundamentals.
-->

---

# I Decided to Try It Out

It worked like a charm.

I kept the event records and D3’s sky-projection math, but rewrote the renderer API and Vue integration.

The performance improvements were obvious right off the bat.

<!--
- This was a manageable renderer migration, not a literal drop-in API replacement.
- Before (35a8bba^): D3Map.js createSVG(container, onInspect) returned update(), pointAt(), and tryToHighlight(). CelestialMap.vue subscribed broadly to the search store and called update() with data and region arguments.
- After (6fc819a): SkyMap.js createSkyMap(container, callbacks) exposes setData(), setRegions(), focus(), destroy(), and other controls. CelestialMap.vue uses targeted watches, Vue-owned popovers, and explicit teardown.
- Both versions consume records with event_id, ra, and dec and use D3's stereographic projection. SVG selections and string attributes became Three.js resources and numeric transforms; scheduling, interaction handling, and the background representation also changed.
-->

---
class: case-study-demo-slide
---

# After: The Three.js Rewrite

<SlidevVideo
  :src="resolveAssetUrl('/videos/after-demo.webm')"
  controls
  muted
  playsinline
  preload="metadata"
  timestamp="0.2"
  autoreset="slide"
  class="max-w-full max-h-88 self-center rounded-xl object-contain bg-slate-950"
  aria-label="Three.js celestial map: smoother interaction with animated Earth, Moon, satellite, and event markers"
>
  <a :href="resolveAssetUrl('/videos/after-demo.webm')">Watch the Three.js demo.</a>
</SlidevVideo>

<div class="mt-3 text-center text-base text-slate-600">
Recorded Space view · smoother interaction and richer graphics
</div>

<script setup>
import { resolveAssetUrl } from '@slidev/client'
</script>

<style>
.slidev-layout.case-study-demo-slide {
  justify-content: flex-start;
  padding-top: 7rem;
}
</style>

<!--
- Before: public/videos/before-demo.webm on slide 10. After: public/videos/after-demo.webm here. Both are silent recordings of approximately 15 seconds.
- Play using the native controls. SlidevVideo pauses and resets on leaving; the before video also pauses and resets when its reveal is hidden. Neither autoplays.
- The before clip is cropped to the map; the after clip includes the application UI. Preserve their full frames rather than cropping away context or stretching them to match.
- These recordings illustrate behavior; the next slide's measurements come from the separate Chrome Performance captures, not the videos' encoded frame rate.
-->

---
class: profile-metrics-slide
---

# Three Versions, Observable Gains

<div class="text-base text-slate-600">
During dragging · interactive Chrome DevTools captures
</div>

| Metric                           | Original SVG | SVG refactor | Three.js rewrite |
| -------------------------------- | -----------: | -----------: | ---------------: |
| Drawn frames / second            |         10.9 |     **35.9** |         **74.2** |
| Average main-thread map callback |      30.9 ms |  **22.6 ms** |       **4.9 ms** |
| 95th-percentile map callback     |      39.2 ms |  **31.6 ms** |       **8.8 ms** |
| Main-thread busy time            |        46.9% |        92.2% |        **45.8%** |

<div class="text-xl font-bold text-blue-800">
Refactoring helped. The Three.js rewrite went further.
</div>

<div class="mt-3 text-base text-slate-700">
Three.js also adds animated Earth, Moon, satellite, and 3D markers.
</div>

<style>
.slidev-layout.profile-metrics-slide {
  background: #f8fafc;
  justify-content: flex-start;
  padding-top: 7rem;
}

.profile-metrics-slide table {
  font-size: 1.05rem;
  font-variant-numeric: tabular-nums;
  margin: 0.8rem 0 1rem;
  width: 100%;
}

.profile-metrics-slide th,
.profile-metrics-slide td {
  padding: 0.5rem 0.65rem;
}

.profile-metrics-slide thead {
  background: #e2e8f0;
}
</style>

<!--
- Source: performance-profiling/three-way-comparison.md, using svg-version.json.gz, svg-updated.json.gz, and three-js-version.json.gz. All slide numbers come from interactive DevTools captures, not the headless replay.
- Original SVG: 34 DrawFrame events / 3.123 s across three drags; SVG refactor: 237 / 6.593 s across five drags; Three.js rewrite: 196 / 2.641 s across three drags.
- Inclusive map callback durations use the SVG drag timer (35 calls), refactored renderFrame (239 calls), and SkyMap.draw (196 calls during drags). Percentiles use nearest rank; do not mix in idle animation callbacks.
- Main-thread busy time is the union of CrRendererMain RunTask intervals clipped to the drag windows. More frequent updates explain why the SVG refactor improves throughput while occupying more of the main thread.
- Original SVG waits 50 ms before drag updates and recreates ticks. The refactor preserves movement, reuses nodes, and narrows updates, without reducing geographic detail. Approximately 99.3% of sampled refactored render time still regenerates the background.
- Three.js changes the background representation to a texture-backed shader and uses numeric geometry while keeping D3's projection math. It delivers higher observed frame throughput with the richer animated Space view: Earth, Moon, satellite, and 3D markers.
- At 60 Hz the entire frame budget is 16.7 ms: the refactored SVG callback still averages 22.6 ms; the Three.js callback averages 4.9 ms. These callbacks are not complete GPU/display frame timings.
- These are observed gains in this application, not universal renderer speedup factors. Viewport is 1920 × 999 / DPR 1; development code and extensions are present. Gestures and capture lengths differ (12.1 s original, 17.6 s refactor, 13.9 s rewrite).
- We revisited SVG after the Three.js migration; the column order compares approaches, not the chronology of the experiments.
- Higher throughput does not establish universally lower input-to-presentation latency, lower memory use, or lower total CPU usage. Preserve those distinctions when discussing the richer graphics.
-->

---

# A Result I Could Feel Good About

The visualization was much better on EVERY metric.

- Higher frame rate
- Smoother animations
- Better controls

---

# Explore the Talk Online

<div class="flex items-center justify-center gap-12 mt-10">
  <img
    src="/images/d3-threejs-data-viz-qr.svg"
    class="w-80 rounded-xl shadow-lg"
    alt="QR code linking to the talk online"
  />
  <div class="max-w-lg text-xl">
    <p>Scan to explore the talk online.</p>
    <a href="https://jbeers.github.io/talks/d3-threejs-data-viz">
      jbeers.github.io/talks/d3-threejs-data-viz
    </a>
  </div>
</div>

---

# Let’s See Three.js In Practice

- Development Considersations
- Three.js features
- Animation/presentation tips

---
class: demo-slide rendering-demo
---

# Draw a Shape with SVG

<div class="demo-kind">Illustration</div>
<div class="demo-lead">A shape is a DOM element. Change its attributes to change its appearance.</div>

<div class="svg-demo-layout demo-stage">
    <section class="svg-demo-panel svg-demo-controls">
      <h2>Try changing the color</h2>
      <label for="svg-shape">
        <span>Shape</span>
        <select id="svg-shape" v-model="shape">
          <option value="circle">Circle</option>
          <option value="square">Square</option>
          <option value="triangle">Triangle</option>
          <option value="blob">Organic Blob</option>
        </select>
      </label>
      <label for="svg-color">
        <span>Color <output>{{ hue }}°</output></span>
        <input
          id="svg-color"
          v-model.number="hue"
          type="range"
          min="0"
          max="360"
          step="1"
          :style="{ accentColor: color }"
        />
      </label>
      <details class="demo-more">
        <summary @keydown.space.stop>More SVG controls</summary>
      <label class="three-demo-checkbox" for="svg-fill">
        <span>Fill</span>
        <input id="svg-fill" v-model="filled" type="checkbox" />
      </label>
      <label for="svg-opacity">
        <span>Opacity <output>{{ opacity }}%</output></span>
        <input id="svg-opacity" v-model.number="opacity" type="range" min="20" max="100" step="1" />
      </label>
      <label for="svg-stroke-width">
        <span>Stroke width <output>{{ strokeWidth }}</output></span>
        <input id="svg-stroke-width" v-model.number="strokeWidth" type="range" min="1" max="12" step="1" />
      </label>
      <label for="svg-texture">
        <span>Pattern</span>
        <select id="svg-texture" v-model="textureChoice">
          <option value="none">None</option>
          <option value="grid">Grid</option>
          <option value="dots">Dots</option>
          <option value="noise">Noise</option>
        </select>
      </label>
      <label for="svg-texture-scale">
        <span>Pattern scale <output>{{ textureScale }}×</output></span>
        <input id="svg-texture-scale" v-model.number="textureScale" type="range" min="1" max="8" step="1" />
      </label>
      </details>
    </section>
  <section class="svg-demo-panel svg-demo-output">
    <div class="svg-demo-output-header">
      <h2>SVG Output</h2>
      <div class="svg-demo-view-toggle" role="radiogroup" aria-label="SVG output view">
        <label :class="{ 'is-selected': view === 'rendered' }"><input v-model="view" name="svg-view" type="radio" value="rendered" /><span>Rendered</span></label>
        <label :class="{ 'is-selected': view === 'code' }"><input v-model="view" name="svg-view" type="radio" value="code" /><span>Code sketch</span></label>
      </div>
    </div>
    <svg v-if="view === 'rendered'" viewBox="0 0 400 300" role="img" aria-label="Interactive SVG drawing">
      <defs>
        <pattern id="svg-demo-grid" width="25" height="25" patternUnits="userSpaceOnUse">
          <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#e2e8f0" stroke-width="1" />
        </pattern>
        <pattern v-if="textureChoice === 'grid'" id="svg-demo-grid-texture" width="24" height="24" patternUnits="userSpaceOnUse" :patternTransform="textureTransform">
          <rect width="24" height="24" :fill="color" />
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#f8fafc" stroke-width="3" />
        </pattern>
        <pattern v-if="textureChoice === 'dots'" id="svg-demo-dots-texture" width="24" height="24" patternUnits="userSpaceOnUse" :patternTransform="textureTransform">
          <rect width="24" height="24" :fill="color" />
          <circle cx="12" cy="12" r="4" fill="#f8fafc" />
        </pattern>
        <filter v-if="textureChoice === 'noise'" id="svg-demo-noise" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" :baseFrequency="0.08 * textureScale" numOctaves="2" seed="4" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
        </filter>
      </defs>
      <rect width="400" height="300" fill="url(#svg-demo-grid)" />
      <g :style="{ opacity: opacity / 100, strokeWidth }" :filter="textureChoice === 'noise' ? 'url(#svg-demo-noise)' : undefined">
        <circle v-if="shape === 'circle'" class="svg-demo-shape" cx="200" cy="150" r="82" :fill="fill" />
        <rect v-else-if="shape === 'square'" class="svg-demo-shape" x="118" y="68" width="164" height="164" :fill="fill" />
        <polygon v-else-if="shape === 'triangle'" class="svg-demo-shape" points="200,55 305,235 95,235" :fill="fill" />
        <path v-else class="svg-demo-shape" d="M55 150 C85 70 160 62 214 116 C260 162 307 140 345 72 C330 166 274 229 214 214 C151 198 95 185 55 150Z" :fill="fill" />
      </g>
    </svg>
    <div v-else class="svg-demo-code" v-html="highlightedSvgCode"></div>
  </section>
</div>

<div class="demo-takeaway">Use SVG for direct styling and interaction. Measure the cost when many marks change.</div>

<script setup>
import { computed, ref } from 'vue'

const view = ref('rendered')
const shape = ref('circle')
const hue = ref(210)
const filled = ref(true)
const opacity = ref(100)
const strokeWidth = ref(5)
const textureChoice = ref('none')
const textureScale = ref(2)
const color = computed(() => `hsl(${hue.value}, 80%, 58%)`)
const textureTransform = computed(() => `scale(${(1 / textureScale.value).toFixed(2)})`)
const fill = computed(() => {
  if (!filled.value) return 'none'
  if (textureChoice.value === 'grid') return 'url(#svg-demo-grid-texture)'
  if (textureChoice.value === 'dots') return 'url(#svg-demo-dots-texture)'
  return color.value
})

const svgCode = computed(() => {
  const attributes = `fill="${fill.value}" stroke="#0f172a" stroke-width="${strokeWidth.value}" opacity="${(opacity.value / 100).toFixed(2)}"${textureChoice.value === 'noise' ? ' filter="url(#svg-demo-noise)"' : ''}`
  const shapes = {
    circle: `<circle cx="200" cy="150" r="82" ${attributes} />`,
    square: `<rect x="118" y="68" width="164" height="164" ${attributes} />`,
    triangle: `<polygon points="200,55 305,235 95,235" ${attributes} />`,
    blob: `<path d="M55 150 C85 70 160 62 214 116 C260 162 307 140 345 72 C330 166 274 229 214 214 C151 198 95 185 55 150Z" ${attributes} />`,
  }
  const background = `<pattern id="svg-demo-grid" width="25" height="25" patternUnits="userSpaceOnUse">\n      <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#e2e8f0" stroke-width="1" />\n    </pattern>`
  const textureDefs = {
    grid: `<pattern id="svg-demo-grid-texture" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="${textureTransform.value}">\n      <rect width="24" height="24" fill="${color.value}" />\n      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#f8fafc" stroke-width="3" />\n    </pattern>`,
    dots: `<pattern id="svg-demo-dots-texture" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="${textureTransform.value}">\n      <rect width="24" height="24" fill="${color.value}" />\n      <circle cx="12" cy="12" r="4" fill="#f8fafc" />\n    </pattern>`,
    noise: `<filter id="svg-demo-noise">\n      <feTurbulence type="fractalNoise" baseFrequency="${(0.08 * textureScale.value).toFixed(2)}" numOctaves="2" seed="4" />\n      <feColorMatrix type="saturate" values="0" />\n    </filter>`,
  }[textureChoice.value] || ''
  return `<svg viewBox="0 0 400 300">\n  <defs>\n    ${background}\n    ${textureDefs}\n  </defs>\n  <rect width="400" height="300" fill="url(#svg-demo-grid)" />\n  ${shapes[shape.value]}\n</svg>`
})

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function highlightAttributes(attributes) {
  return attributes.replace(
    /(\s+)([\w:-]+)(=)("[^"]*"|'[^']*'|[^\s]+)/g,
    (_, whitespace, name, equals, value) => `${whitespace}<span class="svg-token-attribute">${name}</span><span class="svg-token-punctuation">${equals}</span><span class="svg-token-string">${escapeHtml(value)}</span>`,
  )
}

function highlightLine(line) {
  const match = line.match(/^(\s*)(<\/?)([\w:-]+)(.*?)(\/?)>$/)
  if (!match) return escapeHtml(line)

  const [, indentation, opening, tag, attributes, closing] = match
  return `${escapeHtml(indentation)}<span class="svg-token-tag">${escapeHtml(opening + tag)}</span>${highlightAttributes(attributes)}<span class="svg-token-tag">${closing}&gt;</span>`
}

const highlightedSvgCode = computed(() => svgCode.value.split('\n').map(highlightLine).join('\n'))
</script>

<style>
.svg-demo-slide {
  background: #f8fafc;
  color: #0f172a;
}

.svg-demo-slide h1 {
  color: #0f172a;
  margin-bottom: 0;
}

.svg-demo-layout {
  align-items: stretch;
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.25fr);
  height: 18rem;
  margin-top: 0;
  transform: translateY(-1rem);
  width: 100%;
}

.svg-demo-left {
  display: grid;
  gap: 1rem;
  grid-template-rows: minmax(0, 1fr) minmax(0, 1fr);
  min-width: 0;
}

.svg-demo-panel {
  background: #fff;
  border: 1px solid #cbd5e1;
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);
  padding: 0.75rem 1rem;
}

.svg-demo-panel h2 {
  color: #475569;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  margin: 0 0 0.45rem;
  text-transform: uppercase;
}

.svg-demo-description {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0.5rem 0.75rem;
}

.svg-demo-description p {
  font-size: 1.05rem;
  line-height: 1.45;
  margin: 0 0 0.8rem;
}

.svg-demo-description p:last-child {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 0;
}

.svg-demo-controls {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  justify-content: center;
}

.svg-demo-controls label {
  color: #334155;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  font-weight: 600;
  gap: 0.4rem;
}

.svg-demo-controls label span {
  display: flex;
  justify-content: space-between;
}

.svg-demo-controls output {
  color: #64748b;
  font-variant-numeric: tabular-nums;
  font-weight: 400;
}

.svg-demo-controls select {
  background: #fff;
  border: 1px solid #94a3b8;
  border-radius: 0.5rem;
  color: #0f172a;
  font: inherit;
  padding: 0.4rem 0.55rem;
}

.svg-demo-controls input[type='range'] {
  width: 100%;
}

.svg-demo-output {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.svg-demo-output-header {
  align-items: center;
  display: flex;
  gap: 0.75rem;
  justify-content: space-between;
  margin-bottom: 0.45rem;
}

.svg-demo-output-header h2 {
  margin-bottom: 0;
}

.svg-demo-view-toggle {
  background: #e2e8f0;
  border-radius: 0.45rem;
  display: flex;
  gap: 0.15rem;
  padding: 0.15rem;
}

.svg-demo-view-toggle label {
  align-items: center;
  border-radius: 0.3rem;
  color: #64748b;
  cursor: pointer;
  display: flex;
  font-size: 0.7rem;
  font-weight: 600;
  gap: 0.25rem;
  padding: 0.25rem 0.45rem;
  white-space: nowrap;
}

.svg-demo-view-toggle label.is-selected {
  background: #fff;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.15);
  color: #0f172a;
}

.svg-demo-view-toggle label:focus-within {
  outline: 2px solid #2563eb;
  outline-offset: 1px;
}

.svg-demo-view-toggle input {
  opacity: 0;
  position: absolute;
}

.svg-demo-output svg {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  flex: 1;
  min-height: 0;
  width: 100%;
}

.svg-demo-code {
  background: #0f172a;
  border: 1px solid #1e293b;
  border-radius: 0.75rem;
  color: #e2e8f0;
  flex: 1;
  font-family: 'Fira Code', monospace;
  font-size: 0.72rem;
  line-height: 1.6;
  margin: 0;
  min-height: 0;
  overflow: auto;
  padding: 1rem;
  white-space: pre-wrap;
}

.svg-demo-code pre {
  background: transparent;
  margin: 0;
  padding: 0;
}

.svg-demo-code code {
  background: none;
  color: inherit;
  font-size: inherit;
  padding: 0;
}

.svg-demo-code :deep(.svg-token-tag) {
  color: #f472b6;
}

.svg-demo-code :deep(.svg-token-attribute) {
  color: #7dd3fc;
}

.svg-demo-code :deep(.svg-token-punctuation) {
  color: #94a3b8;
}

.svg-demo-code :deep(.svg-token-string) {
  color: #a7f3d0;
}

.svg-demo-shape {
  stroke: #0f172a;
}
</style>

<!--
- Goal: connect a visible shape to a DOM element and its attributes. Show: move Color once; leave More SVG controls closed. Use: SVG's direct styling and interaction. Limit: repeated updates can become expensive, so profile the workload.
- This is a toy drawing, not case-study evidence. Code sketch shows the main attributes with supporting filter/setup details omitted; it is not an exact serialization of the rendered DOM.
-->

---
class: demo-slide rendering-demo
---

# Build a Three.js Object

<div class="demo-kind">Illustration</div>
<div class="demo-lead">Geometry gives the shape. Material gives the appearance. A mesh brings them together.</div>

<div class="svg-demo-layout demo-stage">
    <section class="svg-demo-panel svg-demo-controls">
      <h2>Try Box → Sphere</h2>
      <label for="three-geometry">
        <span>Geometry</span>
        <select id="three-geometry" v-model="shape">
          <option value="box">Box</option>
          <option value="sphere">Sphere</option>
          <option value="knot">Knot</option>
          <option value="suzanne">Suzanne</option>
        </select>
      </label>
      <details class="demo-more">
        <summary @keydown.space.stop>More material controls</summary>
      <label class="three-demo-checkbox" for="three-wireframe">
        <span>Wireframe</span>
        <input id="three-wireframe" v-model="wireframe" type="checkbox" />
      </label>
      <label class="three-demo-checkbox" for="three-smooth">
        <span>Smooth shading</span>
        <input id="three-smooth" v-model="smoothShading" type="checkbox" />
      </label>
      <label for="three-diffuse">
        <span>Color <output>{{ hue }}°</output></span>
        <input
          id="three-diffuse"
          v-model.number="hue"
          type="range"
          min="0"
          max="360"
          step="1"
          :style="{ accentColor: color }"
        />
      </label>
      <label for="three-specular">
        <span>Shininess <output>{{ specular }}</output></span>
        <input id="three-specular" v-model.number="specular" type="range" min="0" max="100" step="1" />
      </label>
      <label for="three-texture">
        <span>Procedural texture</span>
        <select id="three-texture" v-model="textureChoice">
          <option value="none">None</option>
          <option value="grid">Grid</option>
          <option value="checker">Checkerboard</option>
          <option value="noise">Noise</option>
        </select>
      </label>
      <label for="three-texture-scale">
        <span>Texture scale <output>{{ textureScale }}×</output></span>
        <input id="three-texture-scale" v-model.number="textureScale" type="range" min="1" max="8" step="1" />
      </label>
      </details>
      <p class="demo-caption">The material stays the same when you change the geometry.</p>
    </section>
  <section class="svg-demo-panel svg-demo-output">
    <div class="svg-demo-output-header">
      <h2>Three.js Output</h2>
      <div class="svg-demo-view-toggle" role="radiogroup" aria-label="Three.js output view">
        <label :class="{ 'is-selected': view === 'rendered' }"><input v-model="view" name="three-view" type="radio" value="rendered" /><span>Rendered</span></label>
        <label :class="{ 'is-selected': view === 'code' }"><input v-model="view" name="three-view" type="radio" value="code" /><span>Code sketch</span></label>
      </div>
    </div>
    <div v-show="view === 'rendered'" ref="sceneHost" class="three-demo-canvas" role="img" aria-label="Interactive Three.js scene"></div>
    <div v-show="view === 'code'" class="svg-demo-code" v-html="highlightedThreeCode"></div>
  </section>
</div>

<div class="demo-takeaway">Use meshes for geometry and materials. Keep controls and record descriptions in HTML.</div>

<script setup>
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { computed, nextTick, ref, watch } from 'vue'
import { onSlideEnter, onSlideLeave, resolveAssetUrl } from '@slidev/client'

const sceneHost = ref(null)
const view = ref('rendered')
const shape = ref('box')
const hue = ref(210)
const wireframe = ref(false)
const smoothShading = ref(true)
const specular = ref(55)
const textureChoice = ref('none')
const textureScale = ref(2)
const color = computed(() => `hsl(${hue.value}, 80%, 58%)`)

const geometryCode = computed(() => ({
  box: 'new THREE.BoxGeometry(1.5, 1.5, 1.5)',
  sphere: 'new THREE.SphereGeometry(1.05, 32, 16)',
  knot: 'new THREE.TorusKnotGeometry(0.9, 0.3, 96, 16)',
}[shape.value]))

const materialCode = computed(() => `const texture = ${textureChoice.value === 'none' ? 'null' : 'loadTexture()'}
if (texture) texture.repeat.set(${textureScale.value}, ${textureScale.value})
const material = new THREE.MeshPhongMaterial({
  color: '${color.value}',
  specular: 0xffffff,
  shininess: ${specular.value},
  wireframe: ${wireframe.value},
  flatShading: ${!smoothShading.value},
  map: texture,
})`)

const threeCode = computed(() => shape.value === 'suzanne'
  ? `${materialCode.value}
const object = await new OBJLoader().loadAsync('/suzanne.obj')
object.traverse((part) => {
  if (part.isMesh) part.material = material
})
scene.add(object)`
  : `const geometry = ${geometryCode.value}
${materialCode.value}
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)`)

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function highlightJavaScript(code) {
  const tokens = /(\/\/.*$|'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|`(?:\\.|[^`\\])*`|\b(?:const|new|true|false|null)\b|\b\d+(?:\.\d+)?\b|\bTHREE\b)/gm
  let highlighted = ''
  let lastIndex = 0

  for (const match of code.matchAll(tokens)) {
    const token = match[0]
    const index = match.index
    highlighted += escapeHtml(code.slice(lastIndex, index))
    const tokenClass = token.startsWith('//')
      ? 'svg-token-punctuation'
      : /^['"`]/.test(token)
        ? 'svg-token-string'
        : /^\d/.test(token) || token === 'THREE'
          ? 'svg-token-attribute'
          : 'svg-token-tag'
    highlighted += `<span class="${tokenClass}">${escapeHtml(token)}</span>`
    lastIndex = index + token.length
  }

  return highlighted + escapeHtml(code.slice(lastIndex))
}

const highlightedThreeCode = computed(() => highlightJavaScript(threeCode.value))

const geometryFactories = {
  box: () => new THREE.BoxGeometry(1.5, 1.5, 1.5),
  sphere: () => new THREE.SphereGeometry(1.05, 32, 16),
  knot: () => new THREE.TorusKnotGeometry(0.9, 0.3, 96, 16),
}

let renderer
let scene
let camera
let model
let material
let mapTexture
let mapTextureKind
let reduceMotion = false
let loadRequest = 0
let animationFrame
let resizeObserver

function resize() {
  if (!renderer || !camera || !sceneHost.value) return

  const width = sceneHost.value.clientWidth
  const height = sceneHost.value.clientHeight
  if (!width || !height) return

  renderer.setSize(width, height, false)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
}

function createTexture(kind) {
  if (kind === 'none') return null

  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = 128
  const context = canvas.getContext('2d')
  if (!context) return null

  context.fillStyle = '#f8fafc'
  context.fillRect(0, 0, 128, 128)
  if (kind === 'grid') {
    context.strokeStyle = '#64748b'
    context.lineWidth = 3
    for (let position = 0; position <= 128; position += 32) {
      context.beginPath()
      context.moveTo(position, 0)
      context.lineTo(position, 128)
      context.moveTo(0, position)
      context.lineTo(128, position)
      context.stroke()
    }
  } else if (kind === 'checker') {
    for (let row = 0; row < 4; row++) {
      for (let column = 0; column < 4; column++) {
        context.fillStyle = (row + column) % 2 ? '#94a3b8' : '#f8fafc'
        context.fillRect(column * 32, row * 32, 32, 32)
      }
    }
  } else {
    const pixels = context.createImageData(128, 128)
    for (let index = 0; index < pixels.data.length; index += 4) {
      const value = 80 + Math.random() * 175
      pixels.data[index] = value
      pixels.data[index + 1] = value
      pixels.data[index + 2] = value
      pixels.data[index + 3] = 255
    }
    context.putImageData(pixels, 0, 0)
  }

  const map = new THREE.CanvasTexture(canvas)
  map.colorSpace = THREE.SRGBColorSpace
  return map
}

function disposeModel(object = model) {
  if (!object) return

  object.traverse((part) => part.geometry?.dispose())
  object.removeFromParent()
}

function replaceModel(nextModel) {
  disposeModel()
  model = nextModel
  model.traverse((part) => {
    if (part.isMesh) part.material = material
  })
  scene.add(model)
}

function normalizeModel(object) {
  const size = new THREE.Vector3()
  const bounds = new THREE.Box3().setFromObject(object)
  bounds.getSize(size)
  object.scale.setScalar(2.2 / (Math.max(size.x, size.y, size.z) || 1))
  bounds.setFromObject(object)
  object.position.sub(bounds.getCenter(new THREE.Vector3()))
}

function updateGeometry() {
  if (!scene || !material) return

  const request = ++loadRequest
  if (shape.value === 'suzanne') {
    disposeModel()
    new OBJLoader().load(resolveAssetUrl('/suzanne.obj'), (object) => {
      if (request !== loadRequest || shape.value !== 'suzanne' || !scene) {
        disposeModel(object)
        return
      }
      normalizeModel(object)
      replaceModel(object)
    })
    return
  }

  replaceModel(new THREE.Mesh(geometryFactories[shape.value](), material))
}

function updateMaterial() {
  if (!material) return

  material.color.set(color.value)
  material.shininess = specular.value
  material.wireframe = wireframe.value
  material.flatShading = !smoothShading.value
  if (mapTextureKind !== textureChoice.value) {
    mapTexture?.dispose()
    mapTexture = createTexture(textureChoice.value)
    mapTextureKind = textureChoice.value
    material.map = mapTexture
  }
  if (mapTexture) {
    mapTexture.wrapS = THREE.RepeatWrapping
    mapTexture.wrapT = THREE.RepeatWrapping
    mapTexture.repeat.set(textureScale.value, textureScale.value)
  }
  material.needsUpdate = true
}

function animate() {
  if (!renderer || !scene || !camera) return

  animationFrame = requestAnimationFrame(animate)
  if (model && !reduceMotion) {
    model.rotation.x += 0.008
    model.rotation.y += 0.012
  }
  renderer.render(scene, camera)
}

function createScene() {
  if (renderer || !sceneHost.value) return

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100)
  camera.position.set(3.8, 2.4, 6.5)
  camera.lookAt(0, 0, 0)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  sceneHost.value.appendChild(renderer.domElement)

  scene.add(new THREE.AmbientLight(0xffffff, 0.65))
  const keyLight = new THREE.DirectionalLight(0xffffff, 2.5)
  keyLight.position.set(-3, 4, 6)
  scene.add(keyLight)

  material = new THREE.MeshPhongMaterial({
    color: color.value,
    specular: 0xffffff,
    shininess: specular.value,
    wireframe: wireframe.value,
    flatShading: !smoothShading.value,
  })
  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  updateMaterial()
  updateGeometry()

  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(sceneHost.value)
  resize()
  animate()
}

function disposeScene() {
  if (animationFrame) cancelAnimationFrame(animationFrame)
  loadRequest++
  resizeObserver?.disconnect()
  disposeModel()
  mapTexture?.dispose()
  material?.dispose()
  renderer?.dispose()
  renderer?.domElement.remove()

  renderer = scene = camera = model = material = mapTexture = animationFrame = resizeObserver = undefined
  mapTextureKind = undefined
}

watch(shape, updateGeometry)
watch([hue, wireframe, smoothShading, specular, textureChoice, textureScale], updateMaterial)
onSlideEnter(async () => {
  await nextTick()
  createScene()
})
onSlideLeave(disposeScene)
</script>

<!--
- Goal: connect geometry and material to the rendered mesh. Show: change Box to Sphere once and notice that its material stays the same. Use: meshes when geometry and materials suit the visual task. Limit: they do not provide HTML controls or record descriptions for you.
- This is an illustration, not a benchmark or a production-code adaptation. Code sketch shows the object setup; camera, rendering, and cleanup are omitted. Rotation is decorative and stops when reduced motion is enabled on entry.
-->

---
class: handoff-slide d3-handoff-slide
---

# One Event, from D3 to Three.js


<div class="mb-2 text-base">
<code>event = { event_id: 'demo', ra: 236.54, dec: -4.217 }</code> · angles in degrees
</div>

<div class="grid grid-cols-2 gap-5">
<div class="min-w-0">

<h2 class="font-bold text-blue-900">D3 → clipped screen coordinates</h2>

<<< @/snippets/d3-handoff.mjs#projection js

<<< @/snippets/d3-handoff.mjs#project js

<div class="mt-2 text-base"><code>point ≈ [455.23, 314.36]</code></div>

</div>
<div class="min-w-0">

<h2 class="font-bold text-blue-900">Three.js → an existing marker instance</h2>

<<< @/snippets/d3-handoff.mjs#place js

```js
renderer.render(scene, camera)
```

<div class="mt-2 text-base"><code>position ≈ (455.23, -314.36, 0)</code></div>
<div class="mt-3 text-base text-slate-600">
Flip Y for this camera. Zero scale hides clipped points.
</div>

</div>
</div>

<div class="mt-3 text-base font-semibold text-blue-900">
Data or view changes → reproject → update instance matrices → request a frame.
</div>

<!--
- Goal: show the numeric boundary rather than just promise compatibility. Show: follow the one illustrative event from its RA/Dec to the displayed position; no live interaction is needed. Use: keep D3's projection while changing rendering. Limit: clipping, coordinate conventions, and lifecycle still need explicit handling.
- Adapted from portal-to-the-universe @ 6fc819a: modules_app/core/resources/assets/js/components/skyProjection.mjs createProjection() (line 37) and visiblePoint() (line 60); SkyMap.js projectMarkers() (line 202), updateMarkers() (line 263), and setData() (line 367).
- The event is an illustrative fixture using the production field shape, not an asserted catalog record. Production coordinates() validates catalog values first; this example starts with valid numeric RA/Dec in degrees. Do not silently treat missing coordinates as zero.
- At width 900 and zoom 1, the production scale formula gives (900 - 120) * (1 - 0.5) = 390. The rotation is an illustrative view setting. The numbers shown here are checked by node snippets/d3-handoff.mjs.
- Direct projection([ra, dec]) bypasses clipping. The stream calls point(x, y) only when the point passes angular and viewport clipping; the null case is intentional.
- The mesh is an existing InstancedMesh of 10 × 10 planes; dummy is a reused Object3D rotated 45 degrees for Graphic mode. Camera, scene, mesh/material allocation, selection styling, and lifecycle setup are omitted from the visible handoff. The instancing demonstration explains why instances are useful.
- The real OrthographicCamera uses left=0, right=width, top=0, bottom=-height. Hence [x, y] screen pixels become [x, -y, 0] in local scene coordinates. Zero Z keeps the marks flat; the production sky layer has a separate depth offset.
- A drag/zoom/resize marks the view dirty and reprojects existing markers. setData() matches event_id, retains marker state, and grows instance capacity only when needed. Stable IDs do not imply permanently stable instance indices.
- instanceMatrix.needsUpdate schedules upload of changed numeric transforms; it is not the draw itself. Production updates the batch, then renderer.render(scene, camera) runs inside its coalesced requestAnimationFrame callback, not once per event.
- Reuse here specifically means marker resources. The current implementation still replaces projected line/region geometries on relevant view changes; do not claim that every buffer is reused.
- No invented magnitude-to-size scale: Graphic marks have a fixed size; Space classification colors use a fixed palette. A quantitative scale belongs in the example only if the data has a meaningful quantitative encoding.
- For geographic lines/regions, projectPath() also keeps D3: geoPath(projection, customContext) emits numeric segments and Three.js ShapePath operations rather than SVG d strings.
- The runnable check verifies clipping, coordinate conversion, orthographic mapping, and instance reuse without a browser; it is not a rendering benchmark or a full application reproduction.
-->

---
class: handoff-slide d3-handoff-slide force-layout-slide
---

# D3 Can Compute the Layout, Too

<div class="mb-4 text-base text-slate-600">Synthetic example—not part of the case study.</div>

<div class="force-layout-grid">
<div>

<h2 class="font-bold text-blue-900">On each D3 simulation tick</h2>

<<< @/slides.md#force-upload js

<div class="mt-5 text-lg"><strong>D3’s simulation still runs on the CPU.</strong></div>
<div class="mt-3 text-base text-slate-600">Colors stay with the nodes. Regroup changes which cluster each node moves toward.</div>
<div class="mt-4 text-base font-semibold">320 nodes · one position buffer</div>

</div>
<div>
  <div class="force-layout-stage" role="img" aria-label="320 synthetic nodes in four clusters. Regroup switches from category-based targets to an alternate grouping key; node colors do not change.">
    <svg v-if="!ready" class="force-layout-fallback" viewBox="0 0 640 400" aria-hidden="true">
      <circle v-for="(node, i) in previewNodes" :key="i" :cx="node.x" :cy="node.y" r="2.8" :fill="node.color" />
    </svg>
    <div ref="sceneHost" class="force-layout-canvas" aria-hidden="true"></div>
  </div>
  <div class="force-layout-controls">
    <button type="button" :disabled="!ready" @click="regroup">Regroup</button>
    <div class="force-layout-status" role="status" aria-live="polite">
      <template v-if="error">{{ error }}</template>
      <template v-else-if="ready">{{ mixed ? 'Alternate key' : 'Category' }} · {{ settled ? 'settled' : 'settling…' }}<span v-if="reducedMotion"> · reduced motion</span></template>
      <template v-else>Static preview · 80 nodes per category</template>
    </div>
  </div>
</div>
</div>

<div class="mt-4 text-base font-semibold text-blue-900">D3 updates positions → buffer changes → GPU draws nodes.</div>

<script setup>
import * as THREE from 'three'
import { forceCollide, forceSimulation, forceX, forceY } from 'd3'
import { nextTick, onBeforeUnmount, ref } from 'vue'
import { onSlideEnter, onSlideLeave, useIsSlideActive, useNav, useSlideContext } from '@slidev/client'

const sceneHost = ref(null)
const ready = ref(false), settled = ref(false), mixed = ref(false), reducedMotion = ref(false)
const error = ref('')
const active = useIsSlideActive()
const { isPrintMode } = useNav()
const { $renderContext: renderContext } = useSlideContext()
const count = 320
const palette = ['#38bdf8', '#f472b6', '#fbbf24', '#34d399']
const targets = [[-150, 85], [150, 85], [-150, -85], [150, -85]]
// ponytail: static preview illustrates the clusters, not exact solver output; capture a live frame if pixel matching matters.
const previewNodes = Array.from({ length: count }, (_, i) => {
  const n = Math.floor(i / 4), angle = n * Math.PI * (3 - Math.sqrt(5)), radius = 4.4 * Math.sqrt(n)
  const [x, y] = targets[i % 4]
  return { x: 320 + x + Math.cos(angle) * radius, y: 200 - y + Math.sin(angle) * radius, color: palette[i % 4] }
})
let renderer, scene, camera, geometry, material, positions, simulation, resizeObserver, events, preference
let nodes = [] // Plain objects: D3 ticks never mutate Vue's reactive state.

function draw() {
  if (!renderer) return
  // #region force-upload
  nodes.forEach((node, i) => {
    positions.setXYZ(i, node.x, node.y, 0)
  })
  positions.needsUpdate = true
  renderer.render(scene, camera)
  // #endregion
}

function run() {
  if (!simulation || document.hidden) return
  simulation.stop()
  if (reducedMotion.value) {
    const ticks = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay()))
    simulation.tick(ticks) // Manual ticks don't dispatch D3's tick/end events.
    draw()
    settled.value = true
  } else if (simulation.alpha() >= simulation.alphaMin()) {
    settled.value = false
    simulation.restart()
  }
}

function retarget() {
  const group = node => mixed.value ? Math.floor(node.id / 4) % 4 : node.id % 4
  simulation.force('x', forceX(node => targets[group(node)][0]).strength(0.14))
  simulation.force('y', forceY(node => targets[group(node)][1]).strength(0.14))
  simulation.alpha(1)
  run()
}

function regroup() {
  if (!simulation) return
  mixed.value = !mixed.value
  retarget()
}

function resize() {
  if (!renderer || !sceneHost.value) return
  const width = sceneHost.value.clientWidth, height = sceneHost.value.clientHeight
  if (!width || !height) return
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
  renderer.setSize(width, height, false)
  camera.left = -200 * width / height
  camera.right = 200 * width / height
  camera.updateProjectionMatrix()
  draw()
}

function disposeScene() {
  simulation?.stop()
  simulation?.on('tick', null).on('end', null)
  resizeObserver?.disconnect()
  events?.abort()
  geometry?.dispose()
  material?.dispose()
  renderer?.dispose()
  renderer?.forceContextLoss()
  renderer?.domElement.remove()
  renderer = scene = camera = geometry = material = positions = simulation = resizeObserver = events = preference = undefined
  nodes = []
  ready.value = false
}

function createScene() {
  if (renderer || !sceneHost.value) return
  error.value = ''
  mixed.value = false
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setClearColor(0x0f172a)
    sceneHost.value.appendChild(renderer.domElement)
    scene = new THREE.Scene()
    camera = new THREE.OrthographicCamera(-320, 320, 200, -200, 0.1, 100)
    camera.position.z = 10
    nodes = Array.from({ length: count }, (_, id) => ({ id }))
    positions = new THREE.BufferAttribute(new Float32Array(count * 3), 3)
    positions.setUsage(THREE.DynamicDrawUsage)
    geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', positions)
    const colors = new Float32Array(count * 3)
    nodes.forEach((node, i) => new THREE.Color(palette[node.id % 4]).toArray(colors, i * 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    material = new THREE.PointsMaterial({ size: 5, vertexColors: true, sizeAttenuation: false })
    const points = new THREE.Points(geometry, material)
    points.frustumCulled = false // Positions change without recomputing a bounding sphere.
    scene.add(points)
    simulation = forceSimulation(nodes).stop()
      .alphaDecay(0.05)
      .force('collide', forceCollide(5))
      .on('tick', draw)
      .on('end', () => { settled.value = true })
    events = new AbortController()
    preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    reducedMotion.value = preference.matches
    preference.addEventListener('change', event => {
      reducedMotion.value = event.matches
      run()
    }, { signal: events.signal })
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) simulation?.stop()
      else run()
    }, { signal: events.signal })
    renderer.domElement.addEventListener('webglcontextlost', event => {
      event.preventDefault()
      disposeScene()
      error.value = 'WebGL unavailable · static illustration shown'
    }, { signal: events.signal })
    resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(sceneHost.value)
    ready.value = true
    resize()
    retarget()
  } catch (cause) {
    disposeScene()
    error.value = 'WebGL unavailable · static illustration shown'
    console.warn('Force demo could not initialize', cause)
  }
}

onSlideEnter(async () => {
  await nextTick()
  if (active.value && !isPrintMode.value && ['slide', 'presenter'].includes(renderContext.value)) createScene()
})
onSlideLeave(disposeScene)
onBeforeUnmount(disposeScene)
</script>

<!--
- Planned 60–90-second delivery: (0–20s) establish the synthetic data and CPU/GPU boundary; (20–40s) let the four category clusters settle and point out the shared position buffer; (40–65s) press Regroup once and watch the same colored records follow a different grouping key; (65–80s) trace tick → numeric buffer → render, then state the limitation. Rehearsal must confirm the actual delivery time.
- There are 320 synthetic records, four original categories of 80, and four targets. Regroup switches between id % 4 and floor(id / 4) % 4. Color stays tied to the original category; the alternate layout mixes colors rather than changing the underlying records.
- forceX/forceY pull nodes toward targets; forceCollide separates them. Replacing the position forces refreshes D3's cached targets, and alpha(1).restart() reheats the existing simulation. We keep the same node objects, geometry, and position buffer across regrouping.
- D3 owns the CPU simulation timer. Its tick callback writes a Three.js BufferAttribute; needsUpdate schedules an upload, and renderer.render submits the points. There is no second perpetual requestAnimationFrame loop and no Vue update for each node on each tick.
- Use this pattern when a CPU layout algorithm produces positions for a renderer. WebGL does not move D3's force solver onto the GPU; a larger or more expensive simulation can still block the main thread. This scene illustrates architecture, not a performance threshold or benchmark.
- The simulation cools and stops on its own. Leaving the slide stops it immediately and releases observers, listeners, geometry, material, and renderer. Hidden documents pause it. Reduced motion settles synchronously and renders once; Regroup still works without an animated transition.
- Print, overview, and inactive previews show a clearly labeled static SVG illustration, not a live WebGL simulation. The same illustration is available if WebGL initialization fails or its context is lost.
- There are deliberately no edges, dragging, or physics sliders. One planned interaction is enough to demonstrate the handoff.
-->

---
class: handoff-slide d3-handoff-slide
---

# Vue Owns State, Not Every Frame

<div class="mb-4 text-base text-slate-600">Adapted from the application’s CelestialMap.vue · renderer setup stays behind createSkyMap()</div>

<div class="grid grid-cols-2 gap-5">
<div>

<h2 class="font-bold text-blue-900">Vue: mount → update → unmount</h2>

```js
const viewport = ref(null)
let map

onMounted(() => {
  map = createSkyMap(viewport.value)
  map.setData(store.results.loc)
})
watch(() => store.results.loc,
  data => map?.setData(data))
onBeforeUnmount(() => map?.destroy())
```

<div class="mt-3 text-base">Host element: <code>&lt;div ref="viewport"&gt;&lt;/div&gt;</code></div>

</div>
<div>

<h2 class="font-bold text-blue-900">React: the same ownership boundary</h2>

```js
useEffect(() => {
  const view = createSkyMap(host.current)
  map.current = view
  return () => view.destroy()
}, [])
useEffect(() => {
  map.current?.setData(events)
}, [events])
```

<div class="mt-3 text-base text-slate-600">DOM and renderer refs are created with <code>useRef(null)</code>. Data updates do not recreate the renderer.</div>

</div>
</div>

<div class="mt-5 rounded-xl bg-blue-100 px-5 py-4 text-lg text-blue-900">Update buffers, <strong>not</strong> the component tree. Keep render objects outside reactive state.</div>

<!--
- Source: portal-to-the-universe @ 6fc819a, modules_app/core/resources/assets/js/components/CelestialMap.vue, especially startMap(), the results.loc watch, onMounted(), and onBeforeUnmount(). The visible adapter omits retry/popover/selection UI, region watches, and motion preferences so the ownership boundary stays readable.
- createSkyMap is the real application API, not a newly invented abstraction. It appends one canvas and returns controls. The Vue component owns store subscriptions and DOM UI; the renderer owns Three.js objects and frame scheduling. The element ref must exist before initialization, so initialize after mount, not during setup/render.
- The real search store replaces results.loc arrays. A shallow watch is sufficient for that contract; in-place record mutation would need an explicit update signal. setData() performs validation, matches event IDs, and reuses marker capacity where possible.
- Keep the controls object, node positions, and typed buffers out of deep reactive state. UI state such as selection remains reactive; frame-by-frame position changes do not need to reconcile hundreds of components.
- The React code is an illustrative equivalent, not part of the production Vue application. host and map are useRef(null) values, and the host is a div with ref={host}. Effects run in order: create the view, then send initial/current data. The cleanup closes over its own view, including React development Strict Mode's setup/cleanup/setup cycle.
- Production startMap() catches WebGL initialization failures and retains the Results-based way to inspect data; it also supports retry. Those error and accessibility paths are omitted from the visible excerpt, not recommendations to remove them.
- Slidev can keep inactive slide components mounted. The preceding demo therefore also uses onSlideLeave() for cleanup, with an active-slide guard after nextTick(); onBeforeUnmount alone would not cover slide navigation.
-->

---
class: handoff-slide d3-handoff-slide
---

# Resize and Clean Up

<div class="mb-4 text-base text-slate-600">The component calls destroy(). The renderer releases what it owns.</div>

<div class="grid grid-cols-2 gap-5">
<div>

<h2 class="font-bold text-blue-900">Inside the resize callback</h2>

```js
const box =
  container.getBoundingClientRect()
width = box.width; height = box.height
if (!width || !height) return
renderer.setSize(width, height, false)
viewDirty = true
requestFrame()
```

<div class="mt-3 text-base text-slate-600">Next frame: recompute the D3 projection and this map’s orthographic camera bounds.</div>

</div>
<div class="lifecycle-checklist">

<h2 class="font-bold text-blue-900">Teardown checklist</h2>

- **Stop work:** cancel animation frames and timers; stop D3 simulations.
- **Detach:** disconnect observers; abort or remove event listeners.
- **Release GPU resources:** dispose owned geometry, materials, textures, and renderer.
- **Remove the canvas:** do not leave an orphaned drawing surface.

</div>
</div>

<div class="mt-5 rounded-xl bg-blue-100 px-5 py-4 text-lg text-blue-900">Removing the canvas is not the same as cleaning up.</div>

<!--
- Source: portal-to-the-universe @ 6fc819a, SkyMap.js resizeRenderer() and destroy(). The excerpt is the ResizeObserver callback body; observer creation and observe(container) are omitted. It uses the renderer's existing width/height variables, not new shadowing locals. Production also caps devicePixelRatio at 2 and observes visibility; those details are outside the visible resize excerpt.
- viewDirty causes draw() to rebuild the geographic projection, update camera.right and camera.bottom, call camera.updateProjectionMatrix(), and refresh affected geometry before rendering. A PerspectiveCamera would instead need an updated aspect ratio. Changing canvas dimensions alone is insufficient.
- renderer.setSize(width, height, false) changes the drawing buffer without taking over CSS layout. A zero-size guard avoids invalid projections while the host is hidden. In the Slidev demo, clientWidth/clientHeight deliberately exclude Slidev's outer CSS scale.
- Production destroy() marks the renderer destroyed, cancels its requestAnimationFrame and tooltip timeout, aborts signal-bound listeners, disconnects resize/intersection observers, disposes unique owned geometries/materials/textures and instance resources, then disposes the renderer and removes its canvas.
- simulation.stop() belongs to the preceding synthetic force demo; the production sky map does not contain a force simulation. The demo has no perpetual extra animation loop: stopping D3's timer stops its recurring draws.
- AbortController only removes listeners that were registered with its signal. Removing a canvas is not a substitute for stopping timers or disposing GPU resources. Dispose owned resources, not assets borrowed from another owner.
- Cleanup must tolerate partial initialization and repeated calls. On slide re-entry or component remount, create one fresh renderer—not another canvas beside the old one. The force demo is checked for leave/re-entry, reduced motion, and WebGL failure.
-->

---
class: demo-slide instancing-slide
---

# InstancedMesh: Share the Shape

<div class="demo-kind">Illustration</div>
<div class="demo-lead">Draw repeated marks with fewer submissions to the GPU.</div>

<div class="instancing-scene-stage demo-stage demo-dark">
  <div ref="sceneHost" class="instancing-scene" role="img" aria-label="The same 3D markers rendered with separate meshes on the left and instancing on the right"></div>
  <div class="instancing-scene-divider" aria-hidden="true"></div>
  <div class="instancing-side-label instancing-side-label--left">
    <div class="instancing-eyebrow">WITHOUT INSTANCING</div>
    <h2>Separate meshes</h2>
  </div>
  <div class="instancing-side-label instancing-side-label--right">
    <div class="instancing-eyebrow">WITH INSTANCING</div>
    <h2>One <code>InstancedMesh</code></h2>
  </div>
  <div class="instancing-side-stats instancing-side-stats--left">
    <div class="instancing-counter" aria-live="polite">
      <div class="instancing-counter-item"><strong>{{ markerCount }}</strong><span>{{ markerCount === 1 ? 'Mesh' : 'Meshes' }}</span></div>
    </div>
    <div class="instancing-draw-count">{{ markerCount }} marker {{ markerCount === 1 ? 'draw' : 'draws' }} / pass</div>
  </div>
  <div class="instancing-side-stats instancing-side-stats--right">
    <div class="instancing-counter" aria-live="polite">
      <div class="instancing-counter-item"><strong>1</strong><span>InstancedMesh</span></div>
    </div>
    <div class="instancing-draw-count">1 marker draw / pass</div>
  </div>
</div>

<div class="instancing-controls demo-control">
  <label for="instancing-count">Try 3 → 5 markers</label>
  <span class="instancing-range-bound">1</span>
  <input id="instancing-count" v-model.number="markerCount" type="range" min="1" max="5" step="1" :aria-label="'Number of markers: ' + markerCount" />
  <span class="instancing-range-bound">5</span>
  <output for="instancing-count" aria-live="polite">{{ markerCount }}</output>
</div>

<div class="demo-takeaway">Use for shared geometry and material. Every instance still takes GPU work.</div>

<script setup>
import * as THREE from 'three'
import { nextTick, ref, watch } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'

const sceneHost = ref(null)
const markerCount = ref(3)
const markerPositions = [
  new THREE.Vector3(-1.3, 0.05, 0.25),
  new THREE.Vector3(-0.62, -0.45, -0.45),
  new THREE.Vector3(0.05, 0.2, -0.9),
  new THREE.Vector3(0.75, -0.45, -0.1),
  new THREE.Vector3(1.32, -0.1, -0.7),
]
const markerScales = [1, 0.82, 1.12, 0.9, 0.76]
const markerColors = [0x38bdf8, 0x818cf8, 0xf472b6, 0xfbbf24, 0x34d399]

let renderer
let leftScene
let rightScene
let leftCamera
let rightCamera
let leftGroup
let rightGroup
let geometry
let rightMaterial
let rightMesh
let leftMeshes = []
let animationFrame
let resizeObserver
let reduceMotion = false

function createView(background) {
  const view = new THREE.Scene()
  view.background = new THREE.Color(background)
  view.fog = new THREE.Fog(background, 4.5, 9)
  view.add(new THREE.AmbientLight(0xffffff, 1.25))

  const keyLight = new THREE.DirectionalLight(0xffffff, 3)
  keyLight.position.set(-3, 4, 6)
  view.add(keyLight)

  const rimLight = new THREE.DirectionalLight(0x60a5fa, 1.5)
  rimLight.position.set(4, -1, -3)
  view.add(rimLight)
  return view
}

function createCamera() {
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100)
  camera.position.set(0, 0.35, 5.5)
  camera.lookAt(0, 0, 0)
  return camera
}

function updateInstances() {
  if (!geometry || !leftGroup || !rightGroup) return

  leftMeshes.forEach((mesh) => {
    mesh.removeFromParent()
    mesh.material.dispose()
  })
  leftMeshes = []

  rightMesh?.removeFromParent()
  rightMaterial?.dispose()
  rightMesh = undefined
  rightMaterial = undefined

  for (let index = 0; index < markerCount.value; index++) {
    const material = new THREE.MeshStandardMaterial({
      color: markerColors[index],
      metalness: 0.15,
      roughness: 0.35,
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.copy(markerPositions[index])
    mesh.rotation.set(0.2 + index * 0.17, index * 0.45, index * 0.12)
    mesh.scale.setScalar(markerScales[index])
    leftGroup.add(mesh)
    leftMeshes.push(mesh)
  }

  rightMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 0.15,
    roughness: 0.35,
  })
  rightMesh = new THREE.InstancedMesh(geometry, rightMaterial, markerCount.value)

  const matrix = new THREE.Matrix4()
  const rotation = new THREE.Quaternion()
  const scale = new THREE.Vector3()
  for (let index = 0; index < markerCount.value; index++) {
    rotation.setFromEuler(new THREE.Euler(0.2 + index * 0.17, index * 0.45, index * 0.12))
    scale.setScalar(markerScales[index])
    matrix.compose(markerPositions[index], rotation, scale)
    rightMesh.setMatrixAt(index, matrix)
    rightMesh.setColorAt(index, new THREE.Color(markerColors[index]))
  }
  rightMesh.instanceMatrix.needsUpdate = true
  rightMesh.instanceColor.needsUpdate = true
  rightGroup.add(rightMesh)
}

function resize() {
  if (!renderer || !sceneHost.value || !leftCamera || !rightCamera) return

  const width = sceneHost.value.clientWidth
  const height = sceneHost.value.clientHeight
  if (!width || !height) return

  renderer.setSize(width, height, false)
  const leftWidth = Math.floor(width / 2)
  leftCamera.aspect = leftWidth / height
  rightCamera.aspect = (width - leftWidth) / height
  leftCamera.updateProjectionMatrix()
  rightCamera.updateProjectionMatrix()
}

function renderViews() {
  if (!renderer || !leftScene || !rightScene || !sceneHost.value) return

  animationFrame = requestAnimationFrame(renderViews)
  if (!reduceMotion) {
    leftGroup.rotation.y += 0.004
    rightGroup.rotation.y += 0.004
  }

  const width = sceneHost.value.clientWidth
  const height = sceneHost.value.clientHeight
  const leftWidth = Math.floor(width / 2)
  renderer.setScissorTest(true)
  renderer.setViewport(0, 0, leftWidth, height)
  renderer.setScissor(0, 0, leftWidth, height)
  renderer.render(leftScene, leftCamera)
  renderer.setViewport(leftWidth, 0, width - leftWidth, height)
  renderer.setScissor(leftWidth, 0, width - leftWidth, height)
  renderer.render(rightScene, rightCamera)
  renderer.setScissorTest(false)
}

function createScene() {
  if (renderer || !sceneHost.value) return

  leftScene = createView(0x081426)
  rightScene = createView(0x0a1d2d)
  leftCamera = createCamera()
  rightCamera = createCamera()
  leftGroup = new THREE.Group()
  rightGroup = new THREE.Group()
  leftScene.add(leftGroup)
  rightScene.add(rightGroup)

  geometry = new THREE.IcosahedronGeometry(0.34, 2)
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.domElement.setAttribute('aria-hidden', 'true')
  sceneHost.value.appendChild(renderer.domElement)

  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  updateInstances()
  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(sceneHost.value)
  resize()
  renderViews()
}

function disposeScene() {
  if (animationFrame) cancelAnimationFrame(animationFrame)
  resizeObserver?.disconnect()
  leftMeshes.forEach((mesh) => mesh.material.dispose())
  rightMaterial?.dispose()
  geometry?.dispose()
  renderer?.dispose()
  renderer?.domElement.remove()

  leftMeshes = []
  renderer = leftScene = rightScene = leftCamera = rightCamera = leftGroup = rightGroup = geometry = rightMaterial = rightMesh = animationFrame = resizeObserver = undefined
}

watch(markerCount, updateInstances)
onSlideEnter(async () => {
  await nextTick()
  createScene()
})
onSlideLeave(disposeScene)
</script>

<style>
.instancing-slide {
  background: #f8fafc;
  color: #0f172a;
  justify-content: flex-start;
  overflow: hidden;
}

.instancing-slide h1 {
  color: #0f172a;
}

.instancing-claim {
  color: #334155;
  font-size: 1.65rem;
  letter-spacing: 0.01em;
  margin-top: 4.35rem;
  text-align: center;
}

.instancing-claim strong:last-child {
  color: #2563eb;
}

.instancing-scene-stage {
  background: #081426;
  border: 1px solid #1e293b;
  border-radius: 1rem;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.18);
  flex: 1;
  margin-top: 1rem;
  min-height: 18rem;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.instancing-scene,
.instancing-scene canvas {
  display: block;
  height: 100%;
  inset: 0;
  position: absolute;
  width: 100%;
}

.instancing-scene-divider {
  background: rgba(148, 163, 184, 0.3);
  bottom: 0;
  left: 50%;
  position: absolute;
  top: 0;
  width: 1px;
  z-index: 1;
}

.instancing-side-label {
  color: #f8fafc;
  pointer-events: none;
  position: absolute;
  top: 1rem;
  width: calc(50% - 2.5rem);
  z-index: 2;
}

.instancing-side-label--left {
  left: 1.25rem;
}

.instancing-side-label--right {
  left: calc(50% + 1.25rem);
}

.instancing-side-stats {
  align-items: flex-end;
  bottom: 1rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: calc(50% - 2.5rem);
  z-index: 2;
}

.instancing-side-stats--left {
  left: 1.25rem;
}

.instancing-side-stats--right {
  left: calc(50% + 1.25rem);
}

.instancing-eyebrow {
  color: #cbd5e1;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.instancing-side-label h2 {
  color: #fff;
  font-size: 1.15rem;
  margin: 0.15rem 0 0;
}

.instancing-side-label h2 code {
  background: rgba(219, 234, 254, 0.16);
  border-radius: 0.3rem;
  color: #bfdbfe;
  font-size: 0.85em;
  padding: 0.1rem 0.3rem;
}

.instancing-counter {
  align-items: center;
  backdrop-filter: blur(8px);
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 0.75rem;
  display: flex;
  gap: 0.55rem;
  margin: 0;
  padding: 0.45rem 0.65rem;
  width: max-content;
}

.instancing-counter-item {
  align-items: center;
  display: flex;
  gap: 0.35rem;
}

.instancing-counter-item strong {
  color: #fff;
  font-size: 1.35rem;
  line-height: 1;
}

.instancing-counter-item span {
  color: #cbd5e1;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.instancing-counter-plus {
  color: #94a3b8;
  font-size: 1.15rem;
  font-weight: 700;
}

.instancing-side-stats--left .instancing-counter-item strong {
  color: #fdba74;
}

.instancing-side-stats--right .instancing-counter-item strong {
  color: #93c5fd;
}

.instancing-draw-count {
  color: #cbd5e1;
  font-size: 0.75rem;
  margin: 0;
}

.instancing-side-stats--left .instancing-draw-count {
  color: #fdba74;
}

.instancing-side-stats--right .instancing-draw-count {
  color: #93c5fd;
  text-align: right;
}

.instancing-controls {
  align-items: center;
  color: #475569;
  display: flex;
  gap: 0.55rem;
  margin: 0.65rem auto 0.1rem;
  width: min(100%, 35rem);
}

.instancing-controls label {
  font-size: 0.85rem;
  font-weight: 700;
}

.instancing-controls input {
  accent-color: #2563eb;
  flex: 1;
  min-width: 0;
}

.instancing-range-bound {
  color: #94a3b8;
  font-size: 0.72rem;
}

.instancing-controls output {
  background: #dbeafe;
  border-radius: 0.4rem;
  color: #1d4ed8;
  font-size: 0.85rem;
  font-weight: 800;
  min-width: 1.5rem;
  padding: 0.25rem 0.4rem;
  text-align: center;
}

</style>

<!--
- Goal: reduce repeated draw submissions. Show: move Markers from 3 to 5 once; both views gain the same marks. Use: repeated geometry/material. Limit: the GPU still processes every instance; this is not an FPS benchmark.
- Counts are per view, per visible pass, with this opaque single-material setup and no shadows or extra passes. Groups, multiple materials, or extra rendering passes can add draws.
- Use `Mesh` for one or a few objects, varied geometry/materials, or independently managed objects.
- Use `InstancedMesh` for many copies that share geometry and material.
- Instancing reduces CPU-side draw submissions; the GPU still renders every instance.
- There is no universal threshold—profile first. This slider illustrates scaling, not performance.
- The left side intentionally shows a naïve setup with one material per marker.
- Regular Mesh objects can share geometry/material, but draw submissions still scale with Mesh count.
- `setColorAt()` stores per-instance colors, so one material can render different colors.
- Other per-instance differences need custom attributes/shaders or separate batches.
-->

---
class: demo-slide buffer-geometry-slide
---

# BufferGeometry: Work with Numbers

<div class="demo-kind">Diagram</div>
<div class="demo-lead">When coordinates change, update numbers instead of rebuilding path text.</div>

<div class="buffer-comparison demo-stage">
  <div class="buffer-lane buffer-lane--svg">
    <div class="buffer-lane-heading">
      <div class="buffer-eyebrow">SVG PATH ANIMATION</div>
      <h2>D3 → DOM → parser</h2>
    </div>
    <div class="buffer-flow">
      <div class="buffer-step buffer-step--string"><code>d="M…"</code><small>serialize text</small></div><span class="buffer-arrow">→</span><div class="buffer-step"><strong>Browser</strong><small>parse + paint</small></div>
    </div>
    <div class="buffer-plot">
      <div class="buffer-plot-label">Coordinates encoded as path text</div>
      <svg viewBox="0 0 264 100" role="img" aria-label="A line encoded as an SVG path string">
        <path class="buffer-grid-line" d="M 12 12 H 252 M 12 34 H 252 M 12 56 H 252 M 12 78 H 252" />
        <path class="buffer-svg-path" d="M12 75 L35 48 L58 64 L81 36 L105 66 L129 26 L153 55 L178 31 L204 58 L230 21 L252 32" />
      </svg>
    </div>
    <div class="buffer-cost">Update <code>d</code> when coordinates change.</div>
  </div>
  <div class="buffer-lane buffer-lane--buffer">
    <div class="buffer-lane-heading">
      <div class="buffer-eyebrow">BUFFERGEOMETRY</div>
      <h2>Numbers → GPU buffer</h2>
    </div>
    <div class="buffer-flow">
      <div class="buffer-step buffer-step--array"><code>Float32Array</code><small>position data</small></div><span class="buffer-arrow">→</span><div class="buffer-step buffer-step--geometry"><strong>GPU</strong><small>draw vertices</small></div>
    </div>
    <div class="buffer-plot">
      <div class="buffer-plot-label">The same coordinates as vertices</div>
      <svg viewBox="0 0 264 100" role="img" aria-label="A line made from numeric vertices">
        <path class="buffer-grid-line" d="M 12 12 H 252 M 12 34 H 252 M 12 56 H 252 M 12 78 H 252" />
        <polyline class="buffer-buffer-path" points="12,75 35,48 58,64 81,36 105,66 129,26 153,55 178,31 204,58 230,21 252,32" />
        <g class="buffer-vertices"><circle cx="12" cy="75" r="3" /><circle cx="35" cy="48" r="3" /><circle cx="58" cy="64" r="3" /><circle cx="81" cy="36" r="3" /><circle cx="105" cy="66" r="3" /><circle cx="129" cy="26" r="3" /><circle cx="153" cy="55" r="3" /><circle cx="178" cy="31" r="3" /><circle cx="204" cy="58" r="3" /><circle cx="230" cy="21" r="3" /><circle cx="252" cy="32" r="3" /></g>
      </svg>
    </div>
    <div class="buffer-cost">Upload changed numeric attributes.</div>
  </div>
</div>

<div class="demo-takeaway">Use buffers for vertex data. Batching separate objects is a separate decision.</div>

<style>
.buffer-geometry-slide {
  background: #f8fafc;
  color: #0f172a;
  justify-content: flex-start;
  overflow: hidden;
}

.buffer-geometry-slide h1 {
  color: #0f172a;
}

.buffer-claim {
  color: #334155;
  font-size: 1.55rem;
  letter-spacing: 0.01em;
  margin-top: 4.35rem;
  text-align: center;
}

.buffer-claim strong:first-child {
  color: #ea580c;
}

.buffer-claim strong:last-child {
  color: #2563eb;
}

.buffer-comparison {
  display: grid;
  flex: 1;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  margin-top: 1rem;
  min-height: 0;
  width: 100%;
}

.buffer-lane {
  background: #fff;
  border: 1px solid #cbd5e1;
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);
  display: flex;
  flex-direction: column;
  min-height: 18rem;
  padding: 1rem 1.1rem 0.85rem;
}

.buffer-lane--svg {
  border-top: 4px solid #f97316;
}

.buffer-lane--buffer {
  border-top: 4px solid #2563eb;
}

.buffer-lane-heading {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}

.buffer-eyebrow {
  color: #64748b;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.buffer-lane h2 {
  color: #1e293b;
  font-size: 1.15rem;
  margin: 0.15rem 0 0;
}

.buffer-flow {
  align-items: stretch;
  display: flex;
  gap: 0.35rem;
  margin-top: 1rem;
  min-height: 3.8rem;
}

.buffer-step {
  align-items: center;
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 0.55rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  padding: 0.4rem 0.3rem;
  text-align: center;
}

.buffer-step strong,
.buffer-step code {
  color: #1e293b;
  font-size: 0.75rem;
  font-weight: 800;
}

.buffer-step code {
  background: transparent;
  font-size: 0.68rem;
  overflow: hidden;
  padding: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

.buffer-step small {
  color: #64748b;
  font-size: 0.58rem;
  margin-top: 0.2rem;
  white-space: nowrap;
}

.buffer-step--string {
  background: #fff7ed;
  border-color: #fdba74;
}

.buffer-step--string code {
  color: #c2410c;
}

.buffer-step--array,
.buffer-step--geometry {
  background: #eff6ff;
  border-color: #93c5fd;
}

.buffer-step--array code,
.buffer-step--geometry strong {
  color: #1d4ed8;
}

.buffer-arrow {
  align-self: center;
  color: #94a3b8;
  font-size: 1.1rem;
  line-height: 1;
}

.buffer-plot {
  background: #0f172a;
  border-radius: 0.75rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 0.85rem;
  min-height: 0;
  padding: 0.55rem 0.7rem 0.65rem;
}

.buffer-plot-label {
  color: #94a3b8;
  font-size: 0.62rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.buffer-plot svg {
  display: block;
  flex: 1;
  height: 100%;
  min-height: 0;
  width: 100%;
}

.buffer-grid-line {
  fill: none;
  stroke: #334155;
  stroke-width: 0.7;
}

.buffer-svg-path {
  fill: none;
  stroke: #fb923c;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3;
}

.buffer-buffer-path {
  fill: none;
  stroke: #60a5fa;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
}

.buffer-vertices circle {
  fill: #bfdbfe;
  stroke: #2563eb;
  stroke-width: 1;
}

.buffer-cost {
  align-items: baseline;
  border-top: 1px solid #e2e8f0;
  color: #64748b;
  display: flex;
  gap: 0.35rem;
  margin-top: 0.7rem;
  padding-top: 0.55rem;
}

.buffer-cost strong {
  font-size: 1.3rem;
}

.buffer-cost--svg strong {
  color: #ea580c;
}

.buffer-cost--buffer strong {
  color: #16a34a;
}

.buffer-summary {
  color: #64748b;
  font-size: 0.9rem;
  margin: 0.7rem auto 0.15rem;
  text-align: center;
}

.buffer-summary strong {
  color: #334155;
}
</style>

<!--
- Goal: avoid repeated coordinate-to-text updates. Show: trace the same eleven coordinates through each lane; no control interaction is needed. Use: numeric vertex data. Limit: BufferGeometry alone does not batch objects.
- Both pictures are SVG diagrams, not renderer output captures. They use the same coordinates; line styling and vertex dots differ. We are not claiming identical pixels or a measured speedup.
- When D3 code updates a path's `d`, it serializes numeric coordinates into a string. SVG can also animate transforms or styles without rebuilding path text.
- The browser receives the DOM attribute, parses the path, and rebuilds its rendering data.
- BufferGeometry stores vertex positions in typed arrays/BufferAttributes instead of path text.
- BufferGeometry alone does not batch separate meshes. A compatible single-material batch can make one draw per pass; groups, materials, and extra passes can add more.
- Groups or multiple materials add draw calls.
- The GPU still processes the vertices. Numeric buffers can avoid path-string work; fewer draw submissions require compatible batching as well.
- This is an optimization for many related vertices, not a reason to replace every small or independent SVG path.
-->

---
class: handoff-slide practical-guidance-slide
---

# Profiling in Chrome DevTools

<figure class="m-0">
  <img
    class="profile-toolbar"
    src="/images/devtools-performance-toolbar.png"
    alt="Chromium DevTools toolbar: 1 marks the Performance tab, 2 the Record button, and 3 the Save profile down-arrow."
  />
</figure>

<div class="grid grid-cols-3 gap-3 mt-3">
  <section class="svg-demo-panel">
    <h2>1 · Open Performance</h2>
    <p>Open DevTools → Performance.<br>Fix the data, view, and settings before recording.</p>
  </section>
  <section class="svg-demo-panel">
    <h2>2 · Record → inspect</h2>
    <p>Record → drag + select → stop.<br>Select the drag; inspect Frames, Main, then Bottom-up.</p>
  </section>
  <section class="svg-demo-panel">
    <h2>3 · Save profile ↓</h2>
    <p>Export the JSON trace.<br>Note the build, viewport/DPR, throttling, and exact steps.</p>
  </section>
</div>

<figure class="profile-hotspot">
  <figcaption>SVG refactor · measured hotspot · call-path sketch, not a flame chart</figcaption>
  <div class="profile-call-path">
    <code>renderFrame</code> → <code>render</code> → <mark><code>updateBackgroundElements</code></mark>
  </div>
  <p><strong>≈99.3% of sampled render time:</strong> background projection, clipping, and path generation.</p>
  <p><strong>22.6 ms</strong> average drag callback &gt; <strong>16.7 ms</strong> total frame budget at 60 Hz.</p>
</figure>

<!--
- Use the supplied numbered toolbar screenshot to point out Performance (1), Record (2), and Save profile (3). The image is cropped to the toolbar; its original LCP/CLS/INP cards are not evidence for drag performance. The supplied screenshot is from Brave's Chromium DevTools; Chrome uses the same panel, but toolbar placement/labels can vary by version.
- Open DevTools through the browser menu or Ctrl+Shift+I on Windows/Linux, Command+Option+I on macOS. Select Performance, start recording, repeat a short map drag and a selection, and stop. Do not substitute a page-reload recording for the interaction we are investigating.
- After stopping, select a drag range in the overview. For a saved example, load svg-updated.json.gz and select approximately 1.567–2.795 s from the recording start. Examine Frames for gaps/long frames and Main for the work around the drag. Select the corresponding main-thread range for Bottom-up; sort by Total time to find expensive functions including their descendants. Self time excludes those descendants. Call tree shows the caller chain. Do not add nested durations.
- Follow renderFrame → render → updateBackgroundElements. This is a labeled call-path illustration backed by the captured source and sample analysis, not a fabricated DevTools screenshot or a time-scaled flame chart. Source: performance-profiling/three-way-comparison.md, interactive SVG-refactor capture. Background generation accounts for approximately 5,089 / 5,124 ms of sampled inclusive render time across that capture, not just the first drag. The 22.6 ms mean callback is across all five drag windows (239 callbacks), not a single selected call or complete GPU/display frame time.
- Distinguish JavaScript projection/path generation from style, layout, and paint. Here the remaining hotspot is background generation, not the number of event markers. The earlier SVG refactor already corrected tick-node churn, dropped drag deltas, and broad redraw triggers while retaining geographic detail.
- A callback below the >50 ms long-task threshold can still exceed the entire 16.7 ms budget at 60 Hz. Timer waits and scheduling gaps can also produce jank while the main thread is idle. Check forced layout and allocation/GC churn as hypotheses, not proof that every Paint or GC event is a bug.
- Save profile (down-arrow) exports the trace; Load profile (up-arrow), or dragging the exported file into Performance, reopens it. Save a short companion note with the exact gesture/selection sequence, data and starting view, build/revision, viewport/DPR, motion, extensions, and CPU/network throttling. Record without breakpoints and keep these conditions fixed for a repeatable comparison. Separate profiler startup from application stalls.
- Inspect exported profiles before sharing: they can embed screenshots, URLs, and application source. Raw captures remain local; the deck packages only this cropped toolbar image and the existing reports. These historical recordings are a case study, not a controlled benchmark.
- Reference: https://developer.chrome.com/docs/devtools/performance/reference
-->

---
class: handoff-slide practical-guidance-slide
---

# Performance Checklist

<div class="grid grid-cols-2 gap-3">
  <section class="svg-demo-panel">
    <h2>1 · Identify the bottleneck</h2>
    <p>Measure the actual interaction. Separate JavaScript, layout/paint, and GPU work.</p>
  </section>
  <section class="svg-demo-panel">
    <h2>2 · Batch repeated marks</h2>
    <p>Use instances or shared geometry where materials and drawing passes permit.</p>
  </section>
  <section class="svg-demo-panel">
    <h2>3 · Reuse buffers</h2>
    <p>Update existing attributes; upload only what changed. Avoid rebuilding every frame.</p>
  </section>
  <section class="svg-demo-panel">
    <h2>4 · Draw only useful detail</h2>
    <p>Check geometry detail, pixel ratio, and transparent overdraw. Preserve the visual task.</p>
  </section>
  <section class="svg-demo-panel">
    <h2>5 · Stop unnecessary work</h2>
    <p>Render on change when possible. Stop settled simulations and hidden/unmounted work.</p>
  </section>
  <section class="svg-demo-panel">
    <h2>6 · Recheck responsiveness</h2>
    <p>Repeat the same task. Check frame pacing, input-to-display delay, and memory over time.</p>
  </section>
</div>

<div class="guidance-takeaway">Change one thing → repeat the workload → compare the result.</div>

<!--
- Start with the user's task, not a preferred renderer or a universal node-count threshold. The case study shows both an SVG optimization win and a further implementation-level gain from the rewrite; it is not an isolated SVG-versus-WebGL benchmark.
- Use the main-thread trace to distinguish expensive JS from browser style/layout/paint. A short JS callback does not establish low GPU cost. For pixel-bound scenes, vary resolution, transparency, and pass count while observing frame pacing; change one variable at a time. Main-thread Paint duration is not a complete GPU measurement.
- InstancedMesh helps repeated geometry/material combinations; merged geometry can help compatible marks. BufferGeometry alone does not batch separate objects. Material groups, shadows, and extra rendering/picking passes can add draw calls. Draw-call count alone is not a performance result.
- Reuse attribute and instance-matrix buffers when capacity permits. Mark changed attributes for upload; use update ranges where appropriate instead of uploading large unchanged arrays. Stable D3 joins and targeted application watches are the analogous reduction of unnecessary work in the SVG version.
- Reduce detail only where it preserves what the audience needs to see: LOD, appropriate device pixel ratio, and less overlapping transparency can help different bottlenecks. Do not silently discard meaningful data. Our in-place SVG refactor retained full geographic detail; representation changes were a separate step.
- requestAnimationFrame schedules work; it does not make an expensive callback cheap. Coalesce dirty updates, stop a force simulation when it cools, and suspend work when the view is inactive. Continuous animation still needs frames while active. Teardown must release owned GPU resources as shown earlier.
- Repeat drag, selection, and keyboard tasks with fixed data/settings. Compare frame pacing and input-to-presentation behavior separately; callback duration is neither. Use repeated runs and inspect tails rather than only averages. Look for retained-memory growth over repeated create/destroy cycles; one heap peak or compressed trace size does not prove a leak or a saving, and JS heap excludes GPU memory.
- Keep the before/after images and interaction behavior as checks: faster but incorrect, less informative, or inaccessible is not the same improvement.
-->

---
class: handoff-slide practical-guidance-slide
---

# Accessibility Beyond the Canvas

<div class="grid grid-cols-2 gap-4">
  <section class="svg-demo-panel">
    <h2>Expose the data</h2>
    <p>Offer an equivalent table or list with labels, units, and a summary. Do not rely on color alone.</p>
  </section>
  <section class="svg-demo-panel">
    <h2>Support the keyboard</h2>
    <p>Use labeled native controls. Make pan, zoom, selection, and dismissal reachable without a pointer.</p>
  </section>
  <section class="svg-demo-panel">
    <h2>Describe the selection</h2>
    <p>Share the selected record ID. Show a visual highlight and meaningful text; announce deliberate selection changes.</p>
  </section>
  <section class="svg-demo-panel">
    <h2>Keep focus and motion usable</h2>
    <p>Show visible focus; never trap it. Honor reduced motion and offer pause for nonessential animation.</p>
  </section>
</div>

<div class="guidance-takeaway">Pointer / keyboard / data list → selected ID → highlight + text details</div>

<!--
- WebGL pixels do not expose individual records as semantic DOM elements. A label on the canvas can describe its purpose, but does not make all plotted data or interactions accessible. Keep semantic controls, summaries, and record details in HTML, owned by the application.
- Offer an equivalent route to the same filtered data and actions: a table or list with meaningful names, units, sorting/filtering, and selection. Paginate or otherwise manage large lists; do not add tens of thousands of tab stops or invisible DOM nodes just to mirror every GPU mark. A CSV download can supplement this, not replace an operable in-app alternative.
- Use native buttons, inputs, and selects where possible. Make keyboard operation discoverable, preserve a logical focus order and visible focus indicator, and provide an escape from any custom interaction. Offer alternatives to pointer-only pan/zoom/dragging and hover-only information. Support zoom and sufficient contrast; pair color encodings with text, shape, or another distinguishable cue.
- Pointer picking, keyboard selection, and the equivalent data view should all update the same selected record ID. Resolve it to a record and update both its visual highlight and an HTML description. An appropriately scoped role="status" or polite live region can announce committed selection changes; do not announce animation frames or every hover pixel. Keep focus predictable when data changes or a detail panel closes.
- The later GPU-picking demo illustrates the ID → record boundary and keyboard scan/lock controls. It is not a claim of complete accessibility: an equivalent data view and assistive-technology testing are still application responsibilities. Avoid announcing bare RGB values when a record name/value communicates the user's selection.
- Honor prefers-reduced-motion on entry and when the preference changes. Prefer instant updates or reduced transitions while preserving the selected state and useful controls. Offer pause for nonessential continuous motion; do not rely solely on an OS preference. The earlier synthetic force demo settles immediately under reduced motion rather than removing the data.
- These are implementation guidelines, not an accessibility certification of this deck or the case-study application. Test with a keyboard and screen reader, at zoom, and with reduced motion; actual presentation-device rehearsal and the full demo audit remain separate checklist work.
- References: https://www.w3.org/WAI/tutorials/images/complex/ and https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html
-->


---
class: demo-slide entry-exit-slide
---

# Help People Follow Entry and Exit

<div class="demo-kind">Synthetic example</div>
<div class="demo-lead">Make it clear which records arrived and which ones left.</div>

<div class="entry-exit-layout demo-stage">
  <div class="entry-exit-code-card">
    <div class="entry-exit-card-eyebrow">Lifecycle sketch · pseudocode</div>
    <h2>Keep track of each record</h2>
    <pre class="entry-exit-code demo-code"><code><span class="entry-exit-code-enter">for each new record:</span>
  add its mark
  animate its entry
<span class="entry-exit-code-exit">for each removed record:</span>
  animate its exit
  remove its mark</code></pre>
  </div>
  <div class="entry-exit-scene-card">
    <div class="entry-exit-scene-frame demo-dark">
      <div ref="sceneHost" class="entry-exit-scene-canvas" role="img" aria-label="Three.js scene showing data records entering and exiting"></div>
      <div class="entry-exit-scene-count"><strong>{{ recordCount }}</strong> {{ recordCount === 1 ? 'record' : 'records' }}</div>
      <div class="entry-exit-scene-caption">new records grow in · removed records shrink out</div>
    </div>
  </div>
</div>

<div class="entry-exit-controls demo-control">
  <label for="entry-exit-count">Try 3 → 5 → 3 records</label>
  <span class="entry-exit-range-bound">0</span>
  <input id="entry-exit-count" v-model.number="recordCount" type="range" min="0" max="5" step="1" :aria-label="'Number of records: ' + recordCount" />
  <span class="entry-exit-range-bound">5</span>
  <output for="entry-exit-count" aria-live="polite">{{ recordCount }}</output>
</div>

<div class="demo-takeaway">Use transitions to explain membership. Don’t imply that a changing size is a changing value.</div>

<script setup>
import * as THREE from 'three'
import { nextTick, ref, watch } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'

const sceneHost = ref(null)
const recordCount = ref(3)
const recordPositions = [
  new THREE.Vector3(-1.45, -0.05, 0.2),
  new THREE.Vector3(-0.85, -0.45, -0.3),
  new THREE.Vector3(-0.28, 0.1, -0.75),
  new THREE.Vector3(0.35, -0.4, -0.15),
  new THREE.Vector3(0.92, 0.05, -0.55),
]
const recordScales = [1, 0.85, 1.08, 0.92, 0.78]
const recordColors = [0x38bdf8, 0x818cf8, 0xf472b6, 0xfbbf24, 0x34d399]
const recordStates = recordPositions.map((position, index) => ({
  index,
  mesh: undefined,
  position,
  status: 'empty',
  targetScale: 0,
  targetY: position.y,
}))

let renderer
let scene
let camera
let recordGroup
let geometry
let materials
let animationFrame
let resizeObserver
let reduceMotion = false

function createSceneView() {
  const view = new THREE.Scene()
  view.background = new THREE.Color(0x081426)
  view.fog = new THREE.Fog(0x081426, 4.5, 9)
  view.add(new THREE.AmbientLight(0xffffff, 1.25))

  const keyLight = new THREE.DirectionalLight(0xffffff, 3)
  keyLight.position.set(-3, 4, 6)
  view.add(keyLight)

  const rimLight = new THREE.DirectionalLight(0x60a5fa, 1.5)
  rimLight.position.set(4, -1, -3)
  view.add(rimLight)
  return view
}

function syncRecords() {
  if (!recordGroup || !materials) return

  recordStates.forEach((state) => {
    if (state.index < recordCount.value) {
      if (!state.mesh) {
        state.mesh = new THREE.Mesh(geometry, materials[state.index % materials.length])
        state.mesh.position.copy(state.position).add(new THREE.Vector3(0, -0.65, 0))
        state.mesh.scale.setScalar(0)
        recordGroup.add(state.mesh)
      }
      state.status = 'active'
      state.targetScale = recordScales[state.index]
      state.targetY = state.position.y
      return
    }

    if (state.mesh) {
      state.status = 'exiting'
      state.targetScale = 0
      state.targetY = state.position.y - 0.65
    }
  })
}

function resize() {
  if (!renderer || !camera || !sceneHost.value) return

  const width = sceneHost.value.clientWidth
  const height = sceneHost.value.clientHeight
  if (!width || !height) return

  renderer.setSize(width, height, false)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
}

function animate() {
  if (!renderer || !scene || !camera || !recordGroup) return

  animationFrame = requestAnimationFrame(animate)
  const easing = reduceMotion ? 1 : 0.12
  recordStates.forEach((state) => {
    if (!state.mesh) return

    const mesh = state.mesh
    mesh.scale.setScalar(mesh.scale.x + (state.targetScale - mesh.scale.x) * easing)
    mesh.position.y += (state.targetY - mesh.position.y) * easing

    if (state.status === 'exiting' && mesh.scale.x < 0.015) {
      mesh.removeFromParent()
      state.mesh = undefined
      state.status = 'empty'
    }
  })
  renderer.render(scene, camera)
}

function createScene() {
  if (renderer || !sceneHost.value) return

  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  scene = createSceneView()
  camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100)
  camera.position.set(0, 0.15, 5.4)
  camera.lookAt(0, -0.28, 0)
  recordGroup = new THREE.Group()
  scene.add(recordGroup)

  geometry = new THREE.IcosahedronGeometry(0.34, 2)
  materials = recordColors.map((color) => new THREE.MeshStandardMaterial({
    color,
    metalness: 0.15,
    roughness: 0.35,
  }))
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.domElement.setAttribute('aria-hidden', 'true')
  sceneHost.value.appendChild(renderer.domElement)

  syncRecords()
  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(sceneHost.value)
  resize()
  animate()
}

function disposeScene() {
  if (animationFrame) cancelAnimationFrame(animationFrame)
  resizeObserver?.disconnect()
  recordStates.forEach((state) => {
    state.mesh?.removeFromParent()
    state.mesh = undefined
    state.status = 'empty'
  })
  materials?.forEach((material) => material.dispose())
  geometry?.dispose()
  renderer?.dispose()
  renderer?.domElement.remove()

  renderer = scene = camera = recordGroup = geometry = materials = animationFrame = resizeObserver = undefined
}

watch(recordCount, syncRecords)
onSlideEnter(async () => {
  await nextTick()
  createScene()
})
onSlideLeave(disposeScene)
</script>

<style>
.entry-exit-slide {
  background: #f8fafc;
  color: #0f172a;
  justify-content: flex-start;
  overflow: hidden;
}

.entry-exit-slide h1 {
  color: #0f172a;
}

.entry-exit-claim {
  color: #334155;
  font-size: 1.45rem;
  letter-spacing: 0.01em;
  margin-top: 4.35rem;
  text-align: center;
}

.entry-exit-claim strong:first-child {
  color: #16a34a;
}

.entry-exit-claim strong:last-child {
  color: #ea580c;
}

.entry-exit-layout {
  display: grid;
  flex: 1;
  gap: 1rem;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  margin-top: 1rem;
  min-height: 0;
  width: 100%;
}

.entry-exit-code-card,
.entry-exit-scene-card {
  background: #fff;
  border: 1px solid #cbd5e1;
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);
  min-height: 18rem;
  padding: 1rem 1.1rem 0.85rem;
}

.entry-exit-code-card {
  border-top: 4px solid #64748b;
  display: flex;
  flex-direction: column;
}

.entry-exit-scene-card {
  border-top: 4px solid #2563eb;
  display: flex;
  min-width: 0;
}

.entry-exit-card-eyebrow,
.entry-exit-scene-title {
  color: #64748b;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.entry-exit-code-card h2 {
  color: #1e293b;
  font-size: 1.15rem;
  margin: 0.15rem 0 0;
}

.entry-exit-code {
  background: #0f172a;
  border-radius: 0.7rem;
  color: #e2e8f0;
  flex: 1;
  font-family: 'Fira Code', monospace;
  font-size: 0.67rem;
  line-height: 1.45;
  margin: 0.8rem 0 0;
  min-height: 0;
  overflow: hidden;
  padding: 0.75rem 0.8rem;
  white-space: pre;
}

.entry-exit-code-muted {
  color: #93c5fd;
}

.entry-exit-code-string {
  color: #a7f3d0;
}

.entry-exit-code-enter {
  color: #86efac;
}

.entry-exit-code-exit {
  color: #fdba74;
}

.entry-exit-scene-frame {
  background: #081426;
  border-radius: 0.75rem;
  flex: 1;
  min-height: 0;
  overflow: hidden;
  position: relative;
}

.entry-exit-scene-canvas,
.entry-exit-scene-canvas canvas {
  display: block;
  height: 100%;
  inset: 0;
  position: absolute;
  width: 100%;
}

.entry-exit-scene-title {
  color: #cbd5e1;
  left: 1rem;
  position: absolute;
  top: 0.9rem;
}

.entry-exit-scene-count {
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 0.65rem;
  color: #cbd5e1;
  font-size: 0.72rem;
  padding: 0.45rem 0.6rem;
  position: absolute;
  right: 1rem;
  top: 0.75rem;
}

.entry-exit-scene-count strong {
  color: #93c5fd;
  font-size: 1.2rem;
  margin-right: 0.2rem;
}

.entry-exit-scene-caption {
  bottom: 0.75rem;
  color: #94a3b8;
  font-size: 0.68rem;
  left: 1rem;
  position: absolute;
}

.entry-exit-controls {
  align-items: center;
  color: #475569;
  display: flex;
  gap: 0.55rem;
  margin: 0.65rem auto 0.1rem;
  width: min(100%, 35rem);
}

.entry-exit-controls label {
  font-size: 0.85rem;
  font-weight: 700;
}

.entry-exit-controls input {
  accent-color: #2563eb;
  flex: 1;
  min-width: 0;
}

.entry-exit-range-bound {
  color: #94a3b8;
  font-size: 0.72rem;
}

.entry-exit-controls output {
  background: #dbeafe;
  border-radius: 0.4rem;
  color: #1d4ed8;
  font-size: 0.85rem;
  font-weight: 800;
  min-width: 1.5rem;
  padding: 0.25rem 0.4rem;
  text-align: center;
}
</style>

<!--
- Goal: help people follow membership changes. Show: move Records from 3 to 5, then back to 3. Use: arrivals/removals. Limit: when size or position encodes a measured value, prefer opacity or another cue that does not suggest intermediate measurements.
- This synthetic scene uses five fixed records, not live case-study data. The visible text is pseudocode, not the implementation; this demo does not call d3.index. Keyed data matching can come from D3, while Three.js owns the marks.
- Enter and exit are lifecycle ideas here—not DOM/SVG selections.
- New records start at zero size and transition into their target size.
- Removed records shrink away first, then are removed from the scene.
- Start with three visible records. The data count changes only when the presenter changes the slider; there is no automatic cycle.
- Decorative rotation is removed. Reduced motion on entry makes membership changes immediate.
- At zero, every mesh exits and is cleaned up.
- The slider is illustrative: the important idea is the animated lifecycle, not a performance benchmark.
-->
---
class: demo-slide physical-properties-slide
---

# Choose How to Show a Value

<div class="demo-kind">Synthetic example</div>
<div class="demo-lead">Keep each record’s position. Change how its value looks.</div>

<div class="physical-layout demo-stage">
  <section class="physical-data-card">
    <h2>Five records</h2>
    <pre class="physical-data-code demo-code"><code><span class="physical-code-keyword">const</span> records = [
  { <span class="physical-code-key">x</span>: -1.8, <span class="physical-code-key">y</span>:  0.7, <span class="physical-code-data">data</span>: 15 },
  { <span class="physical-code-key">x</span>: -0.9, <span class="physical-code-key">y</span>: -0.6, <span class="physical-code-data">data</span>: 35 },
  { <span class="physical-code-key">x</span>:  0.0, <span class="physical-code-key">y</span>:  0.3, <span class="physical-code-data">data</span>: 55 },
  { <span class="physical-code-key">x</span>:  0.9, <span class="physical-code-key">y</span>: -0.4, <span class="physical-code-data">data</span>: 75 },
  { <span class="physical-code-key">x</span>:  1.8, <span class="physical-code-key">y</span>:  0.6, <span class="physical-code-data">data</span>: 95 },
]</code></pre>
    <div class="physical-position-map"><code>x</code> → position.x <span>·</span> <code>y</code> → position.y</div>
    <label class="physical-mapping-control" for="physical-mapping">
      <span>Map <code>data</code> to</span>
      <select id="physical-mapping" v-model="mapping">
        <option value="mesh">Mesh shape</option>
        <option value="color">Color</option>
        <option value="scale">Scale</option>
        <option value="rotation">Rotation</option>
      </select>
    </label>
  </section>
  <section class="physical-scene-card">
    <div class="physical-scene-frame demo-dark" @pointermove="tiltScene" @pointerleave="resetSceneTilt">
      <div ref="sceneHost" class="physical-scene-canvas" role="img" :aria-label="'Three.js scene mapping record data to ' + mappingLabels[mapping] + '. Move the pointer over the scene to rotate it.'"></div>
      <div class="physical-scene-caption">Positions stay fixed in data space</div>
    </div>
  </section>
</div>

<div class="demo-takeaway">Try Scale → Color. Use a clear legend; size, shape, and rotation aren’t interchangeable.</div>

<script setup>
import * as THREE from 'three'
import { nextTick, ref, watch } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'

const sceneHost = ref(null)
const mapping = ref('scale')
const mappingLabels = {
  mesh: 'Mesh shape',
  color: 'Color',
  scale: 'Scale',
  rotation: 'Rotation',
}
const records = [
  { x: -1.8, y: 0.7, data: 15 },
  { x: -0.9, y: -0.6, data: 35 },
  { x: 0, y: 0.3, data: 55 },
  { x: 0.9, y: -0.4, data: 75 },
  { x: 1.8, y: 0.6, data: 95 },
]

let renderer
let scene
let camera
let plotGroup
let geometries
let grid
let animationFrame
let resizeObserver
let targetTiltX = 0
let targetTiltY = 0
let reduceMotion = false
const meshStates = []

function applyMapping() {
  if (!meshStates.length) return

  meshStates.forEach(({ mesh, record, targetColor, targetRotation }) => {
    const amount = record.data / 100
    mesh.geometry = geometries[0]
    mesh.userData.targetScale = 1
    targetColor.set(0x38bdf8)
    targetRotation.set(0.25, 0.35, 0)

    if (mapping.value === 'mesh') mesh.geometry = geometries[Math.min(5, 1 + Math.floor(record.data / 20))]
    if (mapping.value === 'color') targetColor.setHSL(0.62 - amount * 0.55, 0.82, 0.58)
    if (mapping.value === 'scale') mesh.userData.targetScale = 0.5 + amount
    if (mapping.value === 'rotation') targetRotation.set(0.2, amount * Math.PI, amount * Math.PI * 1.5)
  })
}

function tiltScene(event) {
  const bounds = event.currentTarget.getBoundingClientRect()
  targetTiltX = -((event.clientY - bounds.top) / bounds.height - 0.5) * 0.45
  targetTiltY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.9
}

function resetSceneTilt() {
  targetTiltX = 0
  targetTiltY = 0
}

function resize() {
  if (!renderer || !camera || !sceneHost.value) return

  const width = sceneHost.value.clientWidth
  const height = sceneHost.value.clientHeight
  if (!width || !height) return

  renderer.setSize(width, height, false)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
}

function animate() {
  if (!renderer || !scene || !camera) return

  animationFrame = requestAnimationFrame(animate)
  const easing = reduceMotion ? 1 : 0.08
  if (plotGroup) {
    plotGroup.rotation.x = THREE.MathUtils.lerp(plotGroup.rotation.x, targetTiltX, easing)
    plotGroup.rotation.y = THREE.MathUtils.lerp(plotGroup.rotation.y, targetTiltY, easing)
  }
  meshStates.forEach(({ mesh, targetColor, targetRotation }) => {
    const scale = THREE.MathUtils.lerp(mesh.scale.x, mesh.userData.targetScale, easing)
    mesh.scale.setScalar(scale)
    mesh.rotation.x = THREE.MathUtils.lerp(mesh.rotation.x, targetRotation.x, easing)
    mesh.rotation.y = THREE.MathUtils.lerp(mesh.rotation.y, targetRotation.y, easing)
    mesh.rotation.z = THREE.MathUtils.lerp(mesh.rotation.z, targetRotation.z, easing)
    mesh.material.color.lerp(targetColor, easing)
  })
  renderer.render(scene, camera)
}

function createScene() {
  if (renderer || !sceneHost.value) return

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x081426)
  scene.fog = new THREE.Fog(0x081426, 6, 10)
  camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100)
  camera.position.set(0, 0.15, 6.4)
  camera.lookAt(0, 0, 0)
  plotGroup = new THREE.Group()
  scene.add(plotGroup)

  scene.add(new THREE.AmbientLight(0xffffff, 1.25))
  const keyLight = new THREE.DirectionalLight(0xffffff, 3)
  keyLight.position.set(-3, 4, 6)
  scene.add(keyLight)
  const rimLight = new THREE.DirectionalLight(0x60a5fa, 1.5)
  rimLight.position.set(4, -1, -3)
  scene.add(rimLight)

  geometries = [
    new THREE.BoxGeometry(0.65, 0.42, 0.3),
    new THREE.BoxGeometry(0.55, 0.55, 0.55),
    new THREE.TetrahedronGeometry(0.42),
    new THREE.OctahedronGeometry(0.42),
    new THREE.TorusGeometry(0.32, 0.12, 12, 28),
    new THREE.IcosahedronGeometry(0.4, 1),
  ]
  records.forEach((record) => {
    const material = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.15,
      roughness: 0.35,
    })
    const mesh = new THREE.Mesh(geometries[0], material)
    mesh.position.set(record.x, record.y, 0)
    mesh.rotation.set(0.25, 0.35, 0)
    mesh.scale.setScalar(0)
    mesh.userData.targetScale = 1
    plotGroup.add(mesh)
    meshStates.push({
      mesh,
      record,
      targetColor: new THREE.Color(0x38bdf8),
      targetRotation: new THREE.Euler(0.25, 0.35, 0),
    })
  })

  grid = new THREE.GridHelper(5.5, 11, 0x334155, 0x1e293b)
  grid.rotation.x = Math.PI / 2
  grid.position.z = -1.5
  grid.material.transparent = true
  grid.material.opacity = 0.45
  plotGroup.add(grid)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.domElement.setAttribute('aria-hidden', 'true')
  sceneHost.value.appendChild(renderer.domElement)

  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  applyMapping()
  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(sceneHost.value)
  resize()
  animate()
}

function disposeScene() {
  if (animationFrame) cancelAnimationFrame(animationFrame)
  resizeObserver?.disconnect()
  meshStates.forEach(({ mesh }) => mesh.material.dispose())
  meshStates.length = 0
  geometries?.forEach((geometry) => geometry.dispose())
  grid?.geometry.dispose()
  grid?.material.dispose()
  renderer?.dispose()
  renderer?.domElement.remove()
  resetSceneTilt()

  renderer = scene = camera = plotGroup = geometries = grid = animationFrame = resizeObserver = undefined
}

watch(mapping, applyMapping)
onSlideEnter(async () => {
  await nextTick()
  createScene()
})
onSlideLeave(disposeScene)
</script>

<style>
.physical-properties-slide {
  background: #f8fafc;
  color: #0f172a;
  justify-content: flex-start;
  overflow: hidden;
}

.physical-properties-slide h1 {
  color: #0f172a;
}

.physical-claim {
  color: #334155;
  font-size: 1.4rem;
  letter-spacing: 0.01em;
  margin-top: 4.35rem;
  text-align: center;
}

.physical-claim code,
.physical-scene-map code,
.physical-scene-caption code {
  background: #dbeafe;
  border-radius: 0.3rem;
  color: #1d4ed8;
  font-size: 0.88em;
  padding: 0.08rem 0.28rem;
}

.physical-layout {
  display: grid;
  flex: 1;
  gap: 1rem;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  margin-top: 1rem;
  min-height: 0;
  width: 100%;
}

.physical-data-card,
.physical-scene-card {
  background: #fff;
  border: 1px solid #cbd5e1;
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);
  min-height: 19rem;
  padding: 1rem 1.1rem 0.85rem;
}

.physical-data-card {
  border-top: 4px solid #64748b;
  display: flex;
  flex-direction: column;
}

.physical-scene-card {
  border-top: 4px solid #2563eb;
  display: flex;
  min-width: 0;
}

.physical-eyebrow,
.physical-scene-title {
  color: #64748b;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.physical-data-card h2 {
  color: #1e293b;
  font-size: 1.15rem;
  margin: 0.15rem 0 0;
}

.physical-data-code {
  background: #0f172a;
  border-radius: 0.7rem;
  color: #e2e8f0;
  font-family: 'Fira Code', monospace;
  font-size: 0.68rem;
  line-height: 1.65;
  margin: 0.75rem 0 0;
  overflow: hidden;
  padding: 0.75rem 0.8rem;
  white-space: pre;
}

.physical-code-keyword {
  color: #93c5fd;
}

.physical-code-key {
  color: #a7f3d0;
}

.physical-code-data {
  color: #f9a8d4;
}

.physical-position-map {
  color: #64748b;
  font-size: 0.7rem;
  margin-top: 0.65rem;
}

.physical-position-map code,
.physical-mapping-control code {
  background: #e2e8f0;
  border-radius: 0.25rem;
  color: #334155;
  font-size: 0.9em;
  padding: 0.08rem 0.22rem;
}

.physical-position-map span {
  color: #cbd5e1;
  margin: 0 0.3rem;
}

.physical-mapping-control {
  align-items: center;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 0.65rem;
  color: #334155;
  display: flex;
  font-size: 0.78rem;
  font-weight: 700;
  gap: 0.65rem;
  justify-content: space-between;
  margin-top: auto;
  padding: 0.55rem 0.65rem;
}

.physical-mapping-control select {
  background: #fff;
  border: 1px solid #93c5fd;
  border-radius: 0.45rem;
  color: #0f172a;
  font: inherit;
  padding: 0.35rem 0.45rem;
}

.physical-scene-frame {
  background: #081426;
  border-radius: 0.75rem;
  cursor: crosshair;
  flex: 1;
  min-height: 0;
  overflow: hidden;
  position: relative;
}

.physical-scene-canvas,
.physical-scene-canvas canvas {
  display: block;
  height: 100%;
  inset: 0;
  position: absolute;
  width: 100%;
}

.physical-scene-title {
  color: #cbd5e1;
  left: 1rem;
  position: absolute;
  top: 0.9rem;
}

.physical-scene-map {
  align-items: center;
  background: rgba(15, 23, 42, 0.76);
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 0.65rem;
  color: #cbd5e1;
  display: flex;
  font-size: 0.7rem;
  gap: 0.4rem;
  padding: 0.45rem 0.6rem;
  position: absolute;
  right: 1rem;
  top: 0.75rem;
}

.physical-scene-map code,
.physical-scene-caption code {
  background: rgba(219, 234, 254, 0.14);
  color: #bfdbfe;
}

.physical-scene-map strong {
  color: #93c5fd;
}

.physical-scene-caption {
  bottom: 0.75rem;
  color: #94a3b8;
  font-size: 0.68rem;
  left: 1rem;
  position: absolute;
}
</style>

<!--
- Goal: choose a visual channel people can interpret. Show: switch from Scale to Color once, keeping the same records. Use: a channel that fits the data. Limit: these examples need legends and are not equally good for precise comparison.
- `x` and `y` always map to local position. Pointer tilt changes the view, not the values; the screen positions can therefore move. Stable record IDs—not positions alone—preserve identity.
- The dropdown remaps the same `data` value to mesh shape, color, scale, or rotation.
- Mesh shape uses 20-point bands of the value, independent of record order. Shape does not provide a natural magnitude order. Scale is linear size = 0.5 + value/100, not proportional area or volume; rotation is a weak quantitative encoding. These are choices to evaluate, not four interchangeable recommendations.
- Animate between mappings so viewers can track the same records instead of decoding a replacement scene.
- Moving the pointer rotates the entire plot group, making the scene’s depth easier to see.
- Position and scale are easier to compare precisely than color or rotation.
- Color needs a legend and should not be the only way important information is communicated.
- Pick a visual property that matches the meaning of the data; more channels are not automatically better.
-->

---
class: demo-slide staggering-slide
---

# Guide Attention with Timing

<div class="demo-kind">Synthetic example</div>
<div class="demo-lead">The same entry animation, with a small delay between records.</div>

<div class="stagger-stage demo-stage demo-dark">
  <div ref="sceneHost" class="stagger-scene" role="img" aria-label="Comparison of simultaneous and staggered Three.js entry animations"></div>
  <div class="stagger-divider" aria-hidden="true"></div>
  <section class="stagger-label stagger-label--left">
    <div class="stagger-eyebrow">ALL AT ONCE</div>
    <h2>Simultaneous entry</h2>
    <div class="stagger-delay stagger-delay--left">delay = 0 ms</div>
  </section>
  <section class="stagger-label stagger-label--right">
    <div class="stagger-eyebrow">STAGGERED</div>
    <h2>One after another</h2>
    <div class="stagger-delay stagger-delay--right">delay = index × 30 ms</div>
  </section>
</div>

<button class="stagger-load-button" type="button" @click="loadData">
  {{ hasLoaded ? 'Replay entry' : 'Play entry' }}
</button>

<div class="demo-takeaway">Use timing to guide attention. Cap the total delay; this doesn’t make rendering faster.</div>

<script setup>
import * as THREE from 'three'
import { nextTick, ref } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'

const sceneHost = ref(null)
const hasLoaded = ref(false)
const entryDuration = 550
const staggerDelay = 30
const pointPositions = Array.from({ length: 12 }, (_, index) => new THREE.Vector3(
  (index % 4 - 1.5) * 0.82,
  (1 - Math.floor(index / 4)) * 0.55 - 0.3,
  -((index * 7) % 3) * 0.12,
))
const pointScales = [1, 0.82, 1.08, 0.9, 0.76, 1.02, 0.86, 1.1, 0.8, 0.94, 0.74, 1]
const pointColors = [0x38bdf8, 0x818cf8, 0xf472b6, 0xfbbf24, 0x34d399]

let renderer
let leftScene
let rightScene
let leftCamera
let rightCamera
let leftGroup
let rightGroup
let geometry
let materials
let grids = []
let leftStates = []
let rightStates = []
let animationFrame
let resizeObserver
let reduceMotion = false

function createView(background) {
  const view = new THREE.Scene()
  view.background = new THREE.Color(background)
  view.fog = new THREE.Fog(background, 4.5, 8)
  view.add(new THREE.AmbientLight(0xffffff, 1.25))

  const keyLight = new THREE.DirectionalLight(0xffffff, 3)
  keyLight.position.set(-3, 4, 6)
  view.add(keyLight)

  const rimLight = new THREE.DirectionalLight(0x60a5fa, 1.5)
  rimLight.position.set(4, -1, -3)
  view.add(rimLight)

  const grid = new THREE.GridHelper(4.2, 8, 0x334155, 0x1e293b)
  grid.rotation.x = Math.PI / 2
  grid.position.z = -1
  grid.material.transparent = true
  grid.material.opacity = 0.4
  view.add(grid)
  grids.push(grid)
  return view
}

function createCamera() {
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100)
  camera.position.set(0, 0, 4.6)
  camera.lookAt(0, 0, 0)
  return camera
}

function createPoints(group) {
  return pointPositions.map((position, index) => {
    const mesh = new THREE.Mesh(geometry, materials[index])
    mesh.position.copy(position)
    mesh.position.y -= 0.35
    mesh.scale.setScalar(0)
    group.add(mesh)
    return { mesh, position, startAt: undefined, targetScale: pointScales[index] }
  })
}

function scheduleEntries(states, startedAt, delay) {
  states.forEach((state, index) => {
    state.mesh.position.copy(state.position)
    state.mesh.position.y -= 0.35
    state.mesh.scale.setScalar(0)
    state.startAt = startedAt + index * delay
  })
}

function loadData() {
  if (!leftStates.length || !rightStates.length) return

  hasLoaded.value = true
  const startedAt = performance.now()
  scheduleEntries(leftStates, startedAt, 0)
  scheduleEntries(rightStates, startedAt, staggerDelay)
}

function updateEntries(states, time) {
  states.forEach((state) => {
    if (state.startAt === undefined || (!reduceMotion && time < state.startAt)) return

    const progress = reduceMotion ? 1 : THREE.MathUtils.clamp((time - state.startAt) / entryDuration, 0, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    state.mesh.scale.setScalar(state.targetScale * eased)
    state.mesh.position.y = state.position.y - 0.35 * (1 - eased)
    if (progress === 1) state.startAt = undefined
  })
}

function resize() {
  if (!renderer || !sceneHost.value || !leftCamera || !rightCamera) return

  const width = sceneHost.value.clientWidth
  const height = sceneHost.value.clientHeight
  if (!width || !height) return

  renderer.setSize(width, height, false)
  const leftWidth = Math.floor(width / 2)
  leftCamera.aspect = leftWidth / height
  rightCamera.aspect = (width - leftWidth) / height
  leftCamera.updateProjectionMatrix()
  rightCamera.updateProjectionMatrix()
}

function animate(time = performance.now()) {
  if (!renderer || !leftScene || !rightScene || !sceneHost.value) return

  animationFrame = requestAnimationFrame(animate)
  updateEntries(leftStates, time)
  updateEntries(rightStates, time)

  const width = sceneHost.value.clientWidth
  const height = sceneHost.value.clientHeight
  const leftWidth = Math.floor(width / 2)
  renderer.setScissorTest(true)
  renderer.setViewport(0, 0, leftWidth, height)
  renderer.setScissor(0, 0, leftWidth, height)
  renderer.render(leftScene, leftCamera)
  renderer.setViewport(leftWidth, 0, width - leftWidth, height)
  renderer.setScissor(leftWidth, 0, width - leftWidth, height)
  renderer.render(rightScene, rightCamera)
  renderer.setScissorTest(false)
}

function createScene() {
  if (renderer || !sceneHost.value) return

  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  leftScene = createView(0x081426)
  rightScene = createView(0x0a1d2d)
  leftCamera = createCamera()
  rightCamera = createCamera()
  leftGroup = new THREE.Group()
  rightGroup = new THREE.Group()
  leftScene.add(leftGroup)
  rightScene.add(rightGroup)

  geometry = new THREE.DodecahedronGeometry(0.24)
  materials = pointPositions.map((_, index) => new THREE.MeshStandardMaterial({
    color: pointColors[index % pointColors.length],
    metalness: 0.15,
    roughness: 0.35,
  }))
  leftStates = createPoints(leftGroup)
  rightStates = createPoints(rightGroup)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.domElement.setAttribute('aria-hidden', 'true')
  sceneHost.value.appendChild(renderer.domElement)

  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(sceneHost.value)
  resize()
  animate()
}

function disposeScene() {
  if (animationFrame) cancelAnimationFrame(animationFrame)
  resizeObserver?.disconnect()
  grids.forEach((grid) => {
    grid.geometry.dispose()
    grid.material.dispose()
  })
  geometry?.dispose()
  materials?.forEach((material) => material.dispose())
  renderer?.dispose()
  renderer?.domElement.remove()

  grids = []
  leftStates = []
  rightStates = []
  hasLoaded.value = false
  renderer = leftScene = rightScene = leftCamera = rightCamera = leftGroup = rightGroup = geometry = materials = animationFrame = resizeObserver = undefined
}

onSlideEnter(async () => {
  await nextTick()
  createScene()
})
onSlideLeave(disposeScene)
</script>

<style>
.staggering-slide {
  background: #f8fafc;
  color: #0f172a;
  justify-content: flex-start;
  overflow: hidden;
}

.staggering-slide h1 {
  color: #0f172a;
}

.stagger-claim {
  color: #334155;
  font-size: 1.5rem;
  letter-spacing: 0.01em;
  margin-top: 4.35rem;
  text-align: center;
}

.stagger-claim strong {
  color: #2563eb;
}

.stagger-stage {
  background: #081426;
  border: 1px solid #1e293b;
  border-radius: 1rem;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.18);
  flex: 1;
  margin-top: 1rem;
  min-height: 18rem;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.stagger-scene,
.stagger-scene canvas {
  display: block;
  height: 100%;
  inset: 0;
  position: absolute;
  width: 100%;
}

.stagger-divider {
  background: rgba(148, 163, 184, 0.3);
  bottom: 0;
  left: 50%;
  position: absolute;
  top: 0;
  width: 1px;
  z-index: 1;
}

.stagger-label {
  color: #f8fafc;
  pointer-events: none;
  position: absolute;
  top: 1rem;
  width: calc(50% - 2.5rem);
  z-index: 2;
}

.stagger-label--left {
  left: 1.25rem;
}

.stagger-label--right {
  left: calc(50% + 1.25rem);
}

.stagger-eyebrow {
  color: #cbd5e1;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.stagger-label h2 {
  color: #fff;
  font-size: 1.15rem;
  margin: 0.15rem 0 0;
}

.stagger-delay {
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 0.5rem;
  display: inline-block;
  font-family: 'Fira Code', monospace;
  font-size: 0.65rem;
  padding: 0.3rem 0.45rem;
  position: absolute;
  right: 0;
  top: 0;
}

.stagger-delay--left {
  color: #fdba74;
}

.stagger-delay--right {
  color: #93c5fd;
}

.stagger-record-count {
  bottom: 0.8rem;
  color: #94a3b8;
  font-size: 0.68rem;
  position: absolute;
  z-index: 2;
}

.stagger-record-count--left {
  left: 1.25rem;
}

.stagger-record-count--right {
  left: calc(50% + 1.25rem);
}

.stagger-load-button {
  align-items: center;
  align-self: center;
  background: #2563eb;
  border: 0;
  border-radius: 0.65rem;
  box-shadow: 0 6px 14px rgba(37, 99, 235, 0.25);
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font: inherit;
  font-size: 0.85rem;
  font-weight: 700;
  margin-top: 0.7rem;
  padding: 0.55rem 0.9rem;
}

.stagger-load-button:hover {
  background: #1d4ed8;
}

.stagger-load-button:focus-visible {
  outline: 3px solid #93c5fd;
  outline-offset: 3px;
}

</style>

<!--
- Goal: make a sequence easier to follow. Show: press Play entry once and compare the two sides. Use: a short, meaningful order. Limit: delay adds waiting; it is not a rendering optimization.
- The button resets both scenes and shows the same twelve synthetic records; no network request is made.
- Every marker uses the same 550 ms entry animation. These are appearance transitions, not changes to the records' values. Prefer opacity-only entry if movement or scale could be read as a quantitative change.
- The left starts every marker at the same time.
- The right starts each marker 30 ms after the previous marker.
- Staggering does not make rendering faster; it controls pacing and directs attention.
- Sort records into a meaningful order before staggering them.
- Cap the total delay or animate in batches for large datasets.
- With reduced motion enabled on entry, the button shows every record immediately. Decorative rotation is removed so only the timing differs.
-->

---
class: demo-slide idle-motion-slide
---

# Keep Data Positions Still

<div class="demo-kind">Synthetic example</div>
<div class="demo-lead">Decorative rotation is optional. Moving a plotted position can suggest a new value.</div>

<div class="idle-stage demo-stage demo-dark">
  <div ref="sceneHost" class="idle-scene" role="img" aria-label="The same Three.js data points shown static on the left and with decorative idle motion on the right"></div>
  <div class="idle-divider" aria-hidden="true"></div>
  <section class="idle-label idle-label--left">
    <div class="idle-eyebrow">STATIC</div>
    <h2>Perfectly still</h2>
  </section>
  <section class="idle-label idle-label--right">
    <div class="idle-eyebrow">IDLE MOTION</div>
    <h2>Rotation only</h2>
  </section>
  <div class="idle-caption idle-caption--left demo-caption">fixed position · fixed rotation</div>
  <div class="idle-caption idle-caption--right demo-caption">fixed position · decorative rotation</div>
</div>

<div class="demo-action">
  <button class="demo-button" type="button" :disabled="reduceMotion" :aria-pressed="motionPaused || reduceMotion" @click="motionPaused = !motionPaused">{{ reduceMotion ? 'Rotation off (reduced motion)' : motionPaused ? 'Resume rotation' : 'Pause rotation' }}</button>
</div>
<div class="demo-takeaway">Use sparingly when orientation has no meaning. Let people pause.</div>

<script setup>
import * as THREE from 'three'
import { nextTick, ref } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'

const sceneHost = ref(null)
const motionPaused = ref(false)
const reduceMotion = ref(false)
const pointPositions = [
  new THREE.Vector3(-1.25, 0.55, -0.1),
  new THREE.Vector3(-0.42, 0.7, -0.3),
  new THREE.Vector3(0.42, 0.55, 0.05),
  new THREE.Vector3(1.25, 0.68, -0.2),
  new THREE.Vector3(-1.05, -0.08, -0.25),
  new THREE.Vector3(-0.2, 0.02, 0.08),
  new THREE.Vector3(0.68, -0.08, -0.18),
  new THREE.Vector3(-0.62, -0.72, 0),
  new THREE.Vector3(0.22, -0.62, -0.28),
  new THREE.Vector3(1.08, -0.72, 0.06),
]

let renderer
let leftScene
let rightScene
let leftCamera
let rightCamera
let geometry
let material
let grids = []
let rightStates = []
let animationFrame
let resizeObserver

function createView(background) {
  const view = new THREE.Scene()
  view.background = new THREE.Color(background)
  view.fog = new THREE.Fog(background, 4.5, 8)
  view.add(new THREE.AmbientLight(0xffffff, 1.25))

  const keyLight = new THREE.DirectionalLight(0xffffff, 3)
  keyLight.position.set(-3, 4, 6)
  view.add(keyLight)

  const rimLight = new THREE.DirectionalLight(0x60a5fa, 1.5)
  rimLight.position.set(4, -1, -3)
  view.add(rimLight)

  const grid = new THREE.GridHelper(4.2, 8, 0x334155, 0x1e293b)
  grid.rotation.x = Math.PI / 2
  grid.position.z = -1
  grid.material.transparent = true
  grid.material.opacity = 0.4
  view.add(grid)
  grids.push(grid)
  return view
}

function createCamera() {
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100)
  camera.position.set(0, 0, 4.6)
  camera.lookAt(0, 0, 0)
  return camera
}

function createPoints(view, animated) {
  pointPositions.forEach((position, index) => {
    const mesh = new THREE.Mesh(geometry, material)
    const rotation = new THREE.Euler(0.2 + index * 0.08, 0.3 + index * 0.13, index * 0.04)
    mesh.position.copy(position)
    mesh.rotation.copy(rotation)
    view.add(mesh)
    if (animated) rightStates.push({ mesh, position, rotation, phase: index * 0.7 })
  })
}

function resize() {
  if (!renderer || !sceneHost.value || !leftCamera || !rightCamera) return

  const width = sceneHost.value.clientWidth
  const height = sceneHost.value.clientHeight
  if (!width || !height) return

  renderer.setSize(width, height, false)
  const leftWidth = Math.floor(width / 2)
  leftCamera.aspect = leftWidth / height
  rightCamera.aspect = (width - leftWidth) / height
  leftCamera.updateProjectionMatrix()
  rightCamera.updateProjectionMatrix()
}

function animate(time = performance.now()) {
  if (!renderer || !leftScene || !rightScene || !sceneHost.value) return

  animationFrame = requestAnimationFrame(animate)
  if (!reduceMotion.value && !motionPaused.value) {
    const seconds = time / 1000
    rightStates.forEach(({ mesh, rotation, phase }) => {
      const wave = seconds * 0.85 + phase
      mesh.rotation.x = rotation.x + Math.sin(wave * 0.7) * 0.08
      mesh.rotation.y = rotation.y + seconds * 0.12
      mesh.rotation.z = rotation.z + Math.cos(wave * 0.6) * 0.06
    })
  }

  const width = sceneHost.value.clientWidth
  const height = sceneHost.value.clientHeight
  const leftWidth = Math.floor(width / 2)
  renderer.setScissorTest(true)
  renderer.setViewport(0, 0, leftWidth, height)
  renderer.setScissor(0, 0, leftWidth, height)
  renderer.render(leftScene, leftCamera)
  renderer.setViewport(leftWidth, 0, width - leftWidth, height)
  renderer.setScissor(leftWidth, 0, width - leftWidth, height)
  renderer.render(rightScene, rightCamera)
  renderer.setScissorTest(false)
}

function createScene() {
  if (renderer || !sceneHost.value) return

  reduceMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  leftScene = createView(0x081426)
  rightScene = createView(0x0a1d2d)
  leftCamera = createCamera()
  rightCamera = createCamera()
  geometry = new THREE.BoxGeometry(0.36, 0.36, 0.36)
  material = new THREE.MeshStandardMaterial({
    color: 0x38bdf8,
    metalness: 0.15,
    roughness: 0.35,
  })
  createPoints(leftScene, false)
  createPoints(rightScene, true)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.domElement.setAttribute('aria-hidden', 'true')
  sceneHost.value.appendChild(renderer.domElement)

  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(sceneHost.value)
  resize()
  animate()
}

function disposeScene() {
  if (animationFrame) cancelAnimationFrame(animationFrame)
  resizeObserver?.disconnect()
  grids.forEach((grid) => {
    grid.geometry.dispose()
    grid.material.dispose()
  })
  geometry?.dispose()
  material?.dispose()
  renderer?.dispose()
  renderer?.domElement.remove()

  grids = []
  rightStates = []
  renderer = leftScene = rightScene = leftCamera = rightCamera = geometry = material = animationFrame = resizeObserver = undefined
}

onSlideEnter(async () => {
  await nextTick()
  createScene()
})
onSlideLeave(disposeScene)
</script>

<style>
.idle-motion-slide {
  background: #f8fafc;
  color: #0f172a;
  justify-content: flex-start;
  overflow: hidden;
}

.idle-motion-slide h1 {
  color: #0f172a;
}

.idle-claim {
  color: #334155;
  font-size: 1.5rem;
  letter-spacing: 0.01em;
  margin-top: 4.35rem;
  text-align: center;
}

.idle-claim strong {
  color: #2563eb;
}

.idle-stage {
  background: #081426;
  border: 1px solid #1e293b;
  border-radius: 1rem;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.18);
  flex: 1;
  margin-top: 1rem;
  min-height: 21rem;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.idle-scene,
.idle-scene canvas {
  display: block;
  height: 100%;
  inset: 0;
  position: absolute;
  width: 100%;
}

.idle-divider {
  background: rgba(148, 163, 184, 0.3);
  bottom: 0;
  left: 50%;
  position: absolute;
  top: 0;
  width: 1px;
  z-index: 1;
}

.idle-label {
  color: #f8fafc;
  pointer-events: none;
  position: absolute;
  top: 1rem;
  width: calc(50% - 2.5rem);
  z-index: 2;
}

.idle-label--left {
  left: 1.25rem;
}

.idle-label--right {
  left: calc(50% + 1.25rem);
}

.idle-eyebrow {
  color: #cbd5e1;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.idle-label h2 {
  color: #fff;
  font-size: 1.15rem;
  margin: 0.15rem 0 0;
}

.idle-motion-badge {
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 0.5rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.65rem;
  padding: 0.3rem 0.45rem;
  position: absolute;
  right: 0;
  top: 0;
}

.idle-motion-badge--left {
  color: #cbd5e1;
}

.idle-motion-badge--right {
  color: #93c5fd;
}

.idle-caption {
  bottom: 0.8rem;
  color: #94a3b8;
  font-size: 0.68rem;
  position: absolute;
  z-index: 2;
}

.idle-caption--left {
  left: 1.25rem;
}

.idle-caption--right {
  left: calc(50% + 1.25rem);
}
</style>

<!--
- Goal: separate decoration from data. Show: compare the two sides, then press Pause rotation once. Use: orientation-neutral decoration. Limit: even subtle motion can distract, and it is misleading if orientation encodes a value.
- Both sides keep identical mark positions. The right changes rotation only; the earlier positional bob has been removed. None of the rotation is mapped to data.
- Every mark uses the same amplitude and speed with offset phases, so the motion feels organic rather than synchronized.
- Keep idle movement slow and low-amplitude so it does not compete with the visualization.
- Do not move a data-encoded position just to make a chart look alive. A stable hidden anchor does not prevent a moving visible mark from being misleading.
- The demo becomes static when the user prefers reduced motion.
- Stop animation work when the visualization is offscreen or hidden.
-->

---

# What Else Can Three.js Do?

The renderer opens the door to a broader set of GPU-powered tools.

---
class: demo-slide billboard-slide
---

# Keep Images Facing the Camera

<div class="demo-kind">Illustration</div>
<div class="demo-lead">Billboards keep icons readable as the viewing angle changes.</div>

<div
  class="billboard-stage demo-stage demo-dark"
  @pointermove="handlePointerMove"
  @pointerleave="resetPointer"
>
  <div ref="sceneHost" class="billboard-scene" role="img" aria-label="Fixed image planes compared with camera-facing Three.js sprites while the camera orbits"></div>
  <div class="billboard-divider" aria-hidden="true"></div>
  <section class="billboard-label billboard-label--left">
    <div class="billboard-eyebrow">FIXED PLANES</div>
    <h2>World-aligned images</h2>
  </section>
  <section class="billboard-label billboard-label--right">
    <div class="billboard-eyebrow">BILLBOARDS</div>
    <h2>Camera-facing images</h2>
  </section>
  <div class="billboard-caption billboard-caption--left demo-caption">PlaneGeometry · same texture · same positions</div>
  <div class="billboard-caption billboard-caption--right demo-caption">Sprite · same texture · same positions</div>
  <div class="billboard-hint">Try moving the pointer left to right</div>
</div>

<div class="demo-takeaway">Use for icons and labels. Keep fixed planes when surface direction matters.</div>

<script setup>
import * as THREE from 'three'
import { nextTick, ref } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'

const sceneHost = ref(null)
const markerPositions = [
  [-1.45, 0.55, 0.15],
  [-0.5, 0.72, -0.75],
  [0.45, 0.5, 0.55],
  [1.4, 0.65, -0.2],
  [-1.2, -0.15, -0.65],
  [-0.25, -0.05, 0.2],
  [0.8, -0.18, -0.55],
  [1.5, -0.1, 0.5],
  [-0.75, -0.82, 0.4],
  [0.3, -0.72, -0.35],
  [1.2, -0.88, 0.05],
]
const restingYaw = -0.55

let renderer
let leftScene
let rightScene
let leftCamera
let rightCamera
let planeGeometry
let planeMaterial
let spriteMaterial
let markerTexture
let grids = []
let animationFrame
let resizeObserver
let targetYaw = restingYaw
let targetPitch = 0.06
let currentYaw = restingYaw
let currentPitch = 0.06
let reduceMotion = false

function createMarkerTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 160
  const context = canvas.getContext('2d')

  const gradient = context.createLinearGradient(8, 8, 248, 152)
  gradient.addColorStop(0, '#2563eb')
  gradient.addColorStop(1, '#06b6d4')
  context.fillStyle = gradient
  context.beginPath()
  context.roundRect(8, 8, 240, 144, 24)
  context.fill()
  context.strokeStyle = 'rgba(255, 255, 255, 0.75)'
  context.lineWidth = 4
  context.stroke()

  context.fillStyle = '#f8fafc'
  context.beginPath()
  context.arc(58, 80, 25, 0, Math.PI * 2)
  context.fill()
  context.fillStyle = '#1d4ed8'
  context.beginPath()
  context.arc(58, 80, 10, 0, Math.PI * 2)
  context.fill()

  context.fillStyle = '#f8fafc'
  context.font = '700 30px sans-serif'
  context.textAlign = 'left'
  context.textBaseline = 'middle'
  context.fillText('DATA', 96, 80)

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

function createView(background) {
  const view = new THREE.Scene()
  view.background = new THREE.Color(background)

  const grid = new THREE.GridHelper(5.5, 11, 0x334155, 0x1e293b)
  grid.position.y = -1.28
  grid.material.transparent = true
  grid.material.opacity = 0.45
  view.add(grid)
  grids.push(grid)
  return view
}

function createCamera() {
  return new THREE.PerspectiveCamera(38, 1, 0.1, 100)
}

function addMarkers() {
  markerPositions.forEach(([x, y, z]) => {
    const plane = new THREE.Mesh(planeGeometry, planeMaterial)
    plane.position.set(x, y, z)
    leftScene.add(plane)

    const sprite = new THREE.Sprite(spriteMaterial)
    sprite.position.set(x, y, z)
    sprite.scale.set(0.9, 0.56, 1)
    rightScene.add(sprite)
  })
}

function updateCameras() {
  const radius = 6.2
  const horizontalRadius = Math.cos(currentPitch) * radius
  const x = Math.sin(currentYaw) * horizontalRadius
  const y = Math.sin(currentPitch) * radius
  const z = Math.cos(currentYaw) * horizontalRadius

  leftCamera.position.set(x, y, z)
  rightCamera.position.copy(leftCamera.position)
  leftCamera.lookAt(0, -0.15, 0)
  rightCamera.lookAt(0, -0.15, 0)
}

function handlePointerMove(event) {
  const bounds = event.currentTarget.getBoundingClientRect()
  const x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1
  const y = ((event.clientY - bounds.top) / bounds.height) * 2 - 1
  targetYaw = x * 1.2
  targetPitch = -y * 0.24
}

function resetPointer() {
  targetYaw = restingYaw
  targetPitch = 0.06
}

function resize() {
  if (!renderer || !sceneHost.value || !leftCamera || !rightCamera) return

  const width = sceneHost.value.clientWidth
  const height = sceneHost.value.clientHeight
  if (!width || !height) return

  renderer.setSize(width, height, false)
  const leftWidth = Math.floor(width / 2)
  leftCamera.aspect = leftWidth / height
  rightCamera.aspect = (width - leftWidth) / height
  leftCamera.updateProjectionMatrix()
  rightCamera.updateProjectionMatrix()
}

function animate() {
  if (!renderer || !leftScene || !rightScene || !sceneHost.value) return

  animationFrame = requestAnimationFrame(animate)
  if (reduceMotion) {
    currentYaw = targetYaw
    currentPitch = targetPitch
  } else {
    currentYaw += (targetYaw - currentYaw) * 0.08
    currentPitch += (targetPitch - currentPitch) * 0.08
  }
  updateCameras()

  const width = sceneHost.value.clientWidth
  const height = sceneHost.value.clientHeight
  const leftWidth = Math.floor(width / 2)
  renderer.setScissorTest(true)
  renderer.setViewport(0, 0, leftWidth, height)
  renderer.setScissor(0, 0, leftWidth, height)
  renderer.render(leftScene, leftCamera)
  renderer.setViewport(leftWidth, 0, width - leftWidth, height)
  renderer.setScissor(leftWidth, 0, width - leftWidth, height)
  renderer.render(rightScene, rightCamera)
  renderer.setScissorTest(false)
}

function createScene() {
  if (renderer || !sceneHost.value) return

  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  leftScene = createView(0x081426)
  rightScene = createView(0x0a1d2d)
  leftCamera = createCamera()
  rightCamera = createCamera()

  markerTexture = createMarkerTexture()
  planeGeometry = new THREE.PlaneGeometry(0.9, 0.56)
  planeMaterial = new THREE.MeshBasicMaterial({
    alphaTest: 0.05,
    map: markerTexture,
    side: THREE.DoubleSide,
    transparent: true,
  })
  spriteMaterial = new THREE.SpriteMaterial({
    alphaTest: 0.05,
    map: markerTexture,
    transparent: true,
  })
  addMarkers()

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.domElement.setAttribute('aria-hidden', 'true')
  sceneHost.value.appendChild(renderer.domElement)

  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(sceneHost.value)
  resize()
  updateCameras()
  animate()
}

function disposeScene() {
  if (animationFrame) cancelAnimationFrame(animationFrame)
  resizeObserver?.disconnect()
  grids.forEach((grid) => {
    grid.geometry.dispose()
    grid.material.dispose()
  })
  planeGeometry?.dispose()
  planeMaterial?.dispose()
  spriteMaterial?.dispose()
  markerTexture?.dispose()
  renderer?.dispose()
  renderer?.domElement.remove()

  grids = []
  targetYaw = currentYaw = restingYaw
  targetPitch = currentPitch = 0.06
  renderer = leftScene = rightScene = leftCamera = rightCamera = planeGeometry = planeMaterial = spriteMaterial = markerTexture = animationFrame = resizeObserver = undefined
}

onSlideEnter(async () => {
  await nextTick()
  createScene()
})
onSlideLeave(disposeScene)
</script>

<style>
.billboard-slide {
  background: #f8fafc;
  color: #0f172a;
  justify-content: flex-start;
  overflow: hidden;
}

.billboard-slide h1 {
  color: #0f172a;
}

.billboard-claim {
  color: #334155;
  font-size: 1.45rem;
  letter-spacing: 0.01em;
  margin-top: 4.35rem;
  text-align: center;
}

.billboard-claim strong {
  color: #2563eb;
}

.billboard-stage {
  background: #081426;
  border: 1px solid #1e293b;
  border-radius: 1rem;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.18);
  cursor: ew-resize;
  flex: 1;
  margin-top: 1rem;
  min-height: 21rem;
  overflow: hidden;
  position: relative;
  touch-action: none;
  width: 100%;
}

.billboard-scene,
.billboard-scene canvas {
  display: block;
  height: 100%;
  inset: 0;
  position: absolute;
  width: 100%;
}

.billboard-divider {
  background: rgba(148, 163, 184, 0.3);
  bottom: 0;
  left: 50%;
  position: absolute;
  top: 0;
  width: 1px;
  z-index: 1;
}

.billboard-label {
  color: #f8fafc;
  pointer-events: none;
  position: absolute;
  top: 1rem;
  width: calc(50% - 2.5rem);
  z-index: 2;
}

.billboard-label--left {
  left: 1.25rem;
}

.billboard-label--right {
  left: calc(50% + 1.25rem);
}

.billboard-eyebrow {
  color: #cbd5e1;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.billboard-label h2 {
  color: #fff;
  font-size: 1.15rem;
  margin: 0.15rem 0 0;
}

.billboard-badge {
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 0.5rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.62rem;
  padding: 0.3rem 0.45rem;
  position: absolute;
  right: 0;
  top: 0;
}

.billboard-badge--left {
  color: #fdba74;
}

.billboard-badge--right {
  color: #93c5fd;
}

.billboard-caption {
  bottom: 0.75rem;
  color: #94a3b8;
  font-size: 0.62rem;
  pointer-events: none;
  position: absolute;
  z-index: 2;
}

.billboard-caption--left {
  left: 1.25rem;
}

.billboard-caption--right {
  left: calc(50% + 1.25rem);
}

.billboard-hint {
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 999px;
  bottom: 0.65rem;
  color: #e2e8f0;
  font-size: 0.62rem;
  left: 50%;
  padding: 0.35rem 0.65rem;
  pointer-events: none;
  position: absolute;
  transform: translateX(-50%);
  white-space: nowrap;
  z-index: 3;
}
</style>

<!--
- Goal: keep images legible while the view changes. Show: move the pointer left to right once. Use: icons/labels whose orientation carries no data. Limit: sprites can overlap and are not automatically instanced.
- Both sides use the same texture, positions, perspective, and camera movement.
- The left uses ordinary `PlaneGeometry`, so every image keeps its world-space orientation.
- The right uses `THREE.Sprite`; the renderer keeps each image facing the camera.
- Move the pointer horizontally to orbit both cameras and watch the fixed planes turn edge-on while the sprites remain legible.
- Billboards are useful for labels, icons, map markers, particles, and other images whose orientation carries no meaning.
- Do not use them when surface direction or object orientation is part of the data.
- `THREE.Sprite` is convenient but is not automatically instanced; very large marker sets usually use instanced quads with camera-facing shader math.
- Transparent billboard images still require attention to depth ordering, alpha testing, and overdraw.
- Reduced-motion preferences remove camera easing while preserving direct pointer control.
-->

---
class: demo-slide shader-slide
---

# Shaders: Apply a Rule in Parallel

<div class="demo-kind">Illustration</div>
<div class="demo-lead">Vertex shaders change geometry. Fragment shaders color the surface.</div>

<div class="shader-stage demo-stage">
  <section class="shader-code-panel demo-dark">

<h2>Vertex: change the position</h2>

<<< @/slides.md#shader-displacement glsl

<h2 class="mt-4">Fragment: blend two colors</h2>

<<< @/slides.md#shader-color glsl

<p class="demo-caption">GLSL excerpts · setup and camera transform omitted.</p>

  </section>

  <section class="shader-demo demo-dark">
    <div ref="sceneHost" class="shader-scene" role="img" aria-label="A wave surface displaced and colored by a custom Three.js shader"></div>
    <div class="shader-demo-heading">
      <div>
        <span>GPU WAVE SURFACE</span>
        A made-up wave, not measured data.
      </div>
    </div>
    <label class="shader-control" for="shader-amplitude">
      <span>Wave height</span>
      <input
        id="shader-amplitude"
        v-model.number="amplitude"
        type="range"
        min="0"
        max="0.55"
        step="0.01"
      />
      <output>{{ amplitude.toFixed(2) }}</output>
    </label>
  </section>
</div>

<div class="demo-takeaway">Try Wave height → 0. Use shaders for repeated GPU work, not automatic speedups.</div>

<script setup>
import * as THREE from 'three'
import { nextTick, ref, watch } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'

const sceneHost = ref(null)
const amplitude = ref(0.34)

const vertexShader = `uniform float uTime;
uniform float uAmplitude;
varying float vHeight;
void main() {
  // #region shader-displacement
  vec3 p = position;
  vHeight = sin(p.x * 3.0 + uTime)
    * uAmplitude;
  p.z += vHeight;
  // #endregion
  gl_Position = projectionMatrix
    * modelViewMatrix * vec4(p, 1.0);
}`

const fragmentShader = `varying float vHeight;
void main() {
  float height = smoothstep(-0.45, 0.45, vHeight);
  vec3 low = vec3(0.12, 0.23, 0.54);
  vec3 high = vec3(0.13, 0.83, 0.93);
  // #region shader-color
  vec3 color = mix(low, high, height);
  gl_FragColor = vec4(color, 1.0);
  // #endregion
}`

let renderer
let scene
let camera
let geometry
let material
let mesh
let animationFrame
let resizeObserver
let reduceMotion = false

function resize() {
  if (!renderer || !camera || !sceneHost.value) return

  const width = sceneHost.value.clientWidth
  const height = sceneHost.value.clientHeight
  if (!width || !height) return

  renderer.setSize(width, height, false)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
}

function animate(time = performance.now()) {
  if (!renderer || !scene || !camera || !material) return

  animationFrame = requestAnimationFrame(animate)
  if (!reduceMotion) material.uniforms.uTime.value = time / 700
  renderer.render(scene, camera)
}

function createScene() {
  if (renderer || !sceneHost.value) return

  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x07111f)

  camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100)
  camera.position.set(0, -4.7, 3.4)
  camera.lookAt(0, 0.15, 0)

  geometry = new THREE.PlaneGeometry(5.2, 3.2, 100, 64)
  material = new THREE.ShaderMaterial({
    fragmentShader,
    side: THREE.DoubleSide,
    uniforms: {
      uAmplitude: { value: amplitude.value },
      uTime: { value: 0 },
    },
    vertexShader,
  })
  mesh = new THREE.Mesh(geometry, material)
  mesh.rotation.z = -0.08
  scene.add(mesh)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.domElement.setAttribute('aria-hidden', 'true')
  sceneHost.value.appendChild(renderer.domElement)

  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(sceneHost.value)
  resize()
  animate()
}

function disposeScene() {
  if (animationFrame) cancelAnimationFrame(animationFrame)
  resizeObserver?.disconnect()
  geometry?.dispose()
  material?.dispose()
  renderer?.dispose()
  renderer?.domElement.remove()

  renderer = scene = camera = geometry = material = mesh = animationFrame = resizeObserver = undefined
}

watch(amplitude, (value) => {
  if (material) material.uniforms.uAmplitude.value = value
})
onSlideEnter(async () => {
  await nextTick()
  createScene()
})
onSlideLeave(disposeScene)
</script>

<style>
.shader-slide {
  background: #f8fafc;
  color: #0f172a;
  justify-content: flex-start;
  overflow: hidden;
}

.shader-slide h1 {
  color: #0f172a;
}

.shader-claim {
  color: #334155;
  font-size: 1.45rem;
  letter-spacing: 0.01em;
  margin-top: 4.35rem;
  text-align: center;
}

.shader-claim strong {
  color: #2563eb;
}

.shader-stage {
  border: 1px solid #1e293b;
  border-radius: 1rem;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.18);
  display: grid;
  flex: 1;
  grid-template-columns: 43% 57%;
  margin-top: 1rem;
  min-height: 21rem;
  overflow: hidden;
  width: 100%;
}

.shader-code-panel {
  background: #0f172a;
  box-sizing: border-box;
  min-width: 0;
  padding: 1rem 1.15rem;
}

.shader-code-heading {
  align-items: center;
  color: #cbd5e1;
  display: flex;
  font-size: 0.68rem;
  font-weight: 700;
  gap: 0.55rem;
  letter-spacing: 0.02em;
}

.shader-code-heading--fragment {
  margin-top: 0.7rem;
}

.shader-code-step {
  border-radius: 0.35rem;
  color: #fff;
  font-size: 0.56rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  padding: 0.22rem 0.35rem;
}

.shader-code-step--vertex {
  background: #2563eb;
}

.shader-code-step--fragment {
  background: #db2777;
}

.shader-language {
  border: 1px solid #475569;
  border-radius: 0.35rem;
  color: #94a3b8;
  font-family: 'Fira Code', monospace;
  font-size: 0.56rem;
  letter-spacing: 0.08em;
  margin-left: auto;
  padding: 0.2rem 0.35rem;
}

.shader-code {
  background: transparent;
  color: #e2e8f0;
  font-family: 'Fira Code', monospace;
  font-size: 0.6rem;
  line-height: 1.42;
  margin: 0.52rem 0 0;
  overflow: visible;
  padding: 0;
  white-space: pre-wrap;
}

.shader-code--fragment {
  line-height: 1.38;
}

.shader-code-line {
  display: block;
}

.shader-code-line--indent {
  padding-left: 0.9rem;
}

.shader-code-line--double-indent {
  padding-left: 1.8rem;
}

.shader-token-keyword {
  color: #c084fc;
}

.shader-token-type {
  color: #93c5fd;
}

.shader-token-uniform {
  color: #86efac;
}

.shader-token-builtin {
  color: #67e8f9;
}

.shader-token-function {
  color: #fbbf24;
}

.shader-token-number {
  color: #fdba74;
}

.shader-demo {
  background: #07111f;
  min-width: 0;
  overflow: hidden;
  position: relative;
}

.shader-scene,
.shader-scene canvas {
  display: block;
  height: 100%;
  inset: 0;
  position: absolute;
  width: 100%;
}

.shader-demo-heading {
  align-items: flex-start;
  color: #e2e8f0;
  display: flex;
  font-size: 0.7rem;
  justify-content: space-between;
  left: 1rem;
  pointer-events: none;
  position: absolute;
  right: 1rem;
  top: 0.9rem;
  z-index: 2;
}

.shader-demo-heading > div:first-child > span {
  color: #67e8f9;
  display: block;
  font-size: 0.62rem;
  font-weight: 900;
  letter-spacing: 0.09em;
  margin-bottom: 0.2rem;
}

.shader-demo-stats {
  display: flex;
  gap: 0.35rem;
}

.shader-demo-stats span {
  background: rgba(15, 23, 42, 0.78);
  border: 1px solid rgba(148, 163, 184, 0.32);
  border-radius: 0.4rem;
  color: #cbd5e1;
  font-family: 'Fira Code', monospace;
  font-size: 0.56rem;
  padding: 0.28rem 0.38rem;
}

.shader-control {
  align-items: center;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 0.65rem;
  bottom: 0.8rem;
  color: #e2e8f0;
  display: grid;
  font-family: 'Fira Code', monospace;
  font-size: 0.65rem;
  gap: 0.65rem;
  grid-template-columns: auto 1fr 2.5rem;
  left: 1rem;
  padding: 0.5rem 0.65rem;
  position: absolute;
  right: 1rem;
  z-index: 2;
}

.shader-control > span {
  color: #93c5fd;
}

.shader-control input {
  accent-color: #22d3ee;
  cursor: pointer;
  min-width: 0;
  width: 100%;
}

.shader-control output {
  color: #67e8f9;
  text-align: right;
}
</style>

<!--
- Goal: apply the same rule across many vertices/fragments. Show: lower Wave height to zero once. Use: repeated custom GPU calculations. Limit: this changes the rendered surface; do not animate measured heights unless the data actually changes.
- The plane contains 6,565 vertices. For its motion, the CPU updates one uTime uniform per frame; JavaScript still schedules and submits rendering.
- Uniforms are values shared by every shader invocation in a draw call; the slider updates `uAmplitude` without rebuilding geometry.
- The vertex shader receives Three.js's `position` attribute and built-in projection and model-view matrices.
- It changes each vertex's z position with the same sine function.
- `vHeight` is interpolated across the triangle and passed into the fragment shader.
- The fragment shader turns that height into a color for each fragment.
- This example uses one opaque ShaderMaterial, one mesh, and one visible pass without shadows. It makes one draw in that pass; material groups, transparent double-sided rendering, or additional passes can change the count.
- Shaders are valuable when many vertices or pixels need the same custom calculation; they are not automatically faster for every task.
- Reduced-motion preferences freeze `uTime` while keeping the amplitude control usable.
-->

---
class: demo-slide lod-slide
---

# LOD: Match Detail to the View

<div class="demo-kind">Illustration</div>
<div class="demo-lead">Level of detail lets you use a simpler mesh when extra detail stops helping.</div>

<div class="lod-stage demo-stage">
  <section class="lod-explainer">
    <div class="lod-explainer-heading">Create a THREE.LOD()</div>
    <div class="lod-code demo-code">
      <span>lod.addLevel(high, <i>0</i>)</span>
      <span>lod.addLevel(medium, <i>7</i>)</span>
      <span>lod.addLevel(low, <i>10.5</i>)</span>
    </div>
    <div class="lod-levels">
      <button type="button" class="lod-level" :class="{ 'lod-level--active': currentLevelIndex === 0 }" :aria-pressed="currentLevelIndex === 0" @click="selectLevel(0)">
        <span class="lod-level-dot lod-level-dot--high"></span>
        <span class="lod-level-info">
          <strong>HIGH</strong>
          <span>distance &lt; 7</span>
        </span>
        <span class="lod-level-count">
          <strong>2,420</strong>
          <span>triangles</span>
        </span>
      </button>
      <button type="button" class="lod-level" :class="{ 'lod-level--active': currentLevelIndex === 1 }" :aria-pressed="currentLevelIndex === 1" @click="selectLevel(1)">
        <span class="lod-level-dot lod-level-dot--medium"></span>
        <span class="lod-level-info">
          <strong>MEDIUM</strong>
          <span>7 ≤ distance &lt; 10.5</span>
        </span>
        <span class="lod-level-count">
          <strong>320</strong>
          <span>triangles</span>
        </span>
      </button>
      <button type="button" class="lod-level" :class="{ 'lod-level--active': currentLevelIndex === 2 }" :aria-pressed="currentLevelIndex === 2" @click="selectLevel(2)">
        <span class="lod-level-dot lod-level-dot--low"></span>
        <span class="lod-level-info">
          <strong>LOW</strong>
          <span>distance ≥ 10.5</span>
        </span>
        <span class="lod-level-count">
          <strong>20</strong>
          <span>triangles</span>
        </span>
      </button>
    </div>
  </section>
  <section class="lod-demo demo-dark">
    <div ref="sceneHost" class="lod-scene" role="img" aria-label="A rotating Three.js model changing detail as camera distance changes"></div>
    <div class="lod-demo-heading">
      <div>
        <span>MOVE THE CAMERA</span>
        Distance chooses the visible mesh.
      </div>
    </div>
    <label class="lod-shading-toggle">
      <input v-model="smoothShading" type="checkbox" />
      <span>Smooth shading</span>
    </label>
    <label class="lod-control" for="lod-distance">
      <span>NEAR</span>
      <input
        id="lod-distance"
        v-model.number="cameraDistance"
        type="range"
        min="4.5"
        max="13.5"
        step="0.1"
      />
      <span>FAR</span>
      <output>distance = {{ cameraDistance.toFixed(1) }}</output>
    </label>
  </section>
</div>

<div class="demo-takeaway">Try Near → Far. Useful for distant detail; extra levels still take memory.</div>

<script setup>
import * as THREE from 'three'
import { nextTick, ref, watch } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'

const sceneHost = ref(null)
const cameraDistance = ref(5.2)
const currentLevelIndex = ref(0)
const smoothShading = ref(false)
const levelMeta = [
  { name: 'HIGH', detail: 10, distance: 0, sampleDistance: 5.2, triangles: 2420 },
  { name: 'MEDIUM', detail: 3, distance: 7, sampleDistance: 8.5, triangles: 320 },
  { name: 'LOW', detail: 0, distance: 10.5, sampleDistance: 12, triangles: 20 },
]

let renderer
let scene
let camera
let lod
let material
let geometries = []
let animationFrame
let resizeObserver
let reduceMotion = false

function resize() {
  if (!renderer || !camera || !sceneHost.value) return

  const width = sceneHost.value.clientWidth
  const height = sceneHost.value.clientHeight
  if (!width || !height) return

  renderer.setSize(width, height, false)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
}

function animate(time = performance.now()) {
  if (!renderer || !scene || !camera || !lod) return

  animationFrame = requestAnimationFrame(animate)
  if (!reduceMotion) lod.rotation.y = time * 0.00035
  renderer.render(scene, camera)

  const nextLevel = lod.getCurrentLevel()
  if (currentLevelIndex.value !== nextLevel) currentLevelIndex.value = nextLevel
}

function createScene() {
  if (renderer || !sceneHost.value) return

  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x07111f)

  camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100)
  camera.position.set(0, 0, cameraDistance.value)
  camera.lookAt(0, 0, 0)

  material = new THREE.MeshNormalMaterial({ flatShading: !smoothShading.value })
  lod = new THREE.LOD()
  lod.rotation.x = 0.18
  levelMeta.forEach((level) => {
    const geometry = new THREE.IcosahedronGeometry(1.15, level.detail)
    geometry.attributes.normal.array.set(geometry.attributes.position.array)
    geometry.normalizeNormals()
    geometries.push(geometry)
    lod.addLevel(new THREE.Mesh(geometry, material), level.distance)
  })
  scene.add(lod)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.domElement.setAttribute('aria-hidden', 'true')
  sceneHost.value.appendChild(renderer.domElement)

  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(sceneHost.value)
  resize()
  animate()
}

function disposeScene() {
  if (animationFrame) cancelAnimationFrame(animationFrame)
  resizeObserver?.disconnect()
  geometries.forEach((geometry) => geometry.dispose())
  material?.dispose()
  renderer?.dispose()
  renderer?.domElement.remove()

  geometries = []
  currentLevelIndex.value = 0
  renderer = scene = camera = lod = material = animationFrame = resizeObserver = undefined
}

function selectLevel(index) {
  cameraDistance.value = levelMeta[index].sampleDistance
}

watch(cameraDistance, (distance) => {
  if (camera) camera.position.z = distance
})
watch(smoothShading, (smooth) => {
  if (!material) return
  material.flatShading = !smooth
  material.needsUpdate = true
})
onSlideEnter(async () => {
  await nextTick()
  createScene()
})
onSlideLeave(disposeScene)
</script>

<style>
.lod-slide {
  background: #f8fafc;
  color: #0f172a;
  justify-content: flex-start;
  overflow: hidden;
}

.lod-slide h1 {
  color: #0f172a;
}

.lod-claim {
  color: #334155;
  font-size: 1.45rem;
  letter-spacing: 0.01em;
  margin-top: 4.35rem;
  text-align: center;
}

.lod-claim strong {
  color: #2563eb;
}

.lod-stage {
  border: 1px solid #cbd5e1;
  border-radius: 1rem;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.16);
  display: grid;
  flex: 1;
  grid-template-columns: 37% 63%;
  margin-top: 1rem;
  min-height: 21rem;
  overflow: hidden;
  width: 100%;
}

.lod-explainer {
  background: #fff;
  box-sizing: border-box;
  padding: 1rem 1.15rem;
}

.lod-explainer-heading {
  color: #64748b;
  font-size: 0.65rem;
  font-weight: 900;
  letter-spacing: 0.09em;
}

.lod-code {
  background: #0f172a;
  border-radius: 0.65rem;
  color: #dbeafe;
  font-family: 'Fira Code', monospace;
  font-size: 0.62rem;
  line-height: 1.6;
  margin-top: 0.65rem;
  padding: 0.65rem 0.75rem;
}

.lod-code span {
  display: block;
}

.lod-code b {
  color: #c084fc;
  font-weight: 500;
}

.lod-code i {
  color: #fdba74;
  font-style: normal;
}

.lod-levels {
  display: grid;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.lod-level {
  align-items: center;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 0.65rem;
  color: #64748b;
  cursor: pointer;
  display: grid;
  font: inherit;
  gap: 0.55rem;
  grid-template-columns: 0.55rem 1fr auto;
  padding: 0.52rem 0.6rem;
  text-align: left;
  transition: background 150ms ease, border-color 150ms ease, transform 150ms ease;
  width: 100%;
}

.lod-level:hover {
  border-color: #93c5fd;
}

.lod-level:focus-visible {
  outline: 3px solid #93c5fd;
  outline-offset: 2px;
}

.lod-level--active {
  background: #eff6ff;
  border-color: #60a5fa;
  transform: translateX(0.16rem);
}

.lod-level-dot {
  border-radius: 999px;
  height: 0.5rem;
  width: 0.5rem;
}

.lod-level-dot--high {
  background: #22d3ee;
}

.lod-level-dot--medium {
  background: #818cf8;
}

.lod-level-dot--low {
  background: #f59e0b;
}

.lod-level strong,
.lod-level span {
  display: block;
}

.lod-level-info strong {
  color: #334155;
  font-size: 0.7rem;
}

.lod-level-info > span,
.lod-level-count > span {
  font-size: 0.56rem;
  margin-top: 0.08rem;
}

.lod-level-count {
  text-align: right;
}

.lod-level-count strong {
  color: #0f172a;
  font-family: 'Fira Code', monospace;
  font-size: 0.72rem;
}

.lod-demo {
  background: #07111f;
  min-width: 0;
  overflow: hidden;
  position: relative;
}

.lod-scene,
.lod-scene canvas {
  display: block;
  height: 100%;
  inset: 0;
  position: absolute;
  width: 100%;
}

.lod-demo-heading {
  align-items: flex-start;
  color: #e2e8f0;
  display: flex;
  font-size: 0.7rem;
  justify-content: space-between;
  left: 1rem;
  pointer-events: none;
  position: absolute;
  right: 1rem;
  top: 0.9rem;
  z-index: 2;
}

.lod-demo-heading > div:first-child > span {
  color: #67e8f9;
  display: block;
  font-size: 0.62rem;
  font-weight: 900;
  letter-spacing: 0.09em;
  margin-bottom: 0.2rem;
}

.lod-active-level {
  align-items: baseline;
  background: rgba(15, 23, 42, 0.82);
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 0.55rem;
  display: flex;
  gap: 0.35rem;
  padding: 0.36rem 0.48rem;
}

.lod-active-level > span {
  color: #94a3b8;
  font-size: 0.52rem;
  font-weight: 800;
  letter-spacing: 0.07em;
}

.lod-active-level strong {
  color: #67e8f9;
  font-size: 0.68rem;
}

.lod-active-level small {
  color: #cbd5e1;
  font-family: 'Fira Code', monospace;
  font-size: 0.56rem;
}

.lod-shading-toggle {
  align-items: center;
  background: rgba(15, 23, 42, 0.82);
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 0.5rem;
  color: #cbd5e1;
  cursor: pointer;
  display: flex;
  font-size: 0.62rem;
  gap: 0.4rem;
  padding: 0.36rem 0.48rem;
  position: absolute;
  right: 1rem;
  top: 3.4rem;
  z-index: 2;
}

.lod-shading-toggle input {
  accent-color: #22d3ee;
  cursor: pointer;
}

.lod-shading-toggle:focus-within {
  outline: 2px solid #93c5fd;
  outline-offset: 2px;
}

.lod-control {
  align-items: center;
  background: rgba(15, 23, 42, 0.92);
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 0.65rem;
  bottom: 0.8rem;
  color: #94a3b8;
  display: grid;
  font-size: 0.58rem;
  font-weight: 800;
  gap: 0.5rem;
  grid-template-columns: auto 1fr auto auto;
  left: 1rem;
  letter-spacing: 0.06em;
  padding: 0.5rem 0.65rem;
  position: absolute;
  right: 1rem;
  z-index: 2;
}

.lod-control input {
  accent-color: #22d3ee;
  cursor: pointer;
  min-width: 0;
  width: 100%;
}

.lod-control output {
  color: #67e8f9;
  font-family: 'Fira Code', monospace;
  font-size: 0.62rem;
  letter-spacing: 0;
  min-width: 5.7rem;
  text-align: right;
}
</style>

<!--
- Goal: avoid drawing detail that cannot be seen. Show: move the distance slider from near to far once. Use: multiple useful resolutions of an object. Limit: all levels remain in memory, and switching can pop.
- The level buttons are optional shortcuts; use the distance slider for the planned demonstration.
- `THREE.LOD` stores several representations of the same object, ordered by camera distance.
- The renderer calls `lod.update(camera)` automatically and keeps only the matching level visible.
- This demo swaps among 2,420, 320, and 20 triangle icosahedrons at distances 7 and 10.5.
- At a distance, the low-detail silhouette is close enough while requiring far less vertex processing and triangle setup.
- Here one level is visible, with one opaque material and no extra passes, so the object makes one draw in the visible pass. This is not a general draw-call guarantee for LOD.
- Smooth shading changes how normals interpolate across those triangles; it does not change the active geometry or triangle count.
- All geometries remain in memory; LOD trades additional memory and authoring work for lower rendering cost.
- Real thresholds should be chosen from screen size and profiling, not arbitrary round numbers.
- Hard switches can pop; use sensible thresholds, hysteresis, or fading when the transition is noticeable.
- Reduced-motion preferences stop the decorative rotation without disabling the distance control.
-->

---
class: demo-slide texture-size-slide
---

# Textures: Upload the Detail You Need

<div class="demo-kind">Illustration</div>
<div class="demo-lead">A small on-screen image can still use a large texture allocation.</div>

<div class="texture-stage demo-stage demo-dark">
  <div ref="sceneHost" class="texture-scene" role="img" aria-label="The same artwork rendered from 256 and 2048 pixel textures at an identical screen size"></div>
  <div class="texture-divider" aria-hidden="true"></div>
  <section class="texture-label texture-label--left">
    <div class="texture-eyebrow">SMALL SOURCE</div>
    <h2>256 × 256</h2>
    <div class="texture-stats">
      <strong>≈ 0.33 MiB</strong>
    </div>
  </section>
  <section class="texture-label texture-label--right">
    <div class="texture-eyebrow">LARGE SOURCE</div>
    <h2>2048 × 2048</h2>
    <div class="texture-stats">
      <strong>≈ 21.3 MiB</strong>
      <b>64× texels</b>
    </div>
  </section>
</div>

<label class="texture-zoom-control demo-control" for="texture-zoom">
  <div>
    <span>Try zooming in</span>
    <strong>Same display size.</strong>
  </div>
  <input
    id="texture-zoom"
    v-model.number="textureZoom"
    type="range"
    min="1"
    max="8"
    step="0.1"
  />
  <output>{{ textureZoom.toFixed(1) }}× zoom</output>
</label>

<div class="demo-takeaway">Size for the closest useful view. Estimates here assume RGBA8 plus mipmaps.</div>

<script setup>
import * as THREE from 'three'
import { nextTick, ref, watch } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'

const sceneHost = ref(null)
const textureZoom = ref(1)
const sourceSizes = [256, 2048]

let renderer
let leftScene
let rightScene
let leftCamera
let rightCamera
let geometry
let textures = []
let materials = []
let resizeObserver

function createArtwork(size) {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size

  const context = canvas.getContext('2d')
  context.scale(size / 512, size / 512)

  const background = context.createLinearGradient(0, 0, 512, 512)
  background.addColorStop(0, '#071b35')
  background.addColorStop(0.55, '#123f67')
  background.addColorStop(1, '#0f766e')
  context.fillStyle = background
  context.fillRect(0, 0, 512, 512)

  for (let coordinate = 0; coordinate <= 512; coordinate += 16) {
    const major = coordinate % 64 === 0
    context.strokeStyle = major ? 'rgba(103, 232, 249, 0.28)' : 'rgba(148, 163, 184, 0.1)'
    context.lineWidth = major ? 1.4 : 0.6
    context.beginPath()
    context.moveTo(coordinate, 0)
    context.lineTo(coordinate, 512)
    context.moveTo(0, coordinate)
    context.lineTo(512, coordinate)
    context.stroke()
  }

  context.strokeStyle = '#67e8f9'
  context.fillStyle = '#f8fafc'
  context.lineWidth = 2
  context.translate(256, 256)
  ;[24, 52, 96, 154].forEach((radius) => {
    context.beginPath()
    context.arc(0, 0, radius, 0, Math.PI * 2)
    context.stroke()
  })
  context.beginPath()
  context.moveTo(-190, 38)
  context.bezierCurveTo(-92, -118, 72, 126, 190, -54)
  context.strokeStyle = '#fbbf24'
  context.lineWidth = 3
  context.stroke()

  for (let index = 0; index < 120; index++) {
    const x = (index * 83) % 480 - 240
    const y = (index * 137) % 480 - 240
    context.fillStyle = index % 4 === 0 ? '#f472b6' : 'rgba(226, 232, 240, 0.6)'
    context.fillRect(x, y, index % 4 === 0 ? 3 : 1.5, index % 4 === 0 ? 3 : 1.5)
  }

  context.fillStyle = '#f8fafc'
  context.font = '700 15px sans-serif'
  context.textAlign = 'center'
  context.fillText('TEXTURE DETAIL', 0, -7)
  context.fillStyle = '#67e8f9'
  context.font = '600 10px monospace'
  context.fillText('CENTER SAMPLE', 0, 12)

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.magFilter = THREE.LinearFilter
  texture.minFilter = THREE.LinearMipmapLinearFilter
  return texture
}

function createView(texture, background) {
  const view = new THREE.Scene()
  view.background = new THREE.Color(background)
  const material = new THREE.MeshBasicMaterial({ map: texture })
  materials.push(material)
  view.add(new THREE.Mesh(geometry, material))
  return view
}

function updateCamera(camera, width, height) {
  const halfHeight = 1.5
  const halfWidth = halfHeight * width / height
  camera.left = -halfWidth
  camera.right = halfWidth
  camera.top = halfHeight
  camera.bottom = -halfHeight
  camera.updateProjectionMatrix()
}

function renderViews() {
  if (!renderer || !sceneHost.value || !leftScene || !rightScene) return

  const width = sceneHost.value.clientWidth
  const height = sceneHost.value.clientHeight
  const leftWidth = Math.floor(width / 2)
  if (!width || !height || !leftWidth) return

  renderer.setScissorTest(true)
  renderer.setViewport(0, 0, leftWidth, height)
  renderer.setScissor(0, 0, leftWidth, height)
  renderer.render(leftScene, leftCamera)
  renderer.setViewport(leftWidth, 0, width - leftWidth, height)
  renderer.setScissor(leftWidth, 0, width - leftWidth, height)
  renderer.render(rightScene, rightCamera)
  renderer.setScissorTest(false)
}

function resize() {
  if (!renderer || !sceneHost.value || !leftCamera || !rightCamera) return

  const width = sceneHost.value.clientWidth
  const height = sceneHost.value.clientHeight
  if (!width || !height) return

  renderer.setSize(width, height, false)
  const leftWidth = Math.floor(width / 2)
  updateCamera(leftCamera, leftWidth, height)
  updateCamera(rightCamera, width - leftWidth, height)
  renderViews()
}

function applyZoom(zoom) {
  const repeat = 1 / zoom
  const offset = (1 - repeat) / 2
  textures.forEach((texture) => {
    texture.repeat.set(repeat, repeat)
    texture.offset.set(offset, offset)
  })
  renderViews()
}

function createScene() {
  if (renderer || !sceneHost.value) return

  geometry = new THREE.PlaneGeometry(2, 2)
  textures = sourceSizes.map(createArtwork)
  leftScene = createView(textures[0], 0x081426)
  rightScene = createView(textures[1], 0x0a1d2d)
  leftCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
  rightCamera = leftCamera.clone()
  leftCamera.position.z = rightCamera.position.z = 2

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.domElement.setAttribute('aria-hidden', 'true')
  sceneHost.value.appendChild(renderer.domElement)

  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(sceneHost.value)
  applyZoom(textureZoom.value)
  resize()
}

function disposeScene() {
  resizeObserver?.disconnect()
  geometry?.dispose()
  materials.forEach((material) => material.dispose())
  textures.forEach((texture) => texture.dispose())
  renderer?.dispose()
  renderer?.domElement.remove()

  textures = []
  materials = []
  renderer = leftScene = rightScene = leftCamera = rightCamera = geometry = resizeObserver = undefined
}

watch(textureZoom, applyZoom)
onSlideEnter(async () => {
  await nextTick()
  createScene()
})
onSlideLeave(disposeScene)
</script>

<style>
.texture-size-slide {
  background: #f8fafc;
  color: #0f172a;
  justify-content: flex-start;
  overflow: hidden;
}

.texture-size-slide h1 {
  color: #0f172a;
}

.texture-claim {
  color: #334155;
  font-size: 1.45rem;
  letter-spacing: 0.01em;
  margin-top: 4.35rem;
  text-align: center;
}

.texture-claim strong {
  color: #2563eb;
}

.texture-stage {
  background: #081426;
  border: 1px solid #1e293b;
  border-radius: 1rem;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.18);
  flex: 1;
  margin-top: 1rem;
  min-height: 17.5rem;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.texture-scene,
.texture-scene canvas {
  display: block;
  height: 100%;
  inset: 0;
  position: absolute;
  width: 100%;
}

.texture-divider {
  background: rgba(148, 163, 184, 0.3);
  bottom: 0;
  left: 50%;
  position: absolute;
  top: 0;
  width: 1px;
  z-index: 1;
}

.texture-label {
  color: #f8fafc;
  pointer-events: none;
  position: absolute;
  top: 0.9rem;
  width: calc(50% - 2.4rem);
  z-index: 2;
}

.texture-label--left {
  left: 1.2rem;
}

.texture-label--right {
  left: calc(50% + 1.2rem);
}

.texture-eyebrow {
  color: #cbd5e1;
  font-size: 0.62rem;
  font-weight: 900;
  letter-spacing: 0.09em;
}

.texture-label h2 {
  color: #fff;
  font-size: 1.05rem;
  margin: 0.12rem 0 0;
}

.texture-stats {
  align-items: center;
  display: flex;
  gap: 0.35rem;
  position: absolute;
  right: 0;
  top: 0;
}

.texture-stats span,
.texture-stats strong,
.texture-stats b {
  background: rgba(15, 23, 42, 0.78);
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 0.4rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.55rem;
  font-weight: 500;
  padding: 0.27rem 0.36rem;
}

.texture-stats strong {
  color: #67e8f9;
}

.texture-stats b {
  border-color: rgba(251, 191, 36, 0.6);
  color: #fbbf24;
}

.texture-crop {
  bottom: 0.65rem;
  color: #94a3b8;
  font-family: 'Fira Code', monospace;
  font-size: 0.58rem;
  pointer-events: none;
  position: absolute;
  z-index: 2;
}

.texture-crop--left {
  left: 1.2rem;
}

.texture-crop--right {
  left: calc(50% + 1.2rem);
}

.texture-zoom-control {
  align-items: center;
  align-self: center;
  background: #fff;
  border: 1px solid #cbd5e1;
  border-radius: 0.7rem;
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.12);
  display: grid;
  gap: 0.75rem;
  grid-template-columns: 15rem 15rem 5rem;
  margin-top: 0.65rem;
  padding: 0.48rem 0.7rem;
}

.texture-zoom-control > div span,
.texture-zoom-control > div strong {
  display: block;
}

.texture-zoom-control > div span {
  color: #64748b;
  font-size: 0.52rem;
  font-weight: 900;
  letter-spacing: 0.08em;
}

.texture-zoom-control > div strong {
  color: #334155;
  font-size: 0.65rem;
  margin-top: 0.05rem;
}

.texture-zoom-control input {
  accent-color: #2563eb;
  cursor: pointer;
  width: 100%;
}

.texture-zoom-control output {
  color: #2563eb;
  font-family: 'Fira Code', monospace;
  font-size: 0.64rem;
  font-weight: 700;
  text-align: right;
}
</style>

<!--
- Goal: avoid oversized texture uploads. Show: move Zoom from 1× toward 8× once. Use: enough source detail for the largest useful view. Limit: too small a source loses detail when enlarged.
- Both panels render the same generated artwork at the same on-screen size. Memory figures are format-based estimates, not profiler measurements or download sizes.
- The sources are real 256 by 256 and 2048 by 2048 canvas textures: eight times wider means sixty-four times as many texels.
- An uncompressed RGBA texture costs roughly `width × height × 4` bytes on the GPU; mipmaps add about one third.
- That is approximately 0.33 MiB versus 21.3 MiB here, even though the normal view looks nearly identical.
- Zoom in to show the use case where the larger source finally preserves visible detail.
- Choose dimensions from the texture's largest expected screen footprint, including device pixel ratio and any user zoom.
- Resize source images before upload; a visually small mesh does not make its source texture cheap.
- GPU-compressed formats change the exact memory cost, but right-sizing remains the first and simplest optimization.
- Dispose replaced textures so their GPU allocations can be released.
-->

---
class: demo-slide particles-slide
---

# Points: Many Marks, One Object

<div class="demo-kind">Stylized illustration</div>
<div class="demo-lead">Draw up to 100,000 particles without creating a mesh for each one.</div>

<div class="particles-stage demo-stage">
  <aside class="particles-explainer">
    <div class="particles-kicker">GPU PARTICLE SYSTEM</div>
    <h2>No mesh per particle</h2>
    <div class="particles-code demo-code">
      <span><b>const</b> cloud = <b>new</b> THREE.Points(</span>
      <span class="particles-code-indent">geometry, particleMaterial</span>
      <span>)</span>
      <span>geometry.setDrawRange(<i>0</i>, count)</span>
    </div>
    <p class="demo-caption">One draw for the cloud in this pass. Other scene objects add draws.</p>
  </aside>
  <section
    class="particles-demo demo-dark"
    @pointermove="handlePointerMove"
    @pointerleave="resetPointer"
  >
    <div ref="sceneHost" class="particles-scene" role="img" aria-label="A companion star feeding GPU particles into a swirling black hole accretion disk"></div>
    <div class="particles-demo-heading">
      <div>
        <span>STYLIZED ACCRETION FLOW</span>
        Companion star → stream → black hole
      </div>
    </div>
    <label class="particles-control" for="particle-count">
      <span>1K</span>
      <input
        id="particle-count"
        v-model.number="particleCount"
        type="range"
        min="1000"
        max="100000"
        step="1000"
      />
      <span>100K</span>
      <output>{{ particleCount.toLocaleString() }} particles</output>
    </label>
  </section>
</div>

<div class="demo-takeaway">Try 50K → 100K particles. Useful for small marks; transparency can still be expensive.</div>

<script setup>
import * as THREE from 'three'
import { nextTick, ref, watch } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'

const sceneHost = ref(null)
const particleCount = ref(50000)
const maxParticleCount = 100000

const particleVertexShader = `
  attribute float aPhase;
  uniform float uPixelRatio;
  uniform float uTime;
  varying float vAlpha;
  varying vec3 vColor;

  const float PI = 3.14159265;
  const float TWO_PI = 6.2831853;

  vec3 pointInSphere(vec3 seed, float radius) {
    float longitude = seed.x * TWO_PI;
    float vertical = seed.y * 2.0 - 1.0;
    float horizontal = sqrt(max(0.0, 1.0 - vertical * vertical));
    float distanceFromCenter = radius * pow(seed.z, 1.0 / 3.0);
    return vec3(
      cos(longitude) * horizontal,
      vertical,
      sin(longitude) * horizontal
    ) * distanceFromCenter;
  }

  void main() {
    vec3 seed = position;
    float life = fract(aPhase + uTime * (0.033 + seed.x * 0.012));
    float progress = life;

    float diskFormation = smoothstep(0.18, 0.42, progress);
    float sourceInfluence = 1.0 - smoothstep(0.0, 0.30, progress);
    float inwardProgress = 0.24 * progress + 0.76 * pow(progress, 1.55);
    float radius = mix(3.15, 0.30, inwardProgress);
    radius += (seed.z - 0.5) * 0.22
      * (1.0 - progress) * diskFormation;

    float turns = 0.04 * progress + 5.46 * progress * progress * progress;
    float speedVariation = mix(
      1.0,
      mix(0.92, 1.08, seed.x),
      smoothstep(0.24, 0.55, progress)
    );
    float angle = PI + TWO_PI * turns * speedVariation;

    vec3 particlePosition = vec3(
      cos(angle) * radius,
      (seed.y - 0.5) * 0.20 * (1.0 - progress) * diskFormation,
      sin(angle) * radius
    );
    particlePosition += pointInSphere(seed, 0.46) * sourceInfluence;
    particlePosition.y += 0.30 * sourceInfluence;

    vec3 color = mix(
      vec3(1.0, 0.78, 0.28),
      vec3(1.0, 0.28, 0.03),
      smoothstep(0.04, 0.34, progress)
    );
    vColor = mix(
      color,
      vec3(1.0, 0.96, 0.72),
      smoothstep(0.62, 1.0, progress)
    );

    float sourceOpacity = mix(0.70, 1.0, smoothstep(0.14, 0.40, progress));
    vAlpha = sourceOpacity * smoothstep(0.0, 0.025, life)
      * (1.0 - smoothstep(0.94, 1.0, life));
    vec4 viewPosition = modelViewMatrix * vec4(particlePosition, 1.0);
    gl_PointSize = mix(2.0, 4.5, seed.x) * uPixelRatio
      * (6.0 / max(1.0, -viewPosition.z));
    gl_Position = projectionMatrix * viewPosition;
  }
`

const particleFragmentShader = `
  uniform float uOpacity;
  varying float vAlpha;
  varying vec3 vColor;

  void main() {
    float distanceToCenter = length(gl_PointCoord - vec2(0.5));
    float circle = 1.0 - smoothstep(0.18, 0.5, distanceToCenter);
    float alpha = circle * vAlpha * uOpacity;
    if (alpha < 0.01) discard;
    gl_FragColor = vec4(vColor, alpha);
  }
`

let renderer
let scene
let camera
let systemGroup
let particleGeometry
let particleMaterial
let points
let starGeometry
let starMaterial
let blackHoleGeometry
let blackHoleMaterial
let ringGeometry
let ringMaterial
let glowTexture
let glowMaterial
let animationFrame
let resizeObserver
let startedAt
let reduceMotion = false
let targetRotationX = 0
let targetRotationY = 0

function randomGenerator(seed) {
  let state = seed >>> 0
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0
    return state / 4294967296
  }
}

function createGlowTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = 128
  const context = canvas.getContext('2d')
  const glow = context.createRadialGradient(64, 64, 2, 64, 64, 64)
  glow.addColorStop(0, 'rgba(255, 255, 235, 1)')
  glow.addColorStop(0.18, 'rgba(251, 191, 36, 0.95)')
  glow.addColorStop(0.5, 'rgba(249, 115, 22, 0.28)')
  glow.addColorStop(1, 'rgba(249, 115, 22, 0)')
  context.fillStyle = glow
  context.fillRect(0, 0, 128, 128)
  return new THREE.CanvasTexture(canvas)
}

function createParticleGeometry() {
  const random = randomGenerator(20250614)
  const positions = new Float32Array(maxParticleCount * 3)
  const phases = new Float32Array(maxParticleCount)

  for (let index = 0; index < maxParticleCount; index++) {
    const offset = index * 3
    positions[offset] = random()
    positions[offset + 1] = random()
    positions[offset + 2] = random()
    phases[index] = random()
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1))
  geometry.setDrawRange(0, particleCount.value)
  return geometry
}

function particleOpacity(count) {
  return Math.min(0.85, 0.45 * Math.sqrt(50000 / count))
}

function applyParticleCount(count) {
  particleGeometry?.setDrawRange(0, count)
  if (particleMaterial) particleMaterial.uniforms.uOpacity.value = particleOpacity(count)
}

function handlePointerMove(event) {
  const bounds = event.currentTarget.getBoundingClientRect()
  const x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1
  const y = ((event.clientY - bounds.top) / bounds.height) * 2 - 1
  targetRotationY = x * 0.22
  targetRotationX = -y * 0.12
}

function resetPointer() {
  targetRotationX = 0
  targetRotationY = 0
}

function resize() {
  if (!renderer || !camera || !sceneHost.value || !particleMaterial) return

  const width = sceneHost.value.clientWidth
  const height = sceneHost.value.clientHeight
  if (!width || !height) return

  renderer.setSize(width, height, false)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  particleMaterial.uniforms.uPixelRatio.value = renderer.getPixelRatio()
}

function animate(time = performance.now()) {
  if (!renderer || !scene || !camera || !systemGroup || !particleMaterial) return

  animationFrame = requestAnimationFrame(animate)
  if (!reduceMotion) particleMaterial.uniforms.uTime.value = (time - startedAt) / 1000
  const easing = reduceMotion ? 1 : 0.08
  systemGroup.rotation.x += (targetRotationX - systemGroup.rotation.x) * easing
  systemGroup.rotation.y += (targetRotationY - systemGroup.rotation.y) * easing
  renderer.render(scene, camera)
}

function createScene() {
  if (renderer || !sceneHost.value) return

  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x020617)
  camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100)
  camera.position.set(0, 2.25, 6.2)
  camera.lookAt(-0.45, 0, 0)

  systemGroup = new THREE.Group()
  scene.add(systemGroup)

  particleGeometry = createParticleGeometry()
  particleMaterial = new THREE.ShaderMaterial({
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    fragmentShader: particleFragmentShader,
    transparent: true,
    uniforms: {
      uOpacity: { value: particleOpacity(particleCount.value) },
      uPixelRatio: { value: 1 },
      uTime: { value: 0 },
    },
    vertexShader: particleVertexShader,
  })
  points = new THREE.Points(particleGeometry, particleMaterial)
  points.frustumCulled = false
  systemGroup.add(points)

  glowTexture = createGlowTexture()
  glowTexture.colorSpace = THREE.SRGBColorSpace
  glowMaterial = new THREE.SpriteMaterial({
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    map: glowTexture,
    transparent: true,
  })
  const starGlow = new THREE.Sprite(glowMaterial)
  starGlow.position.set(-3.15, 0.3, 0)
  starGlow.scale.set(1.5, 1.5, 1)
  systemGroup.add(starGlow)

  starGeometry = new THREE.SphereGeometry(0.34, 32, 16)
  starMaterial = new THREE.MeshBasicMaterial({ color: 0xffd166 })
  const star = new THREE.Mesh(starGeometry, starMaterial)
  star.position.copy(starGlow.position)
  systemGroup.add(star)

  blackHoleGeometry = new THREE.SphereGeometry(0.3, 32, 16)
  blackHoleMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 })
  systemGroup.add(new THREE.Mesh(blackHoleGeometry, blackHoleMaterial))

  ringGeometry = new THREE.TorusGeometry(0.38, 0.018, 8, 64)
  ringMaterial = new THREE.MeshBasicMaterial({ color: 0xfbbf24 })
  const eventHorizonRing = new THREE.Mesh(ringGeometry, ringMaterial)
  eventHorizonRing.rotation.x = Math.PI / 2
  systemGroup.add(eventHorizonRing)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.domElement.setAttribute('aria-hidden', 'true')
  sceneHost.value.appendChild(renderer.domElement)

  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(sceneHost.value)
  resize()
  startedAt = performance.now()
  animate()
}

function disposeScene() {
  if (animationFrame) cancelAnimationFrame(animationFrame)
  resizeObserver?.disconnect()
  particleGeometry?.dispose()
  particleMaterial?.dispose()
  starGeometry?.dispose()
  starMaterial?.dispose()
  blackHoleGeometry?.dispose()
  blackHoleMaterial?.dispose()
  ringGeometry?.dispose()
  ringMaterial?.dispose()
  glowTexture?.dispose()
  glowMaterial?.dispose()
  renderer?.dispose()
  renderer?.domElement.remove()

  targetRotationX = targetRotationY = 0
  renderer = scene = camera = systemGroup = particleGeometry = particleMaterial = points = starGeometry = starMaterial = blackHoleGeometry = blackHoleMaterial = ringGeometry = ringMaterial = glowTexture = glowMaterial = animationFrame = resizeObserver = startedAt = undefined
}

watch(particleCount, applyParticleCount)
onSlideEnter(async () => {
  await nextTick()
  createScene()
})
onSlideLeave(disposeScene)
</script>

<style>
.particles-slide {
  background: #f8fafc;
  color: #0f172a;
  justify-content: flex-start;
  overflow: hidden;
}

.particles-slide h1 {
  color: #0f172a;
}

.particles-claim {
  color: #334155;
  font-size: 1.45rem;
  letter-spacing: 0.01em;
  margin-top: 4.35rem;
  text-align: center;
}

.particles-claim strong {
  color: #2563eb;
}

.particles-stage {
  border: 1px solid #1e293b;
  border-radius: 1rem;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.18);
  display: grid;
  flex: 1;
  grid-template-columns: 28% 72%;
  margin-top: 1rem;
  min-height: 21rem;
  overflow: hidden;
  width: 100%;
}

.particles-explainer {
  background: #fff;
  box-sizing: border-box;
  padding: 1.1rem 1rem;
}

.particles-kicker {
  color: #64748b;
  font-size: 0.62rem;
  font-weight: 900;
  letter-spacing: 0.09em;
}

.particles-explainer h2 {
  color: #0f172a;
  font-size: 1.1rem;
  margin: 0.25rem 0 0;
}

.particles-code {
  background: #0f172a;
  border-radius: 0.65rem;
  color: #dbeafe;
  font-family: 'Fira Code', monospace;
  font-size: 0.57rem;
  line-height: 1.55;
  margin-top: 0.8rem;
  padding: 0.65rem 0.7rem;
}

.particles-code span {
  display: block;
}

.particles-code b {
  color: #c084fc;
  font-weight: 500;
}

.particles-code i {
  color: #fdba74;
  font-style: normal;
}

.particles-code-indent {
  padding-left: 0.75rem;
}

.particles-fact {
  align-items: baseline;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  gap: 0.45rem;
  padding: 0.72rem 0.2rem;
}

.particles-fact strong {
  color: #2563eb;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
}

.particles-fact span {
  color: #64748b;
  font-size: 0.62rem;
}

.particles-demo {
  background: #020617;
  cursor: move;
  min-width: 0;
  overflow: hidden;
  position: relative;
  touch-action: none;
}

.particles-scene,
.particles-scene canvas {
  display: block;
  height: 100%;
  inset: 0;
  position: absolute;
  width: 100%;
}

.particles-demo-heading {
  align-items: flex-start;
  color: #e2e8f0;
  display: flex;
  font-size: 0.68rem;
  justify-content: space-between;
  left: 1rem;
  pointer-events: none;
  position: absolute;
  right: 1rem;
  top: 0.9rem;
  z-index: 2;
}

.particles-demo-heading > div:first-child > span {
  color: #fbbf24;
  display: block;
  font-size: 0.62rem;
  font-weight: 900;
  letter-spacing: 0.09em;
  margin-bottom: 0.2rem;
}

.particles-demo-badges {
  display: flex;
  gap: 0.35rem;
}

.particles-demo-badges span,
.particles-demo-badges strong {
  background: rgba(15, 23, 42, 0.82);
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 0.4rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.55rem;
  font-weight: 500;
  padding: 0.28rem 0.38rem;
}

.particles-demo-badges strong {
  color: #67e8f9;
}

.particles-pointer-hint {
  bottom: 3.8rem;
  color: #64748b;
  font-size: 0.58rem;
  left: 1rem;
  pointer-events: none;
  position: absolute;
  z-index: 2;
}

.particles-control {
  align-items: center;
  background: rgba(15, 23, 42, 0.92);
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 0.65rem;
  bottom: 0.8rem;
  color: #94a3b8;
  display: grid;
  font-size: 0.58rem;
  font-weight: 800;
  gap: 0.5rem;
  grid-template-columns: auto 1fr auto 7.5rem;
  left: 1rem;
  letter-spacing: 0.05em;
  padding: 0.5rem 0.65rem;
  position: absolute;
  right: 1rem;
  z-index: 2;
}

.particles-control input {
  accent-color: #f59e0b;
  cursor: pointer;
  min-width: 0;
  width: 100%;
}

.particles-control output {
  color: #fbbf24;
  font-family: 'Fira Code', monospace;
  font-size: 0.62rem;
  letter-spacing: 0;
  text-align: right;
}
</style>

<!--
- Goal: render many small marks with little per-particle setup. Show: move the particle count from 50K to 100K once. Use: small points and procedural effects. Limit: transparency/overdraw and hardware point-size limits still matter; this is not a benchmark.
- This is a stylized accretion flow, not an N-body gravity simulation or a visualization of measured orbital positions.
- Particles originate throughout the companion star and follow one continuous inward spiral, eliminating a separate stream-to-disk join.
- Their source offsets collapse gradually into the stream; slightly different orbital rates then shear it into a disk.
- Angular speed increases toward the black hole, producing tighter and faster inner orbits.
- The CPU allocates the maximum-size attributes once; particle motion then needs only a `uTime` uniform update each frame.
- The vertex shader computes every particle's current position from its phase and time.
- The count slider calls `geometry.setDrawRange()`; it does not rebuild or re-upload the buffers.
- The particle cloud uses one THREE.Points object and one material, making one particle draw per visible pass here. The star, glow sprite, black-hole sphere, and ring add separate scene draws. The entire scene is not one draw call.
- The fragment shader turns each square point primitive into a soft circle and uses additive blending for the glow.
- Alpha blending and overdraw can become the bottleneck even when draw calls stay low.
- Use instanced quads instead when particles need larger images, independent rotation, or more predictable sizing.
- Reduced-motion preferences freeze the flow while preserving count and pointer controls.
-->

---
class: demo-slide gpu-pick-slide
---

# GPU Picking: Find the Record

<div class="demo-kind">Synthetic example</div>
<div class="demo-lead">Draw IDs offscreen. Read the cursor pixel to find its record.</div>

<div class="gpu-pick-shell demo-stage">
  <aside class="gpu-pick-explainer">
    <div class="gpu-pick-kicker">ID → record → details</div>
    <h2>Encode IDs as colors</h2>
    <div class="gpu-pick-code demo-code" aria-label="Three.js GPU picking code">
      <span>mesh.material = <b>idMaterial</b></span>
      <span>renderer.setRenderTarget(ids)</span>
      <span>renderer.render(scene, camera)</span>
      <span>renderer.readRenderTargetPixels(…)</span>
    </div>
    <div class="gpu-pick-decode" aria-live="polite">
      <span>CURSOR PIXEL</span>
      <div>
        <i :style="{ backgroundColor: gpuPickColor }"></i>
        <code>{{ gpuPickRgb }}</code>
      </div>
      <strong>{{ gpuPickSelectedId ? `ID ${gpuPickSelectedId.toLocaleString()}` : 'background' }}</strong>
      <small>{{ gpuPickRecordLabel }}</small>
    </div>
  </aside>
  <section
    ref="gpuPickStageRef"
    class="gpu-pick-demo demo-dark"
    :class="{ 'is-locked': gpuPickLocked }"
    tabindex="0"
    aria-label="Interactive GPU picking demo. Move the pointer or use arrow keys to scan the data terrain. Click, Enter, or Space to lock a selection."
    @pointermove="handleGpuPickPointer"
    @pointerleave="hideGpuPickLens"
    @click="toggleGpuPickLock"
    @focus="showGpuPickLens"
    @keydown="handleGpuPickKeydown"
  >
    <div ref="gpuPickHostRef" class="gpu-pick-scene" aria-hidden="true"></div>
    <div class="gpu-pick-heading">
      <div>
        <span>VISIBLE PASS</span>
        20,000 synthetic marks
      </div>
    </div>
    <div
      ref="gpuPickLensRef"
      class="gpu-pick-lens"
      :class="{ 'is-visible': gpuPickLensVisible }"
      aria-hidden="true"
    >
      <canvas ref="gpuPickLensCanvasRef" width="25" height="25"></canvas>
      <i class="gpu-pick-crosshair"></i>
      <span>ID BUFFER</span>
    </div>
    <div class="gpu-pick-hint">
      {{ gpuPickLocked ? 'Selection locked · click or Enter to resume' : 'Move or use arrows · click or Enter to select' }}
    </div>
  </section>
</div>

<div class="demo-takeaway">Try selecting one mark. Use GPU picking for large or custom scenes; readback can stall.</div>

<script setup>
import * as THREE from 'three'
import { nextTick, ref } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'

const gpuPickStageRef = ref(null)
const gpuPickHostRef = ref(null)
const gpuPickLensRef = ref(null)
const gpuPickLensCanvasRef = ref(null)
const gpuPickSelectedId = ref(0)
const gpuPickRgb = ref('rgb(0, 0, 0)')
const gpuPickColor = ref('#000000')
const gpuPickRecordLabel = ref('Move over the terrain')
const gpuPickLocked = ref(false)
const gpuPickLensVisible = ref(false)

const gpuPickCount = 20000
const gpuPickColumns = 160
const gpuPickRows = 125
const gpuPickSampleSize = 25

const gpuPickIdVertexShader = `
  attribute vec3 aPickColor;
  varying vec3 vPickColor;

  void main() {
    vPickColor = aPickColor;
    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix
      * vec4(position, 1.0);
  }
`

const gpuPickIdFragmentShader = `
  varying vec3 vPickColor;

  void main() {
    gl_FragColor = vec4(vPickColor, 1.0);
  }
`

let gpuPickRenderer
let gpuPickScene
let gpuPickCamera
let gpuPickVisibleMesh
let gpuPickMarker
let gpuPickGrid
let gpuPickCubeGeometry
let gpuPickVisibleMaterial
let gpuPickIdMaterial
let gpuPickMarkerGeometry
let gpuPickMarkerMaterial
let gpuPickTarget
let gpuPickResizeObserver
let gpuPickFrame
let gpuPickImageData
const gpuPickPixels = new Uint8Array(gpuPickSampleSize * gpuPickSampleSize * 4)
let gpuPickRecords = []
let gpuPickColorToId = new Map()
let gpuPickPointerX = 0
let gpuPickPointerY = 0

function clampGpuPick(value, minimum, maximum) {
  return Math.max(minimum, Math.min(maximum, value))
}

function positionGpuPickLens() {
  if (!gpuPickStageRef.value || !gpuPickLensRef.value) return
  const halfLens = 58
  const x = clampGpuPick(gpuPickPointerX, halfLens, gpuPickStageRef.value.clientWidth - halfLens)
  const y = clampGpuPick(gpuPickPointerY, halfLens, gpuPickStageRef.value.clientHeight - halfLens)
  gpuPickLensRef.value.style.left = `${x}px`
  gpuPickLensRef.value.style.top = `${y}px`
}

function setGpuPickPointer(x, y) {
  if (!gpuPickStageRef.value) return
  gpuPickPointerX = clampGpuPick(x, 0, gpuPickStageRef.value.clientWidth)
  gpuPickPointerY = clampGpuPick(y, 0, gpuPickStageRef.value.clientHeight)
  gpuPickLensVisible.value = true
  positionGpuPickLens()
  scheduleGpuPick()
}

function handleGpuPickPointer(event) {
  if (gpuPickLocked.value || !gpuPickStageRef.value) return
  const bounds = gpuPickStageRef.value.getBoundingClientRect()
  setGpuPickPointer(
    ((event.clientX - bounds.left) / bounds.width) * gpuPickStageRef.value.clientWidth,
    ((event.clientY - bounds.top) / bounds.height) * gpuPickStageRef.value.clientHeight,
  )
}

function hideGpuPickLens() {
  if (!gpuPickLocked.value) gpuPickLensVisible.value = false
}

function showGpuPickLens() {
  if (!gpuPickStageRef.value) return
  if (!gpuPickPointerX && !gpuPickPointerY) {
    gpuPickPointerX = gpuPickStageRef.value.clientWidth * 0.58
    gpuPickPointerY = gpuPickStageRef.value.clientHeight * 0.55
  }
  gpuPickLensVisible.value = true
  positionGpuPickLens()
  scheduleGpuPick()
}

function toggleGpuPickLock() {
  showGpuPickLens()
  gpuPickLocked.value = !gpuPickLocked.value
}

function handleGpuPickKeydown(event) {
  const movement = 14
  const offsets = {
    ArrowLeft: [-movement, 0],
    ArrowRight: [movement, 0],
    ArrowUp: [0, -movement],
    ArrowDown: [0, movement],
  }

  if (offsets[event.key]) {
    event.preventDefault()
    gpuPickLocked.value = false
    setGpuPickPointer(
      gpuPickPointerX + offsets[event.key][0],
      gpuPickPointerY + offsets[event.key][1],
    )
  } else if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    toggleGpuPickLock()
  }
}

function scheduleGpuPick() {
  if (gpuPickFrame || !gpuPickRenderer) return
  gpuPickFrame = requestAnimationFrame(() => {
    gpuPickFrame = undefined
    renderGpuPickTarget()
  })
}

function drawGpuPickLens(pixels) {
  const canvas = gpuPickLensCanvasRef.value
  const context = canvas?.getContext('2d')
  if (!context) return

  if (!gpuPickImageData) gpuPickImageData = context.createImageData(gpuPickSampleSize, gpuPickSampleSize)
  const rowLength = gpuPickSampleSize * 4
  for (let row = 0; row < gpuPickSampleSize; row++) {
    const source = (gpuPickSampleSize - row - 1) * rowLength
    gpuPickImageData.data.set(
      pixels.subarray(source, source + rowLength),
      row * rowLength,
    )
  }
  context.putImageData(gpuPickImageData, 0, 0)
}

function selectGpuPickPixel(pixels) {
  const middle = Math.floor(gpuPickSampleSize / 2)
  const offset = (middle * gpuPickSampleSize + middle) * 4
  const red = pixels[offset]
  const green = pixels[offset + 1]
  const blue = pixels[offset + 2]
  const colorCode = (red << 16) | (green << 8) | blue
  const id = gpuPickColorToId.get(colorCode) || 0

  gpuPickRgb.value = `rgb(${red}, ${green}, ${blue})`
  gpuPickColor.value = `#${colorCode.toString(16).padStart(6, '0')}`
  gpuPickSelectedId.value = id

  const record = gpuPickRecords[id]
  if (!record) {
    gpuPickRecordLabel.value = 'No mark at this pixel'
    if (gpuPickMarker) gpuPickMarker.visible = false
    return
  }

  gpuPickRecordLabel.value = `value ${Math.round(record.value * 100)}% · cell ${record.column}, ${record.row}`
  gpuPickMarker.visible = true
  gpuPickMarker.position.set(record.x, record.y, record.z)
  gpuPickMarker.scale.set(record.width * 2.4, record.height + 0.08, record.depth * 2.4)
}

function renderGpuPickScene() {
  if (!gpuPickRenderer || !gpuPickScene || !gpuPickCamera) return
  gpuPickRenderer.setRenderTarget(null)
  gpuPickRenderer.render(gpuPickScene, gpuPickCamera)
}

function renderGpuPickTarget() {
  if (!gpuPickRenderer || !gpuPickScene || !gpuPickCamera || !gpuPickTarget || !gpuPickHostRef.value) return

  const drawingWidth = gpuPickRenderer.domElement.width
  const drawingHeight = gpuPickRenderer.domElement.height
  const scaleX = drawingWidth / gpuPickHostRef.value.clientWidth
  const scaleY = drawingHeight / gpuPickHostRef.value.clientHeight
  const halfSample = Math.floor(gpuPickSampleSize / 2)
  const offsetX = clampGpuPick(
    Math.round(gpuPickPointerX * scaleX) - halfSample,
    0,
    drawingWidth - gpuPickSampleSize,
  )
  const offsetY = clampGpuPick(
    Math.round(gpuPickPointerY * scaleY) - halfSample,
    0,
    drawingHeight - gpuPickSampleSize,
  )

  gpuPickCamera.setViewOffset(
    drawingWidth,
    drawingHeight,
    offsetX,
    offsetY,
    gpuPickSampleSize,
    gpuPickSampleSize,
  )
  gpuPickVisibleMesh.material = gpuPickIdMaterial
  gpuPickGrid.visible = false
  gpuPickMarker.visible = false
  gpuPickScene.background.set(0x000000)
  gpuPickRenderer.setRenderTarget(gpuPickTarget)
  gpuPickRenderer.render(gpuPickScene, gpuPickCamera)

  gpuPickRenderer.readRenderTargetPixels(
    gpuPickTarget,
    0,
    0,
    gpuPickSampleSize,
    gpuPickSampleSize,
    gpuPickPixels,
  )

  gpuPickCamera.clearViewOffset()
  gpuPickVisibleMesh.material = gpuPickVisibleMaterial
  gpuPickGrid.visible = true
  gpuPickScene.background.set(0x020617)
  drawGpuPickLens(gpuPickPixels)
  selectGpuPickPixel(gpuPickPixels)
  renderGpuPickScene()
}

function resizeGpuPickScene() {
  if (!gpuPickRenderer || !gpuPickCamera || !gpuPickHostRef.value) return
  const width = gpuPickHostRef.value.clientWidth
  const height = gpuPickHostRef.value.clientHeight
  if (!width || !height) return

  gpuPickRenderer.setSize(width, height, false)
  gpuPickCamera.aspect = width / height
  gpuPickCamera.updateProjectionMatrix()
  renderGpuPickScene()
  if (gpuPickLensVisible.value) scheduleGpuPick()
}

function createGpuPickScene() {
  if (gpuPickRenderer || !gpuPickHostRef.value || !gpuPickStageRef.value) return

  gpuPickScene = new THREE.Scene()
  gpuPickScene.background = new THREE.Color(0x020617)

  gpuPickCamera = new THREE.PerspectiveCamera(38, 1, 0.1, 20)
  gpuPickCamera.position.set(0, 3.25, 5.2)
  gpuPickCamera.lookAt(0, -0.42, -0.15)

  gpuPickCubeGeometry = new THREE.BoxGeometry(1, 1, 1)
  const pickColors = new Float32Array(gpuPickCount * 3)
  gpuPickCubeGeometry.setAttribute(
    'aPickColor',
    new THREE.InstancedBufferAttribute(pickColors, 3),
  )

  gpuPickVisibleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })
  gpuPickIdMaterial = new THREE.ShaderMaterial({
    vertexShader: gpuPickIdVertexShader,
    fragmentShader: gpuPickIdFragmentShader,
    toneMapped: false,
  })
  gpuPickVisibleMesh = new THREE.InstancedMesh(
    gpuPickCubeGeometry,
    gpuPickVisibleMaterial,
    gpuPickCount,
  )
  gpuPickVisibleMesh.frustumCulled = false

  const dummy = new THREE.Object3D()
  const visibleColor = new THREE.Color()
  const terrainWidth = 5.3
  const terrainDepth = 3.5
  const cellWidth = terrainWidth / gpuPickColumns
  const cellDepth = terrainDepth / gpuPickRows
  const baseY = -0.72
  gpuPickRecords = Array(gpuPickCount + 1)
  gpuPickColorToId = new Map()

  for (let index = 0; index < gpuPickCount; index++) {
    const id = index + 1
    const column = index % gpuPickColumns
    const row = Math.floor(index / gpuPickColumns)
    const x = (column / (gpuPickColumns - 1) - 0.5) * terrainWidth
    const z = (row / (gpuPickRows - 1) - 0.5) * terrainDepth
    const noise = Math.sin(id * 12.9898) * 43758.5453
    const grain = noise - Math.floor(noise)
    const value = clampGpuPick(
      0.48
        + Math.sin(x * 1.8 + z * 0.7) * 0.20
        + Math.cos(z * 3.2 - x * 0.45) * 0.16
        + Math.sin((x * x + z * z) * 1.7) * 0.08
        + (grain - 0.5) * 0.08,
      0.04,
      0.96,
    )
    const height = 0.05 + value * 0.52
    const width = cellWidth * 0.76
    const depth = cellDepth * 0.76
    const y = baseY + height / 2

    dummy.position.set(x, y, z)
    dummy.scale.set(width, height, depth)
    dummy.updateMatrix()
    gpuPickVisibleMesh.setMatrixAt(index, dummy.matrix)

    visibleColor.setHSL(0.52 + value * 0.25, 0.88, 0.42 + value * 0.16)
    gpuPickVisibleMesh.setColorAt(index, visibleColor)

    const colorCode = Math.imul(id, 0x9e3779) & 0xffffff
    pickColors[index * 3] = ((colorCode >> 16) & 255) / 255
    pickColors[index * 3 + 1] = ((colorCode >> 8) & 255) / 255
    pickColors[index * 3 + 2] = (colorCode & 255) / 255
    gpuPickColorToId.set(colorCode, id)
    gpuPickRecords[id] = {
      column,
      row,
      x,
      y,
      z,
      width,
      height,
      depth,
      value,
    }
  }

  gpuPickVisibleMesh.instanceMatrix.needsUpdate = true
  gpuPickVisibleMesh.instanceColor.needsUpdate = true
  gpuPickCubeGeometry.getAttribute('aPickColor').needsUpdate = true
  gpuPickScene.add(gpuPickVisibleMesh)


  gpuPickGrid = new THREE.GridHelper(6, 24, 0x1e40af, 0x1e293b)
  gpuPickGrid.position.y = baseY - 0.01
  gpuPickGrid.material.transparent = true
  gpuPickGrid.material.opacity = 0.4
  gpuPickScene.add(gpuPickGrid)

  gpuPickMarkerGeometry = new THREE.EdgesGeometry(gpuPickCubeGeometry)
  gpuPickMarkerMaterial = new THREE.LineBasicMaterial({
    color: 0xfde047,
    depthTest: false,
  })
  gpuPickMarker = new THREE.LineSegments(gpuPickMarkerGeometry, gpuPickMarkerMaterial)
  gpuPickMarker.visible = false
  gpuPickMarker.renderOrder = 3
  gpuPickScene.add(gpuPickMarker)

  gpuPickTarget = new THREE.WebGLRenderTarget(gpuPickSampleSize, gpuPickSampleSize, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    depthBuffer: true,
  })
  gpuPickTarget.texture.colorSpace = THREE.NoColorSpace

  gpuPickRenderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })
  gpuPickRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  gpuPickRenderer.outputColorSpace = THREE.SRGBColorSpace
  gpuPickRenderer.domElement.setAttribute('aria-hidden', 'true')
  gpuPickHostRef.value.appendChild(gpuPickRenderer.domElement)

  gpuPickResizeObserver = new ResizeObserver(resizeGpuPickScene)
  gpuPickResizeObserver.observe(gpuPickHostRef.value)
  resizeGpuPickScene()
  showGpuPickLens()
}

function disposeGpuPickScene() {
  if (gpuPickFrame) cancelAnimationFrame(gpuPickFrame)
  gpuPickResizeObserver?.disconnect()
  gpuPickCubeGeometry?.dispose()
  gpuPickVisibleMaterial?.dispose()
  gpuPickIdMaterial?.dispose()
  gpuPickMarkerGeometry?.dispose()
  gpuPickMarkerMaterial?.dispose()
  gpuPickGrid?.geometry.dispose()
  gpuPickGrid?.material.dispose()
  gpuPickTarget?.dispose()
  gpuPickRenderer?.dispose()
  gpuPickRenderer?.domElement.remove()

  gpuPickSelectedId.value = 0
  gpuPickRgb.value = 'rgb(0, 0, 0)'
  gpuPickColor.value = '#000000'
  gpuPickRecordLabel.value = 'Move over the terrain'
  gpuPickLocked.value = false
  gpuPickLensVisible.value = false
  gpuPickRecords = []
  gpuPickColorToId.clear()
  gpuPickImageData = undefined
  gpuPickPointerX = gpuPickPointerY = 0
  gpuPickRenderer = gpuPickScene = gpuPickCamera = gpuPickVisibleMesh = gpuPickMarker = gpuPickGrid = gpuPickCubeGeometry = gpuPickVisibleMaterial = gpuPickIdMaterial = gpuPickMarkerGeometry = gpuPickMarkerMaterial = gpuPickTarget = gpuPickResizeObserver = gpuPickFrame = undefined
}

onSlideEnter(async () => {
  await nextTick()
  createGpuPickScene()
})
onSlideLeave(disposeGpuPickScene)
</script>

<style>
.gpu-pick-slide {
  background: #f8fafc;
  color: #0f172a;
  justify-content: flex-start;
  overflow: hidden;
}

.gpu-pick-slide h1 {
  color: #0f172a;
}

.gpu-pick-claim {
  color: #334155;
  font-size: 1.42rem;
  letter-spacing: 0.01em;
  margin-top: 4.35rem;
  text-align: center;
}

.gpu-pick-claim strong {
  color: #2563eb;
}

.gpu-pick-shell {
  border: 1px solid #1e293b;
  border-radius: 1rem;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.18);
  display: grid;
  flex: 1;
  grid-template-columns: 28% 72%;
  margin-top: 1rem;
  min-height: 21rem;
  overflow: hidden;
  width: 100%;
}

.gpu-pick-explainer {
  background: #fff;
  box-sizing: border-box;
  padding: 1.1rem 1rem;
}

.gpu-pick-kicker {
  color: #64748b;
  font-size: 0.62rem;
  font-weight: 900;
  letter-spacing: 0.09em;
}

.gpu-pick-explainer h2 {
  color: #0f172a;
  font-size: 1.1rem;
  line-height: 1.2;
  margin: 0.25rem 0 0;
}

.gpu-pick-code {
  background: #0f172a;
  border-radius: 0.65rem;
  color: #dbeafe;
  font-family: 'Fira Code', monospace;
  font-size: 0.53rem;
  line-height: 1.6;
  margin-top: 0.65rem;
  padding: 0.62rem 0.65rem;
}

.gpu-pick-code span {
  display: block;
}

.gpu-pick-code b {
  color: #c084fc;
  font-weight: 500;
}

.gpu-pick-code i {
  color: #67e8f9;
  font-style: normal;
}

.gpu-pick-decode {
  border-bottom: 1px solid #e2e8f0;
  padding: 0.7rem 0.2rem 0.65rem;
}

.gpu-pick-decode > span {
  color: #64748b;
  display: block;
  font-size: 0.5rem;
  font-weight: 900;
  letter-spacing: 0.1em;
}

.gpu-pick-decode > div {
  align-items: center;
  display: flex;
  gap: 0.4rem;
  margin-top: 0.3rem;
}

.gpu-pick-decode i {
  border: 1px solid #cbd5e1;
  border-radius: 0.2rem;
  display: block;
  height: 1rem;
  width: 1rem;
}

.gpu-pick-decode code {
  color: #475569;
  font-family: 'Fira Code', monospace;
  font-size: 0.53rem;
}

.gpu-pick-decode strong {
  color: #2563eb;
  display: block;
  font-family: 'Fira Code', monospace;
  font-size: 0.84rem;
  margin-top: 0.3rem;
}

.gpu-pick-decode small {
  color: #64748b;
  display: block;
  font-size: 0.53rem;
  line-height: 1.35;
  margin-top: 0.15rem;
  min-height: 1.4rem;
}

.gpu-pick-fact {
  align-items: baseline;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  gap: 0.45rem;
  padding: 0.72rem 0.2rem;
}

.gpu-pick-fact strong {
  color: #2563eb;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
}

.gpu-pick-fact span {
  color: #64748b;
  font-size: 0.62rem;
}

.gpu-pick-demo {
  background: #020617;
  cursor: crosshair;
  min-width: 0;
  outline: none;
  overflow: hidden;
  position: relative;
  touch-action: none;
}

.gpu-pick-demo:focus-visible {
  box-shadow: inset 0 0 0 3px #38bdf8;
}

.gpu-pick-demo.is-locked {
  cursor: default;
}

.gpu-pick-scene,
.gpu-pick-scene canvas {
  display: block;
  height: 100%;
  inset: 0;
  position: absolute;
  width: 100%;
}

.gpu-pick-heading {
  align-items: flex-start;
  color: #e2e8f0;
  display: flex;
  font-size: 0.68rem;
  justify-content: space-between;
  left: 1rem;
  pointer-events: none;
  position: absolute;
  right: 1rem;
  top: 0.9rem;
  z-index: 2;
}

.gpu-pick-heading > div:first-child > span {
  color: #38bdf8;
  display: block;
  font-size: 0.62rem;
  font-weight: 900;
  letter-spacing: 0.09em;
  margin-bottom: 0.2rem;
}

.gpu-pick-badges {
  display: flex;
  gap: 0.35rem;
}

.gpu-pick-badges span,
.gpu-pick-badges strong {
  background: rgba(15, 23, 42, 0.82);
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 0.4rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.55rem;
  font-weight: 500;
  padding: 0.28rem 0.38rem;
}

.gpu-pick-badges strong {
  color: #67e8f9;
}

.gpu-pick-lens {
  border: 3px solid #67e8f9;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(2, 6, 23, 0.8), 0 0 28px rgba(34, 211, 238, 0.45);
  height: 7.1rem;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  transform: translate(-50%, -50%) scale(0.88);
  transition: opacity 120ms ease, transform 120ms ease;
  width: 7.1rem;
  z-index: 4;
}

.gpu-pick-lens.is-visible {
  opacity: 0.96;
  transform: translate(-50%, -50%) scale(1);
}

.gpu-pick-demo.is-locked .gpu-pick-lens {
  border-color: #fde047;
  box-shadow: 0 0 0 4px rgba(2, 6, 23, 0.8), 0 0 30px rgba(250, 204, 21, 0.5);
}

.gpu-pick-lens canvas {
  height: 100%;
  image-rendering: pixelated;
  position: absolute;
  width: 100%;
}

.gpu-pick-crosshair::before,
.gpu-pick-crosshair::after {
  background: rgba(255, 255, 255, 0.92);
  content: '';
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.gpu-pick-crosshair::before {
  height: 1px;
  width: 1.25rem;
}

.gpu-pick-crosshair::after {
  height: 1.25rem;
  width: 1px;
}

.gpu-pick-lens > span {
  background: rgba(2, 6, 23, 0.82);
  bottom: 0.45rem;
  color: #fff;
  font-family: 'Fira Code', monospace;
  font-size: 0.48rem;
  left: 50%;
  letter-spacing: 0.08em;
  padding: 0.16rem 0.28rem;
  position: absolute;
  transform: translateX(-50%);
  white-space: nowrap;
  z-index: 3;
}

.gpu-pick-hint {
  bottom: 0.9rem;
  color: #64748b;
  font-size: 0.54rem;
  font-weight: 800;
  left: 1rem;
  letter-spacing: 0.08em;
  pointer-events: none;
  position: absolute;
  z-index: 2;
}
</style>

<!--
- Goal: connect a rendered mark back to a record. Show: move to one mark and click to lock it; point out the record details. Keyboard arrows and Enter provide the alternative. Use: large/custom GPU mark sets. Limit: readback can stall; Raycaster is simpler for small ordinary scenes.
- The same InstancedMesh is rendered with its visible material, then on demand with an ID material into the offscreen target.
- The ID material outputs a unique 24-bit RGB value for each instance, with lighting and tone mapping disabled.
- A depth buffer ensures the frontmost visible mark supplies the cursor pixel.
- The lens magnifies a real 25 × 25 offscreen render so the audience can see the otherwise-hidden ID pass.
- Only the center pixel selects the record; an application that does not show this magnified lens can reduce the target and readback to 1 × 1.
- `camera.setViewOffset()` renders only the tiny region surrounding the cursor instead of redrawing a full-size ID buffer.
- `readRenderTargetPixels()` is synchronous and can stall the pipeline, so pointer events are coalesced to one read per animation frame.
- For a small number of ordinary meshes, `Raycaster` is simpler; GPU picking earns its complexity at high counts or with custom GPU geometry.
- Clicking locks the scanner, while arrow keys and Enter or Space provide keyboard access.
- Dispose both materials, shared geometry, marker geometry, render target, and renderer when leaving the slide.
-->

---
class: stay-in-touch-slide
---

# Stay in Touch

<div class="stay-in-touch-content">
  <div class="stay-in-touch-copy">
    <p>I would love to keep in touch!</p>
    <ul>
      <li><a href="https://jbeers.github.io">jbeers.github.io</a></li>
      <li><a href="https://x.com/jtbeers">x.com/jtbeers</a></li>
      <li><a href="https://linkedin.com/in/jacob-beers-dev/">linkedin.com/in/jacob-beers-dev</a></li>
    </ul>
  </div>
  <img class="stay-in-touch-image" src="/images/pic.png" alt="Illustration of Jacob Beers" />
</div>

<!-- Speaker input pending: add approved contact links before presenting. -->

---
class: explore-slide
---

# Keep Exploring

<div class="explore-columns">
  <section class="explore-column">
    <h2>Learning Resources</h2>
    <div class="explore-card-grid explore-card-grid--2x2">
      <a class="explore-card" href="https://threejs.org/">
        <strong>Three.js</strong>
        <span>Official site and documentation</span>
        <small>threejs.org</small>
      </a>
      <a class="explore-card" href="https://threejs-journey.com/">
        <strong>Three.js Journey</strong>
        <span>Haven't used it; looks awesome</span>
        <small>Paid · threejs-journey.com</small>
      </a>
      <a class="explore-card" href="https://discoverthreejs.com/">
        <strong>Discover Three.js</strong>
        <span>Haven't used it; also looks awesome</span>
        <small>Free · discoverthreejs.com</small>
      </a>
      <a class="explore-card" href="https://threejsresources.com/">
        <strong>Three.js Resources</strong>
        <small>threejsresources.com</small>
      </a>
    </div>
  </section>

  <section class="explore-column">
    <h2>Tools / Assets</h2>
    <div class="explore-card-grid">
      <a class="explore-card" href="https://github.com/img2threejs/img2threejs">
        <strong>img2threejs</strong>
        <span>Agent skill</span>
        <small>github.com/img2threejs/img2threejs</small>
      </a>
      <a class="explore-card" href="https://kenney.nl/">
        <strong>Kenney</strong>
        <span>Free game-ready assets</span>
        <small>kenney.nl</small>
      </a>
    </div>
  </section>

  <section class="explore-column">
    <h2>Cool Demos</h2>
    <div class="explore-card-grid">
      <a class="explore-card" href="https://x.com/DilumSanjaya">
        <strong>@DilumSanjaya</strong>
        <small>x.com/DilumSanjaya</small>
      </a>
      <a class="explore-card" href="https://x.com/techartist_">
        <strong>@techartist_</strong>
        <small>x.com/techartist_</small>
      </a>
    </div>
  </section>
</div>

<!-- Images pending: add one supplied image to each exploration column. -->
