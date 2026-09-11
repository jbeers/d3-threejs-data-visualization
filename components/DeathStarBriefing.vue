<template>
  <div class="deathstar-briefing">
    <div class="deathstar-stage" role="img" aria-label="White-on-black Death Star plans: horizontal rotation, a polar roll, and successive zooms into nested surface grids.">
      <svg v-if="!ready" class="deathstar-fallback" viewBox="0 0 400 350" aria-hidden="true">
        <g fill="none" stroke="#edf4f7" stroke-width="1.2">
          <circle cx="200" cy="175" r="125" />
          <path v-for="x in [112, 132, 154, 177, 200, 223, 246, 268, 288]" :key="x" :d="`M200 50 Q${(x + 200) / 2} 50 ${x} 87`" />
          <line v-for="y in [-88, -66, -44, -22, 0, 22, 44, 66, 88, 110]" :key="y" :x1="200 - Math.sqrt(125 ** 2 - y ** 2)" :x2="200 + Math.sqrt(125 ** 2 - y ** 2)" :y1="175 + y" :y2="175 + y" />
          <circle cx="200" cy="175" r="39" fill="#000" />
          <circle cx="200" cy="175" r="19" />
          <line v-for="i in 16" :key="i" :x1="200 + 19 * Math.cos(i * Math.PI / 8)" :y1="175 + 19 * Math.sin(i * Math.PI / 8)" :x2="200 + 39 * Math.cos(i * Math.PI / 8)" :y2="175 + 39 * Math.sin(i * Math.PI / 8)" />
          <path d="M75 175H325" />
        </g>
      </svg>
      <div ref="host" class="deathstar-canvas" aria-hidden="true"></div>
    </div>
    <span class="deathstar-phase sr-only">{{ ready ? phase : 'Static Death Star plans' }}</span>
    <div v-if="error || reducedMotion" class="deathstar-status" role="status">{{ error || 'Reduced motion · static station overview' }}</div>
  </div>
</template>

<script setup>
import * as THREE from 'three'
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js'
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js'
import { LineMaterial } from 'three/addons/lines/LineMaterial.js'
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { onSlideEnter, onSlideLeave, useIsSlideActive, useNav, useSlideContext } from '@slidev/client'

const host = ref(null), ready = ref(false), reducedMotion = ref(false)
const seconds = ref(0), error = ref('')
const active = useIsSlideActive()
const { isPrintMode } = useNav()
const { $renderContext: renderContext, $scale: slideScale } = useSlideContext()
const phase = computed(() => seconds.value < 3 ? 'Station overview' : seconds.value < 8 ? 'Horizontal rotation' : seconds.value < 13.4 ? 'Polar rotation' : seconds.value < 17.7 ? 'Surface grid' : 'Detail grid')
const { lerp, smoothstep } = THREE.MathUtils
const sectorLatitude = 0.85
// The supplied 24-second Axeman3D clip stops before the trench run.
// ponytail: hand-sampled keyframes; use motion tracking if a frame-exact restoration is needed.
const zoomKeys = [[0, 0.004], [2.5, 1], [14, 1], [15, 8.5], [15.5, 16.3], [16, 28], [17, 70], [18, 165], [20, 620], [24, 1650]]
let renderer, scene, camera, globe, surface, detail, frame, previous, observer, events

function lines(parent, points, material) {
  const line = new LineSegments2(new LineSegmentsGeometry().setPositions(points), material)
  parent.add(line)
  return line
}

function sample(keys, time) {
  const next = keys.findIndex(([at]) => at > time)
  if (next === -1) return keys.at(-1)[1]
  if (next === 0) return keys[0][1]
  const [start, a] = keys[next - 1], [end, b] = keys[next]
  return lerp(a, b, (time - start) / (end - start))
}

