---
title: Data Visualization with D3 and Three.js
---

# Breaking the DOM Limit: High-Performance Data Visualization with D3 and Three.js

By Jacob Beers

---

# A Matter of Life and Death

<div class="grid grid-cols-2 gap-8 items-center">

<div>

What if the Rebels had given Luke Skywalker a markdown table of data instead of a cutting edge 3D visualization?

</div>

<div class="aspect-square overflow-hidden rounded-xl shadow-lg">
  <video src="/videos/Death%20Star%20Briefing%20-%20compressed.webm" autoplay="true" muted="true" loop="true" class="w-full h-full object-cover object-center" />
</div>

</div>

<div class="mt-6 text-sm opacity-70">
Video by <a href="https://www.youtube.com/@axeman3d/videos">Axeman3D</a>
</div>

---
class: target-briefing
---

# Trench Run Targets

The rebellion is doomed.

| Target       | Team | Pilot    |    Distance | Size   | Notes                                       |
| ------------ | ---- | -------- | ----------: | ------ | ------------------------------------------- |
| Exhaust Port | Red  | Luke     |       0.5 m | 2 m    | Primary target, about the size of a womprat |
| TIE Fighters | Red  | Biggs    |    Variable | Small  | Keep off Luke                               |
| Turbolasers  | Gold | Dutch    |        2 km | Large  | Shoot back                                  |
| Trench Walls | All  | Everyone |         0 m | Huge   | NOT A TARGET                                |
| Darth Vader  | Any  | Anyone   |    Variable | Human  | Avoid                                       |
| Death Star   | All  | Everyone | Right there | 120 km | Destroy                                     |

<style>
.target-briefing {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
}

.target-briefing h1 {
  color: #f8fafc;
  letter-spacing: 0.04em;
  margin-bottom: 0.25rem;
}

.target-briefing p {
  color: #cbd5e1;
  margin-bottom: 2rem;
}

.target-briefing table {
  background: #1e293b;
  border-radius: 1rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
  font-size: 1rem;
  overflow: hidden;
  width: 100%;
  color: #ab8181;
}

.target-briefing thead {
  background: #334155;
}

.target-briefing th {
  color: #fde68a;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  padding: 0.85rem;
  text-transform: uppercase;
}

.target-briefing td {
  border-bottom: 1px solid #334155;
  padding: 0.7rem 0.85rem;
}

.target-briefing tbody tr:nth-child(even) {
  background: rgba(148, 163, 184, 0.08);
}

.target-briefing tbody tr:first-child {
  color: #fca5a5;
  font-weight: 700;
}
</style>

---

# The Rebels Would Be Doomed

<div class="grid grid-cols-2 gap-8 items-center">

<div>

I hope you can agree. A good data visualization could be considered a matter of life and death.

</div>

<div>

<img src="/videos/starwars-porkins.gif" class="rounded-xl shadow-lg" />

</div>

</div>

---
class: space-viz
---

# A Visualization in Space

Since I know the importance of a good visualization you can imagine my excitement when I was selected to work on building a data visualization for a space project!

My employer, Ortus Solutions was contracted to help USRA build a proof of concept project called Multi-messenger.

<div class="flex items-center justify-center gap-10 mt-10">
  <img src="/images/ortus-logo.png" class="h-24 object-contain" />
  <div class="text-6xl">🤝</div>
  <div class="bg-[#0a1931] rounded-xl p-4 inline-block">
    <img src="/images/usra-logo.svg" class="h-24 object-contain" />
  </div>
</div>

<style>
.space-viz {
  background: #ffffff;
}
</style>

---
class: team-slide
---

# So We Assembled a Team

<div class="grid grid-cols-4 gap-6 mt-8 px-4">

<div class="team-card">
<img src="/images/usra-logo.svg" class="team-logo bg-[#0a1931] rounded px-2 py-1" />
<div class="team-name">Bill Cleveland</div>
<div class="team-role">USRA</div>
</div>

<div class="team-card">
<img src="/images/usra-logo.svg" class="team-logo bg-[#0a1931] rounded px-2 py-1" />
<div class="team-name">Adam Goldstein</div>
<div class="team-role">USRA</div>
</div>

<div class="team-card">
<img src="/images/usra-logo.svg" class="team-logo bg-[#0a1931] rounded px-2 py-1" />
<div class="team-name">Michael O'Dell</div>
<div class="team-role">USRA</div>
</div>

<div class="team-card">
<img src="/images/ortus-logo.png" class="team-logo" />
<div class="team-name">Jorge Reyes</div>
<div class="team-role">Project Manager</div>
</div>

<div class="team-card">
<img src="/images/ortus-logo.png" class="team-logo" />
<div class="team-name">Esme Acevedo</div>
<div class="team-role">Developer</div>
</div>

<div class="team-card">
<img src="/images/ortus-logo.png" class="team-logo" />
<div class="team-name">Tom Buettell</div>
<div class="team-role">QA Tester</div>
</div>

<div class="team-card">
<img src="/images/ortus-logo.png" class="team-logo" />
<div class="team-name">Lourdes Munoz</div>
<div class="team-role">Project Manager</div>
</div>

<div class="team-card">
<img src="/images/ortus-logo.png" class="team-logo" />
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
  font-size: 0.78rem;
}
</style>

---

# We Built Multi-Messenger: Portal to the Universe

<div class="grid grid-cols-3 gap-6 items-center">

<div>

It aggregates scientific data from many observatories, using D3 for math and SVG for rendering.

