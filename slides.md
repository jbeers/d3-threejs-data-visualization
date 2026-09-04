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

# Optimization Two: BufferGeometry

Unlike parsed SVG path strings, BufferGeometry values can be sent directly in a single draw call.

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

# Animation: Entry and Exit

Use entry and exit animations to explain when data appears or disappears.

---

# Animation: Physical Properties

Tie data points to physical properties so movement communicates meaning.

---

# Animation: Staggering

Stagger repeated animations to make large changes easier to follow.

---

# Animation: Idle Motion

Use subtle idle animations to keep the visualization alive.

---

# Animation: FLIP

Use FLIP animations to make layout changes smooth and understandable.

---

# What Else Can Three.js Do?

The renderer opens the door to a broader set of GPU-powered tools.

---

# Three.js Tool: Billboard Images

Billboard images can be instanced and animated.

---

# Three.js Tool: Shaders

Buffers move data to the GPU, instancing reduces calls, and shaders move visual calculations there.

---

# Three.js Tool: THREE.LOD

Level of detail selects an appropriate model complexity for the viewing distance.

---

# Three.js Tool: BufferGeometry

BufferGeometry efficiently represents mesh, line, and point data for the GPU.

---

# Three.js Tool: Textures

Textures add image data and surface detail to rendered objects.

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