function buildStation(ink, hull) {
  globe = new THREE.Group()
  scene.add(globe)
  const radius = 2, rimY = 1.9, rimRadius = Math.sqrt(radius ** 2 - rimY ** 2)
  // The briefing uses the early plans, with the dish ON the equator, not above it.
  const dishNormal = new THREE.Vector3(0, 0, 1)
  const orientation = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dishNormal)
  const dishAngle = Math.acos(rimY / radius)
  const body = new THREE.Mesh(new THREE.SphereGeometry(radius, 96, 64, 0, Math.PI * 2, dishAngle, Math.PI - dishAngle), hull)
  body.quaternion.copy(orientation)
  globe.add(body)

  const grid = []
  const point = (latitude, longitude) => new THREE.Vector3(
    radius * Math.cos(latitude) * Math.sin(longitude),
    radius * Math.sin(latitude),
    radius * Math.cos(latitude) * Math.cos(longitude),
  )
  const segment = (a, b) => {
    if (a.dot(dishNormal) < rimY && b.dot(dishNormal) < rimY) grid.push(...a, ...b)
  }
  // Staggered latitude bands and a meridian cap, rather than a globe-wide wire cage.
  for (let row = -11; row <= 7; row++) {
    const latitude = row * Math.PI / 24
    if (row !== 0) {
      for (let i = 0; i < 192; i++) segment(point(latitude, i * Math.PI / 96), point(latitude, (i + 1) * Math.PI / 96))
    }
    if (row === 7) continue
    for (let column = 0; column < 32; column++) {
      const longitude = (column + (row % 2) / 2) * Math.PI / 16
      for (let i = 0; i < 4; i++) segment(point(latitude + i * Math.PI / 96, longitude), point(latitude + (i + 1) * Math.PI / 96, longitude))
    }
  }
  for (let column = 0; column < 24; column++) {
    for (let i = 0; i < 24; i++) segment(point(lerp(7 * Math.PI / 24, Math.PI / 2, i / 24), column * Math.PI / 12), point(lerp(7 * Math.PI / 24, Math.PI / 2, (i + 1) / 24), column * Math.PI / 12))
  }
  // The reference's unbroken equatorial line crosses the centered dish.
  for (let i = 0; i < 192; i++) grid.push(...point(0, i * Math.PI / 96), ...point(0, (i + 1) * Math.PI / 96))
  lines(globe, grid, ink)

  const bowlY = r => 1.73 + (rimY - 1.73) * (r / rimRadius) ** 2
  const profile = Array.from({ length: 17 }, (_, i) => {
    const r = rimRadius * i / 16
    return new THREE.Vector2(r, bowlY(r))
  })
  const dish = new THREE.Group()
  dish.quaternion.copy(orientation)
  dish.add(new THREE.Mesh(new THREE.LatheGeometry(profile, 96), hull))
  globe.add(dish)
  const dishGrid = []
  const dishPoint = (r, angle) => [r * Math.sin(angle), bowlY(r), r * Math.cos(angle)]
  for (const fraction of [0.5, 1]) {
    for (let i = 0; i < 96; i++) dishGrid.push(...dishPoint(rimRadius * fraction, i * Math.PI / 48), ...dishPoint(rimRadius * fraction, (i + 1) * Math.PI / 48))
  }
  for (let spoke = 0; spoke < 16; spoke++) {
    for (let i = 8; i < 16; i++) dishGrid.push(...dishPoint(rimRadius * i / 16, spoke * Math.PI / 8), ...dishPoint(rimRadius * (i + 1) / 16, spoke * Math.PI / 8))
  }
  lines(dish, dishGrid, ink)

  const normal = new THREE.Vector3(0, Math.sin(sectorLatitude), Math.cos(sectorLatitude))
  surface = buildGrid(0.28, ink, hull)
  surface.position.copy(normal).multiplyScalar(2.002)
  surface.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal)
  globe.add(surface)
  detail = buildGrid(0.0054, ink, hull)
  detail.position.set(0.28 / 48, -0.28 / 48, 0.0003)
  surface.add(detail)
}

function buildGrid(size, ink, hull) {
  const group = new THREE.Group(), points = [], half = size / 2
  const backing = new THREE.Mesh(new THREE.PlaneGeometry(size, size), hull)
  backing.position.z = -0.00004
  group.add(backing)
  for (let i = 0; i <= 24; i++) {
    const p = -half + size * i / 24
    points.push(-half, p, 0, half, p, 0, p, -half, 0, p, half, 0)
  }
  lines(group, points, ink)
  return group
}