> The Portal to the Universe is a demonstration that covers approximately one year of data from April 1, 2019 through March 27, 2020 for the Fermi Gamma-ray Burst Monitor, the LIGO and Virgo Gravitational-wave observatories, and the Zwicky Transient Facility.

</div>

<div class="col-span-2">

<img src="/images/multi-messenger-screenshot.png" class="shadow-lg" />

</div>

</div>

---

# NASA Grant Winner

<img src="/images/nasa-grant-triangle-v2.svg" class="grant-diagram" />

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
  <div class="family-placeholder"></div>
  <div class="family-copy">
    This was especially meaningful to me as my grandpa worked on the moon mission, and my uncle created 3D mission animations at NASA. It was therefore imperative that I do my best.
  </div>
  <div class="family-placeholder"></div>
</div>

<style>
.family-columns {
  align-items: center;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  height: 24rem;
  margin-top: 3rem;
}

.family-placeholder {
  background: #f8fafc;
  border: 2px dashed #cbd5e1;
  border-radius: 1rem;
  height: 100%;
}

.family-copy {
  font-size: 1.15rem;
  line-height: 1.6;
  text-align: center;
}
</style>

---
class: review-slide
---

# Reviewing the Application I Noticed Something Awful

The visualization was...

<div v-click class="review-reveal">
  <div class="review-janky">JANKY!</div>
  <div class="video-placeholder">VIDEO PLACEHOLDER</div>
</div>

<div v-click class="review-final">What would my ancestors think?</div>

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

.video-placeholder {
  align-items: center;
  aspect-ratio: 16 / 9;
  background: #e2e8f0;
  border: 2px dashed #94a3b8;
  border-radius: 1rem;
  color: #64748b;
  display: flex;
  font-size: 0.9rem;
  justify-content: center;
}

.review-final {
  font-size: 1.5rem;
  font-style: italic;
  margin-top: 1rem;
  text-align: center;
}
</style>

---

# This Could Not Be My Contribution

The visualization had several problems

- Stutter
- Janky motion
- Controls can get locked

---

# How Could I Fix This?

- What could accurately render the data?
- What could improve performance and still look nice?
- What could give us flexibility to improve in the future?

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
    Three.js provides an explicitly GPU-oriented rendering approach.
  </div>
  <div
    ref="sceneHost"
    class="three-scene-canvas"
    role="img"
    aria-label="Cubes labeled Performant, D3 Compatible, and Agents love it"
  ></div>
</div>

<script setup>
import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { nextTick, ref, watch } from 'vue'
import { onSlideEnter, onSlideLeave, useSlideContext } from '@slidev/client'

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
const labelGeometries = []
const cubeStates = []
const labelText = ['Performant', 'D3 Compatible', 'Agents love it']

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
    group.position.x += (targetX - group.position.x) * 0.08
    group.scale.setScalar(group.scale.x + (targetScale - group.scale.x) * 0.1)
    cube.rotation.x += 0.008
    cube.rotation.y += 0.012
  })
  renderer.render(scene, camera)
}