function draw() {
  if (!renderer) return
  const t = seconds.value
  const pitch = (Math.PI * 2 + sectorLatitude) * smoothstep(t, 8, 14)
  globe.rotation.set(pitch, t >= 3 && t <= 7 ? -Math.PI / 2 * Math.sin((t - 3) * Math.PI / 2) : 0, 0)
  surface.visible = t >= 13.4
  detail.visible = t >= 17.7
  camera.zoom = sample(zoomKeys, t)
  // Both grids live on the station: continuous magnification, not a cut to a new scene.
  const pan = smoothstep(t, 16.5, 18)
  camera.position.set(detail.position.x * pan, detail.position.y * pan, 20)
  camera.updateProjectionMatrix()
  renderer.render(scene, camera)
}

function tick(now) {
  if (previous !== undefined) seconds.value = (seconds.value + (now - previous) / 1000) % 24
  previous = now
  draw()
  frame = requestAnimationFrame(tick)
}

function syncPlayback() {
  cancelAnimationFrame(frame)
  previous = undefined
  if (!renderer) return
  draw()
  if (!reducedMotion.value && !document.hidden) frame = requestAnimationFrame(tick)
}

function resize() {
  if (!renderer || !host.value) return
  const { width, height } = host.value.getBoundingClientRect()
  if (!width || !height) return
  // Slidev scales slides with CSS; size the drawing buffer for the displayed pixels.
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
  renderer.setSize(Math.round(width), Math.round(height), false)
  camera.left = -8 / 3 * width / height
  camera.right = 8 / 3 * width / height
  camera.updateProjectionMatrix()
  draw()
}

function disposeScene() {
  cancelAnimationFrame(frame)
  observer?.disconnect()
  events?.abort()
  const resources = new Set()
  scene?.traverse(object => {
    if (object.geometry) resources.add(object.geometry)
    if (object.material) resources.add(object.material)
  })
  resources.forEach(resource => resource.dispose())
  renderer?.dispose()
  renderer?.forceContextLoss()
  renderer?.domElement.remove()
  renderer = scene = camera = globe = surface = detail = frame = previous = observer = events = undefined
  ready.value = false
}

function createScene() {
  if (renderer || !host.value) return
  error.value = ''
  seconds.value = 0
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true })
    host.value.appendChild(renderer.domElement)
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)
    camera = new THREE.OrthographicCamera(-8 / 3, 8 / 3, 8 / 3, -8 / 3, 0.01, 100)
    const ink = new LineMaterial({ color: 0xedf4f7, linewidth: 1.15, alphaToCoverage: true })
    const hull = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 2, polygonOffsetUnits: 2 })
    buildStation(ink, hull)
    events = new AbortController()
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    reducedMotion.value = preference.matches
    seconds.value = preference.matches ? 2.5 : 0
    preference.addEventListener('change', event => {
      reducedMotion.value = event.matches
      if (event.matches) seconds.value = 2.5
    }, { signal: events.signal })
    document.addEventListener('visibilitychange', syncPlayback, { signal: events.signal })
    window.addEventListener('resize', resize, { signal: events.signal })
    renderer.domElement.addEventListener('webglcontextlost', event => {
      event.preventDefault()
      disposeScene()
      error.value = 'WebGL unavailable · static schematic shown'
    }, { signal: events.signal })
    observer = new ResizeObserver(resize)
    observer.observe(host.value)
    ready.value = true
    resize()
    syncPlayback()
  } catch (cause) {
    disposeScene()
    error.value = 'WebGL unavailable · static schematic shown'
    console.warn('Death Star briefing could not initialize', cause)
  }
}

watch(reducedMotion, syncPlayback)
watch(slideScale, () => nextTick(resize))
onSlideEnter(async () => {
  await nextTick()
  if (active.value && !isPrintMode.value && ['slide', 'presenter'].includes(renderContext.value)) createScene()
})
onSlideLeave(disposeScene)
onBeforeUnmount(disposeScene)
</script>

<style scoped>
.deathstar-briefing { min-width: 0; }
.deathstar-stage { position: relative; height: 21rem; overflow: hidden; border: 1px solid #334155; border-radius: 0.75rem; background: #000; }
.deathstar-canvas { position: absolute; inset: 0; }
.deathstar-canvas :deep(canvas), .deathstar-fallback { display: block; width: 100%; height: 100%; }
.deathstar-status { font-size: 0.8rem; line-height: 1.4; margin-top: 0.4rem; color: #475569; }
</style>