function createLabels() {
  const currentScene = scene
  new FontLoader().load('/fonts/helvetiker_regular.typeface.json', (font) => {
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

---

# What Is Three.js?

Three.js makes WebGL easier, like React or Vue makes the DOM API easier.

It is a JavaScript library that provides a convenient API for sending graphics data to the GPU for rendering.

- Open source!
- Big community!
- Well documented!

---

# Will Three.js Work with D3?

YES!

We still need D3. D3 covers the important parts of calculating positions, managing the visualization's data, and other mathy technical things.

D3 is almost always paired with SVG for presentation but there is no concrete dependency. We are free to use Three.js!

---

# I Decided to Try It Out

It worked like a charm.

Three.js was a (nearly) drop-in replacement for the SVG based renderer.

The performance improvements were obvious right off the bat.

---

# TODO: Add demo of the new visualization


TODO: ADD VIZUALIZATION

---

# No Longer Shamed

Now that the visualization was changed from SVG to Three.js and the performance issues had been addressed I was far more confident in my contribution to the project.

---

# Lets Talk About How Three.js Works

- How SVG renders vs Three.js
- Easy optimiztions
- Performance Checklist
- Interactivity
- Accessibility
- Animation Tips
- Advanced Three.js features

---
class: svg-demo-slide three-render-demo-slide
---

# How SVG Draws Paths

<div class="svg-demo-layout">
  <div class="svg-demo-left three-demo-left" :class="{ 'cards-swapped': cardsSwapped }">
    <section
      class="svg-demo-panel svg-demo-description"
      :class="{ 'is-front': !cardsSwapped, 'is-back': cardsSwapped }"
      :role="cardsSwapped ? 'button' : undefined"
      :tabindex="cardsSwapped ? 0 : -1"
      :aria-label="cardsSwapped ? 'Show drawing controls' : undefined"
      @click="cardsSwapped && swapCards()"
      @keydown.enter="cardsSwapped && swapCards()"
      @keydown.space.prevent="cardsSwapped && swapCards()"
    >
      <h2>Shapes + styles</h2>
      <p>SVG rendering combines shapes, fills, strokes, and filters.</p>
      <p>Each shape stays in the DOM, so the browser can style and update it directly.</p>
    </section>
    <div
      class="svg-demo-panel svg-demo-controls three-demo-controls"
      :class="{ 'is-front': cardsSwapped, 'is-back': !cardsSwapped }"
      role="group"
      :tabindex="cardsSwapped ? -1 : 0"
      :aria-label="cardsSwapped ? 'Change the drawing' : 'Show drawing controls'"
      @click="!cardsSwapped && swapCards()"
      @keydown.enter="!cardsSwapped && swapCards()"
      @keydown.space.prevent="!cardsSwapped && swapCards()"
    >
      <h2>Style the shape</h2>
      <label for="svg-shape">
        <span>Shape</span>
        <select id="svg-shape" v-model="shape">
          <option value="circle">Circle</option>
          <option value="square">Square</option>
          <option value="triangle">Triangle</option>
          <option value="blob">Organic Blob</option>
        </select>
      </label>
      <label class="three-demo-checkbox" for="svg-fill">
        <span>Fill</span>
        <input id="svg-fill" v-model="filled" type="checkbox" />
      </label>
      <label for="svg-color">
        <span>Diffuse color <output>{{ hue }}°</output></span>
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
    </div>
  </div>
  <section class="svg-demo-panel svg-demo-output">
    <div class="svg-demo-output-header">
      <h2>SVG Output</h2>
      <div class="svg-demo-view-toggle" role="radiogroup" aria-label="SVG output view">
        <label :class="{ 'is-selected': view === 'rendered' }"><input v-model="view" name="svg-view" type="radio" value="rendered" /><span>Rendered</span></label>
        <label :class="{ 'is-selected': view === 'code' }"><input v-model="view" name="svg-view" type="radio" value="code" /><span>Code</span></label>
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

<script setup>
import { computed, ref } from 'vue'

const view = ref('rendered')
const shape = ref('circle')
const hue = ref(210)
const cardsSwapped = ref(false)
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

function swapCards() {
  cardsSwapped.value = !cardsSwapped.value
}

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

---
class: svg-demo-slide three-render-demo-slide
---

# How Three.js Renders Objects

<div class="svg-demo-layout">
  <div class="svg-demo-left three-demo-left" :class="{ 'cards-swapped': cardsSwapped }">
    <section
      class="svg-demo-panel svg-demo-description"
      :class="{ 'is-front': !cardsSwapped, 'is-back': cardsSwapped }"
      :role="cardsSwapped ? 'button' : undefined"
      :tabindex="cardsSwapped ? 0 : -1"
      :aria-label="cardsSwapped ? 'Show scene controls' : undefined"
      @click="cardsSwapped && swapCards()"
      @keydown.enter="cardsSwapped && swapCards()"
      @keydown.space.prevent="cardsSwapped && swapCards()"
    >
      <h2>Geometry + material + mesh</h2>
      <p>Three.js rendering combines geometry, material, and mesh.</p>
      <p>Geometry describes the shape, material describes its appearance, and a mesh combines them for the scene.</p>
    </section>
    <div
      class="svg-demo-panel svg-demo-controls three-demo-controls"
      :class="{ 'is-front': cardsSwapped, 'is-back': !cardsSwapped }"
      role="group"
      :tabindex="cardsSwapped ? -1 : 0"
      :aria-label="cardsSwapped ? 'Change the Three.js scene' : 'Show scene controls'"
      @click="!cardsSwapped && swapCards()"
      @keydown.enter="!cardsSwapped && swapCards()"
      @keydown.space.prevent="!cardsSwapped && swapCards()"
    >
      <h2>Build the scene</h2>
      <label for="three-geometry">
        <span>Geometry</span>
        <select id="three-geometry" v-model="shape">
          <option value="box">Box</option>
          <option value="sphere">Sphere</option>
          <option value="knot">Knot</option>
          <option value="suzanne">Suzanne</option>
        </select>
      </label>
      <label class="three-demo-checkbox" for="three-wireframe">
        <span>Wireframe</span>
        <input id="three-wireframe" v-model="wireframe" type="checkbox" />
      </label>
      <label class="three-demo-checkbox" for="three-smooth">
        <span>Smooth shading</span>
        <input id="three-smooth" v-model="smoothShading" type="checkbox" />
      </label>
      <label for="three-diffuse">
        <span>Diffuse color <output>{{ hue }}°</output></span>
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
        <span>Specular power <output>{{ specular }}</output></span>
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
    </div>
  </div>
  <section class="svg-demo-panel svg-demo-output">
    <div class="svg-demo-output-header">
      <h2>Three.js Output</h2>
      <div class="svg-demo-view-toggle" role="radiogroup" aria-label="Three.js output view">
        <label :class="{ 'is-selected': view === 'rendered' }"><input v-model="view" name="three-view" type="radio" value="rendered" /><span>Rendered</span></label>
        <label :class="{ 'is-selected': view === 'code' }"><input v-model="view" name="three-view" type="radio" value="code" /><span>Code</span></label>
      </div>
    </div>
    <div v-show="view === 'rendered'" ref="sceneHost" class="three-demo-canvas" role="img" aria-label="Interactive Three.js scene"></div>
    <div v-show="view === 'code'" class="svg-demo-code" v-html="highlightedThreeCode"></div>
  </section>
</div>

<script setup>
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { computed, nextTick, ref, watch } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'

const sceneHost = ref(null)
const view = ref('rendered')
const shape = ref('box')
const hue = ref(210)
const cardsSwapped = ref(false)
const wireframe = ref(false)
const smoothShading = ref(true)
const specular = ref(55)
const textureChoice = ref('none')
const textureScale = ref(2)
const color = computed(() => `hsl(${hue.value}, 80%, 58%)`)

function swapCards() {
  cardsSwapped.value = !cardsSwapped.value
}

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
    new OBJLoader().load('/suzanne.obj', (object) => {
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
  if (model) {
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

---
class: instancing-slide
---

# Optimization One: InstancedMesh

<div class="instancing-claim">
  <strong>One shape.</strong> Many copies. <strong>One draw call.</strong>
</div>

<div class="instancing-scene-stage">
  <div ref="sceneHost" class="instancing-scene" role="img" aria-label="The same 3D markers rendered with separate meshes on the left and instancing on the right"></div>
  <div class="instancing-scene-divider" aria-hidden="true"></div>
  <div class="instancing-side-label instancing-side-label--left">
    <div class="instancing-eyebrow">WITHOUT INSTANCING</div>
    <h2>One mesh + material per marker</h2>
  </div>
  <div class="instancing-side-label instancing-side-label--right">
    <div class="instancing-eyebrow">WITH INSTANCING</div>
    <h2>One <code>InstancedMesh</code></h2>
  </div>
  <div class="instancing-side-stats instancing-side-stats--left">
    <div class="instancing-counter" aria-live="polite">
      <div class="instancing-counter-item"><strong>{{ markerCount }}</strong><span>{{ markerCount === 1 ? 'Mesh' : 'Meshes' }}</span></div>
      <span class="instancing-counter-plus">+</span>
      <div class="instancing-counter-item"><strong>{{ markerCount }}</strong><span>{{ markerCount === 1 ? 'Material' : 'Materials' }}</span></div>
    </div>
    <div class="instancing-draw-count">{{ markerCount }} draw {{ markerCount === 1 ? 'call' : 'calls' }}</div>
  </div>
  <div class="instancing-side-stats instancing-side-stats--right">
    <div class="instancing-counter" aria-live="polite">
      <div class="instancing-counter-item"><strong>1</strong><span>InstancedMesh</span></div>
      <span class="instancing-counter-plus">+</span>
      <div class="instancing-counter-item"><strong>1</strong><span>Material</span></div>
    </div>
    <div class="instancing-draw-count">1 draw call</div>
  </div>
</div>

<div class="instancing-controls">
  <label for="instancing-count">Markers</label>
  <span class="instancing-range-bound">1</span>
  <input id="instancing-count" v-model.number="markerCount" type="range" min="1" max="5" step="1" :aria-label="'Number of markers: ' + markerCount" />
  <span class="instancing-range-bound">5</span>
  <output for="instancing-count" aria-live="polite">{{ markerCount }}</output>
</div>

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
  leftGroup.rotation.y += 0.004
  rightGroup.rotation.y += 0.004

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
- Ask: how many copies are there, and where is the bottleneck?
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
class: buffer-geometry-slide
---

# Optimization Two: BufferGeometry

<div class="buffer-claim">
  When animated, SVG sends <strong>path text</strong>; BufferGeometry sends <strong>vertex numbers</strong>.
</div>

<div class="buffer-comparison">
  <div class="buffer-lane buffer-lane--svg">
    <div class="buffer-lane-heading">
      <div class="buffer-eyebrow">SVG PATH ANIMATION</div>
      <h2>D3 → DOM → parser</h2>
    </div>
    <div class="buffer-flow">
      <div class="buffer-step"><strong>D3</strong><small>coordinates</small></div><span class="buffer-arrow">→</span><div class="buffer-step buffer-step--string"><code>d="M…"</code><small>serialize text</small></div><span class="buffer-arrow">→</span><div class="buffer-step"><strong>Browser</strong><small>parse + paint</small></div>
    </div>
    <div class="buffer-plot">
      <div class="buffer-plot-label">smooth path rebuilt from a string</div>
      <svg viewBox="0 0 264 100" role="img" aria-label="A smooth SVG path">
        <path class="buffer-grid-line" d="M 12 12 H 252 M 12 34 H 252 M 12 56 H 252 M 12 78 H 252" />
        <path class="buffer-svg-path" d="M12 75 C28 32 49 65 68 38 S102 68 122 24 S164 58 188 30 S224 64 252 18" />
      </svg>
    </div>
    <div class="buffer-cost buffer-cost--svg"><strong>N</strong> path strings parsed per frame</div>
  </div>
  <div class="buffer-lane buffer-lane--buffer">
    <div class="buffer-lane-heading">
      <div class="buffer-eyebrow">BUFFERGEOMETRY</div>
      <h2>Numbers → GPU buffer</h2>
    </div>
    <div class="buffer-flow">
      <div class="buffer-step"><strong>D3</strong><small>numbers</small></div><span class="buffer-arrow">→</span><div class="buffer-step buffer-step--array"><code>Float32Array</code><small>position data</small></div><span class="buffer-arrow">→</span><div class="buffer-step buffer-step--geometry"><strong>BufferGeometry</strong><small>one mesh</small></div>
    </div>
    <div class="buffer-plot">
      <div class="buffer-plot-label">same shape, stored as vertices</div>
      <svg viewBox="0 0 264 100" role="img" aria-label="A line made from numeric vertices">
        <path class="buffer-grid-line" d="M 12 12 H 252 M 12 34 H 252 M 12 56 H 252 M 12 78 H 252" />
        <polyline class="buffer-buffer-path" points="12,75 35,48 58,64 81,36 105,66 129,26 153,55 178,31 204,58 230,21 252,32" />
        <g class="buffer-vertices"><circle cx="12" cy="75" r="3" /><circle cx="35" cy="48" r="3" /><circle cx="58" cy="64" r="3" /><circle cx="81" cy="36" r="3" /><circle cx="105" cy="66" r="3" /><circle cx="129" cy="26" r="3" /><circle cx="153" cy="55" r="3" /><circle cx="178" cy="31" r="3" /><circle cx="204" cy="58" r="3" /><circle cx="230" cy="21" r="3" /><circle cx="252" cy="32" r="3" /></g>
      </svg>
    </div>
    <div class="buffer-cost buffer-cost--buffer"><strong>1</strong> mesh → <strong>1</strong> WebGL draw call</div>
  </div>
</div>

<div class="buffer-summary"><strong>Same pixels.</strong> Fewer text parses. One geometry means one CPU draw submission.</div>

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
- When animated D3 code updates `d`, it serializes numeric coordinates into a string.
- The browser receives the DOM attribute, parses the path, and rebuilds its rendering data.
- BufferGeometry stores vertex positions in typed arrays/BufferAttributes instead of path text.
- BufferGeometry alone does not batch separate Meshes: consolidate vertices into one geometry/material/mesh for one draw call.
- Groups or multiple materials add draw calls.
- The GPU still processes the vertices; the win is less JS/DOM/parser work and fewer CPU draw submissions.
- This is an optimization for many related vertices, not a reason to replace every small or independent SVG path.
-->

---

# Performance Checklist

Use a repeatable checklist to find and prioritize rendering improvements.

---

# Keyboard Accessibility

Keep the visualization accessible through keyboard navigation.


---

# Time for Polish

Now that the fundamentals are in place, we can improve the experience.

---
class: entry-exit-slide
---

# Animation: Entry and Exit

<div class="entry-exit-claim">
  Make changes legible: <strong>new records grow in</strong>; removed records shrink out.
</div>

<div class="entry-exit-layout">
  <div class="entry-exit-code-card">
    <div class="entry-exit-card-eyebrow">D3 DATA + THREE.JS</div>
    <h2>Enter · Exit</h2>
    <pre class="entry-exit-code"><code><span class="entry-exit-code-muted">function</span> sync(data) {
  <span class="entry-exit-code-muted">const</span> next = d3.index(data, d =&gt; d.id)
  <span class="entry-exit-code-enter">// ENTER</span>
  <span class="entry-exit-code-muted">for each</span> record missing from meshes:
    mesh = createMesh(record)
    scene.add(mesh)
    animate(mesh.scale, 0 → 1)
  <span class="entry-exit-code-exit">// EXIT</span>
  <span class="entry-exit-code-muted">for each</span> mesh missing from next:
    animate(mesh.scale, 1 → 0)
    then scene.remove(mesh)
}</code></pre>
  </div>
  <div class="entry-exit-scene-card">
    <div class="entry-exit-scene-frame">
      <div ref="sceneHost" class="entry-exit-scene-canvas" role="img" aria-label="Three.js scene showing data records entering and exiting"></div>
      <div class="entry-exit-scene-title">THREE.JS SCENE</div>
      <div class="entry-exit-scene-count"><strong>{{ recordCount }}</strong> {{ recordCount === 1 ? 'record' : 'records' }}</div>
      <div class="entry-exit-scene-caption">new records grow in · removed records shrink out</div>
    </div>
  </div>
</div>

<div class="entry-exit-controls">
  <label for="entry-exit-count">Records</label>
  <span class="entry-exit-range-bound">0</span>
  <input id="entry-exit-count" v-model.number="recordCount" type="range" min="0" max="5" step="1" :aria-label="'Number of records: ' + recordCount" @input="stopAutoCycle" />
  <span class="entry-exit-range-bound">5</span>
  <output for="entry-exit-count" aria-live="polite">{{ recordCount }}</output>
</div>

<script setup>
import * as THREE from 'three'
import { nextTick, ref, watch } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'

const sceneHost = ref(null)
const recordCount = ref(0)
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
let cycleTimer
let cycleDirection = 1
let autoCycleEnabled = true

function clearAutoCycle() {
  if (cycleTimer) window.clearInterval(cycleTimer)
  cycleTimer = undefined
}

function startAutoCycle() {
  if (!autoCycleEnabled || cycleTimer) return

  cycleTimer = window.setInterval(() => {
    if (recordCount.value === 5) cycleDirection = -1
    if (recordCount.value === 0) cycleDirection = 1
    recordCount.value += cycleDirection
  }, 3000)
}

function stopAutoCycle() {
  autoCycleEnabled = false
  clearAutoCycle()
}

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
  recordGroup.rotation.y += 0.003
  recordStates.forEach((state) => {
    if (!state.mesh) return

    const mesh = state.mesh
    mesh.scale.setScalar(mesh.scale.x + (state.targetScale - mesh.scale.x) * 0.12)
    mesh.position.y += (state.targetY - mesh.position.y) * 0.12
    mesh.rotation.x += 0.008
    mesh.rotation.y += 0.012

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
  clearAutoCycle()
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
  startAutoCycle()
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
- D3 supplies data and keys; Three.js owns the Mesh objects and scene lifecycle.
- Enter and exit are lifecycle ideas here—not DOM/SVG selections.
- New records start at zero size and transition into their target size.
- Removed records shrink away first, then are removed from the scene.
- The slider automatically cycles from zero to five and back every three seconds.
- Adjusting it manually stops the cycle so you can hold on any state.
- At zero, every mesh exits and is cleaned up.
- The slider is illustrative: the important idea is the animated lifecycle, not a performance benchmark.
-->
---
class: physical-properties-slide
---

# Animation: Physical Properties

<div class="physical-claim">
  Keep <code>x</code> and <code>y</code> stable. Choose what the record’s <code>data</code> means visually.
</div>

<div class="physical-layout">
  <section class="physical-data-card">
    <div class="physical-eyebrow">REPRESENTATIVE DATA</div>
    <h2>Five records</h2>
    <pre class="physical-data-code"><code><span class="physical-code-keyword">const</span> records = [
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
    <div class="physical-scene-frame" @pointermove="tiltScene" @pointerleave="resetSceneTilt">
      <div ref="sceneHost" class="physical-scene-canvas" role="img" :aria-label="'Three.js scene mapping record data to ' + mappingLabels[mapping] + '. Move the pointer over the scene to rotate it.'"></div>
      <div class="physical-scene-title">THREE.JS SCENE</div>
      <div class="physical-scene-map"><code>data</code><span>→</span><strong>{{ mappingLabels[mapping] }}</strong></div>
      <div class="physical-scene-caption"><code>x</code> and <code>y</code> anchor each record · move pointer to rotate</div>
    </div>
  </section>
</div>

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
const meshStates = []

function applyMapping() {
  if (!meshStates.length) return

  meshStates.forEach(({ mesh, record, targetColor, targetRotation }, index) => {
    const amount = record.data / 100
    mesh.geometry = geometries[0]
    mesh.userData.targetScale = 1
    targetColor.set(0x38bdf8)
    targetRotation.set(0.25, 0.35, 0)

    if (mapping.value === 'mesh') mesh.geometry = geometries[index + 1]
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
  if (plotGroup) {
    plotGroup.rotation.x = THREE.MathUtils.lerp(plotGroup.rotation.x, targetTiltX, 0.08)
    plotGroup.rotation.y = THREE.MathUtils.lerp(plotGroup.rotation.y, targetTiltY, 0.08)
  }
  meshStates.forEach(({ mesh, targetColor, targetRotation }) => {
    const scale = THREE.MathUtils.lerp(mesh.scale.x, mesh.userData.targetScale, 0.08)
    mesh.scale.setScalar(scale)
    mesh.rotation.x = THREE.MathUtils.lerp(mesh.rotation.x, targetRotation.x, 0.08)
    mesh.rotation.y = THREE.MathUtils.lerp(mesh.rotation.y, targetRotation.y, 0.08)
    mesh.rotation.z = THREE.MathUtils.lerp(mesh.rotation.z, targetRotation.z, 0.08)
    mesh.material.color.lerp(targetColor, 0.08)
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
- `x` and `y` always map to position, so each record keeps its identity as the visual channel changes.
- The dropdown remaps the same `data` value to mesh shape, color, scale, or rotation.
- Mesh shape is a categorical threshold mapping; the other examples use continuous numeric mappings.
- Animate between mappings so viewers can track the same records instead of decoding a replacement scene.
- Moving the pointer rotates the entire plot group, making the scene’s depth easier to see.
- Position and scale are easier to compare precisely than color or rotation.
- Color needs a legend and should not be the only way important information is communicated.
- Pick a visual property that matches the meaning of the data; more channels are not automatically better.
-->

---
class: staggering-slide
---

# Animation: Staggering

<div class="stagger-claim">
  Same records. Same animation. <strong>Only the start time changes.</strong>
</div>

<div class="stagger-stage">
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
  <div class="stagger-record-count stagger-record-count--left">12 records</div>
  <div class="stagger-record-count stagger-record-count--right">12 records</div>
</div>

<button class="stagger-load-button" type="button" @click="loadData">
  {{ hasLoaded ? 'Replay loading' : 'Simulate loading' }}
</button>

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
    state.mesh.rotation.x += 0.006
    state.mesh.rotation.y += 0.009
    if (state.startAt === undefined || time < state.startAt) return

    const progress = THREE.MathUtils.clamp((time - state.startAt) / entryDuration, 0, 1)
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
- The button resets both scenes and loads the same twelve records.
- Every marker uses the same 550 ms entry animation.
- The left starts every marker at the same time.
- The right starts each marker 30 ms after the previous marker.
- Staggering does not make rendering faster; it controls pacing and directs attention.
- Sort records into a meaningful order before staggering them.
- Cap the total delay or animate in batches for large datasets.
- Respect reduced-motion preferences by shortening or removing delays.
-->

---
class: idle-motion-slide
---

# Animation: Idle Motion

<div class="idle-claim">
  Add life, not meaning. <strong>The data stays exactly the same.</strong>
</div>

<div class="idle-stage">
  <div ref="sceneHost" class="idle-scene" role="img" aria-label="The same Three.js data points shown static on the left and with decorative idle motion on the right"></div>
  <div class="idle-divider" aria-hidden="true"></div>
  <section class="idle-label idle-label--left">
    <div class="idle-eyebrow">STATIC</div>
    <h2>Perfectly still</h2>
    <div class="idle-motion-badge idle-motion-badge--left">motion = none</div>
  </section>
  <section class="idle-label idle-label--right">
    <div class="idle-eyebrow">IDLE MOTION</div>
    <h2>Subtle movement</h2>
    <div class="idle-motion-badge idle-motion-badge--right">decorative only</div>
  </section>
  <div class="idle-caption idle-caption--left">fixed position · fixed rotation</div>
  <div class="idle-caption idle-caption--right">small loop · offset phases · stable anchor</div>
</div>

<script setup>
import * as THREE from 'three'
import { nextTick, ref } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'

const sceneHost = ref(null)
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
  if (!reduceMotion) {
    const seconds = time / 1000
    rightStates.forEach(({ mesh, position, rotation, phase }) => {
      const wave = seconds * 0.85 + phase
      mesh.position.x = position.x + Math.cos(wave * 0.8) * 0.02
      mesh.position.y = position.y + Math.sin(wave) * 0.06
      mesh.position.z = position.z + Math.sin(wave * 0.65) * 0.04
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

  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
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
- Both sides render identical marks in identical anchored positions.
- The right adds a small looping bob and rotation; none of it is mapped to data.
- Every mark uses the same amplitude and speed with offset phases, so the motion feels organic rather than synchronized.
- Keep idle movement slow and low-amplitude so it does not compete with the visualization.
- Motion should orbit a stable anchor so viewers do not mistake it for a changing value.
- The demo becomes static when the user prefers reduced motion.
- Stop animation work when the visualization is offscreen or hidden.
-->

---

# What Else Can Three.js Do?

The renderer opens the door to a broader set of GPU-powered tools.

---

# Three.js Tool: Billboard Images

Billboard images can be instanced and animated.

---
class: shader-slide
---

# Three.js Tool: Shaders

<div class="shader-claim">
  One small program. <strong>Thousands of parallel calculations.</strong>
</div>

<div class="shader-stage">
  <section class="shader-code-panel">
    <div class="shader-code-heading">
      <span class="shader-code-step shader-code-step--vertex">VERTEX</span>
      Move each vertex
      <span class="shader-language">GLSL</span>
    </div>
    <div class="shader-code">
      <span class="shader-code-line"><span class="shader-token-keyword">uniform</span> <span class="shader-token-type">float</span> <span class="shader-token-uniform">uTime</span>;</span>
      <span class="shader-code-line"><span class="shader-token-keyword">uniform</span> <span class="shader-token-type">float</span> <span class="shader-token-uniform">uAmplitude</span>;</span>
      <span class="shader-code-line"><span class="shader-token-keyword">varying</span> <span class="shader-token-type">float</span> vHeight;</span>
      <span class="shader-code-line"><span class="shader-token-type">void</span> <span class="shader-token-function">main</span>() {</span>
      <span class="shader-code-line shader-code-line--indent"><span class="shader-token-type">vec3</span> p = <span class="shader-token-builtin">position</span>;</span>
      <span class="shader-code-line shader-code-line--indent">vHeight = <span class="shader-token-function">sin</span>(p.x * <span class="shader-token-number">3.0</span> + <span class="shader-token-uniform">uTime</span>)</span>
      <span class="shader-code-line shader-code-line--double-indent">* <span class="shader-token-uniform">uAmplitude</span>;</span>
      <span class="shader-code-line shader-code-line--indent">p.z += vHeight;</span>
      <span class="shader-code-line shader-code-line--indent"><span class="shader-token-builtin">gl_Position</span> = <span class="shader-token-builtin">projectionMatrix</span></span>
      <span class="shader-code-line shader-code-line--double-indent">* <span class="shader-token-builtin">modelViewMatrix</span> * <span class="shader-token-type">vec4</span>(p, <span class="shader-token-number">1.0</span>);</span>
      <span class="shader-code-line">}</span>
    </div>
    <div class="shader-code-heading shader-code-heading--fragment">
      <span class="shader-code-step shader-code-step--fragment">FRAGMENT</span>
      Color each fragment
    </div>
    <div class="shader-code shader-code--fragment">
      <span class="shader-code-line"><span class="shader-token-keyword">varying</span> <span class="shader-token-type">float</span> vHeight;</span>
      <span class="shader-code-line"><span class="shader-token-type">void</span> <span class="shader-token-function">main</span>() {</span>
      <span class="shader-code-line shader-code-line--indent"><span class="shader-token-type">float</span> height = <span class="shader-token-function">smoothstep</span>(<span class="shader-token-number">-0.45</span>, <span class="shader-token-number">0.45</span>, vHeight);</span>
      <span class="shader-code-line shader-code-line--indent"><span class="shader-token-type">vec3</span> low = <span class="shader-token-type">vec3</span>(<span class="shader-token-number">0.12</span>, <span class="shader-token-number">0.23</span>, <span class="shader-token-number">0.54</span>);</span>
      <span class="shader-code-line shader-code-line--indent"><span class="shader-token-type">vec3</span> high = <span class="shader-token-type">vec3</span>(<span class="shader-token-number">0.13</span>, <span class="shader-token-number">0.83</span>, <span class="shader-token-number">0.93</span>);</span>
      <span class="shader-code-line shader-code-line--indent"><span class="shader-token-type">vec3</span> color = <span class="shader-token-function">mix</span>(low, high, height);</span>
      <span class="shader-code-line shader-code-line--indent"><span class="shader-token-builtin">gl_FragColor</span> = <span class="shader-token-type">vec4</span>(color, <span class="shader-token-number">1.0</span>);</span>
      <span class="shader-code-line">}</span>
    </div>
  </section>

  <section class="shader-demo">
    <div ref="sceneHost" class="shader-scene" role="img" aria-label="A wave surface displaced and colored by a custom Three.js shader"></div>
    <div class="shader-demo-heading">
      <div>
        <span>GPU WAVE SURFACE</span>
        Position becomes height; height becomes color.
      </div>
      <div class="shader-demo-stats">
        <span>6,565 vertices</span>
        <span>1 draw call</span>
      </div>
    </div>
    <label class="shader-control" for="shader-amplitude">
      <span>uAmplitude</span>
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
  vec3 p = position;
  vHeight = sin(p.x * 3.0 + uTime) * uAmplitude;
  p.z += vHeight;
  gl_Position = projectionMatrix
    * modelViewMatrix * vec4(p, 1.0);
}`

const fragmentShader = `varying float vHeight;
void main() {
  float height = smoothstep(-0.45, 0.45, vHeight);
  vec3 low = vec3(0.12, 0.23, 0.54);
  vec3 high = vec3(0.13, 0.83, 0.93);
  vec3 color = mix(low, high, height);
  gl_FragColor = vec4(color, 1.0);
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
- The plane contains 6,565 vertices, but the CPU updates only one `uTime` uniform each frame.
- Uniforms are values shared by every shader invocation in a draw call; the slider updates `uAmplitude` without rebuilding geometry.
- The vertex shader receives Three.js's `position` attribute and built-in projection and model-view matrices.
- It changes each vertex's z position with the same sine function.
- `vHeight` is interpolated across the triangle and passed into the fragment shader.
- The fragment shader turns that height into a color for each fragment.
- This is one mesh and one material, so it remains one draw call.
- Shaders are valuable when many vertices or pixels need the same custom calculation; they are not automatically faster for every task.
- Reduced-motion preferences freeze `uTime` while keeping the amplitude control usable.
-->

---
class: lod-slide
---

# Three.js Tool: THREE.LOD

<div class="lod-claim">
  Near objects need detail. <strong>Distant objects usually do not.</strong>
</div>

<div class="lod-stage">
  <section class="lod-explainer">
    <div class="lod-explainer-heading">CLICK A LEVEL · OR DRAG THE CAMERA</div>
    <div class="lod-code">
      <span><b>const</b> lod = <b>new</b> THREE.LOD()</span>
      <span>lod.addLevel(high, <i>0</i>)</span>
      <span>lod.addLevel(medium, <i>7</i>)</span>
      <span>lod.addLevel(low, <i>10.5</i>)</span>
      <span>scene.add(lod)</span>
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
  <section class="lod-demo">
    <div ref="sceneHost" class="lod-scene" role="img" aria-label="A rotating Three.js model changing detail as camera distance changes"></div>
    <div class="lod-demo-heading">
      <div>
        <span>MOVE THE CAMERA</span>
        Cross a threshold; Three.js swaps the visible mesh.
      </div>
      <div class="lod-active-level">
        <span>ACTIVE</span>
        <strong>{{ currentLevel.name }}</strong>
        <small>{{ currentLevel.triangles.toLocaleString() }} triangles</small>
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

<script setup>
import * as THREE from 'three'
import { computed, nextTick, ref, watch } from 'vue'
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
const currentLevel = computed(() => levelMeta[currentLevelIndex.value] ?? levelMeta[0])

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
- Click a level for a representative distance, or drag the slider from 4.5 to 13.5 units away.
- `THREE.LOD` stores several representations of the same object, ordered by camera distance.
- The renderer calls `lod.update(camera)` automatically and keeps only the matching level visible.
- This demo swaps among 2,420, 320, and 20 triangle icosahedrons at distances 7 and 10.5.
- At a distance, the low-detail silhouette is close enough while requiring far less vertex processing and triangle setup.
- Only one level renders at a time, so this object still costs one draw call.
- Smooth shading changes how normals interpolate across those triangles; it does not change the active geometry or triangle count.
- All geometries remain in memory; LOD trades additional memory and authoring work for lower rendering cost.
- Real thresholds should be chosen from screen size and profiling, not arbitrary round numbers.
- Hard switches can pop; use sensible thresholds, hysteresis, or fading when the transition is noticeable.
- Reduced-motion preferences stop the decorative rotation without disabling the distance control.
-->

---
class: texture-size-slide
---

# Three.js Tool: Textures

<div class="texture-claim">
  A texture costs its source size—<strong>even when rendered small.</strong>
</div>

<div class="texture-stage">
  <div ref="sceneHost" class="texture-scene" role="img" aria-label="The same artwork rendered from 256 and 2048 pixel textures at an identical screen size"></div>
  <div class="texture-divider" aria-hidden="true"></div>
  <section class="texture-label texture-label--left">
    <div class="texture-eyebrow">SMALL SOURCE</div>
    <h2>256 × 256</h2>
    <div class="texture-stats">
      <span>65K texels</span>
      <strong>≈ 0.33 MiB</strong>
    </div>
  </section>
  <section class="texture-label texture-label--right">
    <div class="texture-eyebrow">LARGE SOURCE</div>
    <h2>2048 × 2048</h2>
    <div class="texture-stats">
      <span>4.2M texels</span>
      <strong>≈ 21.3 MiB</strong>
      <b>64× pixels</b>
    </div>
  </section>
  <div class="texture-crop texture-crop--left">
    crop spans {{ Math.round(256 / textureZoom) }} source texels
  </div>
  <div class="texture-crop texture-crop--right">
    crop spans {{ Math.round(2048 / textureZoom) }} source texels
  </div>
</div>

<label class="texture-zoom-control" for="texture-zoom">
  <div>
    <span>INSPECT THE TEXTURE</span>
    <strong>{{ textureZoom < 1.5 ? 'Same footprint. Very different cost.' : 'Extra detail matters only when the view needs it.' }}</strong>
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
- Both panels render the same generated artwork at the same on-screen size.
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

# Three.js Tool: Points and Particles

Points make large particle systems practical to render.

---

# Three.js Tool: GPU Picking

GPU picking efficiently identifies which rendered object a user selects.

---

# Three.js Tool: Imported 3D Assets

Load objects and materials created in a dedicated 3D program.

---

# Stay in Touch

Check out my website and social accounts.

---

# Extra Resources

Here are more resources for exploring D3, Three.js, and performant visualization.
