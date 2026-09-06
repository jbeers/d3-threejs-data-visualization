import assert from 'node:assert/strict'
import { geoStereographic } from 'd3'
import * as THREE from 'three'

// Adapted from portal-to-the-universe @ 6fc819a:
// skyProjection.mjs: createProjection / visiblePoint; SkyMap.js: updateMarkers.
// Fixed 900 × 600 view, valid illustrative records, one Graphic-mode instance.
// Production validates catalog values with coordinates() before this handoff.
// Run: node snippets/d3-handoff.mjs

// #region projection
const projection = geoStereographic()
  .scale(390).translate([450, 300])
  .rotate([-235, 0, 0])
  .clipAngle(142)
  .clipExtent([[0, 0], [900, 600]])
  .precision(0.2)
// #endregion

const mesh = new THREE.InstancedMesh(
  new THREE.PlaneGeometry(10, 10),
  new THREE.MeshBasicMaterial({ color: '#ffd700' }),
  1,
)
mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
const dummy = new THREE.Object3D()
dummy.rotation.z = Math.PI / 4

function updateMarker(event) {
  // #region project
  let point = null
  projection.stream({
    point(x, y) { point = [x, y] },
  }).point(event.ra, event.dec)
  // #endregion

  // #region place
  dummy.position.set(
    point?.[0] ?? 0, -(point?.[1] ?? 0), 0,
  )
  dummy.scale.setScalar(point ? 1 : 0)
  dummy.updateMatrix()
  mesh.setMatrixAt(0, dummy.matrix)
  mesh.instanceMatrix.needsUpdate = true
  // #endregion
  return point
}

const event = { event_id: 'demo', ra: 236.54, dec: -4.217 }
const rounded = values => values.map(value => Number(value.toFixed(2)))
const buffer = mesh.instanceMatrix
const geometry = mesh.geometry
const matrix = new THREE.Matrix4()
const point = updateMarker(event)
assert.deepEqual(rounded(point), [455.23, 314.36])
mesh.getMatrixAt(0, matrix)
assert.deepEqual(rounded(matrix.elements.slice(12, 15)), [455.23, -314.36, 0])

// The orthographic camera maps the flipped-Y position back to D3's pixels.
const camera = new THREE.OrthographicCamera(0, 900, 0, -600, 0.1, 3000)
camera.position.z = 1000
camera.updateMatrixWorld()
const ndc = new THREE.Vector3().setFromMatrixPosition(matrix).project(camera)
assert.deepEqual(rounded([(ndc.x + 1) * 450, (1 - ndc.y) * 300]), rounded(point))

// Clipped data hide the existing instance; a new view reuses it at a new position.
for (const ra of [55, 0]) {
  assert.equal(updateMarker({ ra, dec: 0 }), null)
  mesh.getMatrixAt(0, matrix)
  assert.equal(matrix.getMaxScaleOnAxis(), 0)
}
projection.rotate([-event.ra, -event.dec, 0])
assert.deepEqual(rounded(updateMarker(event)), [450, 300])
mesh.getMatrixAt(0, matrix)
assert.deepEqual(rounded(matrix.elements.slice(12, 15)), [450, -300, 0])
assert.equal(mesh.instanceMatrix, buffer)
assert.equal(mesh.geometry, geometry)

mesh.dispose()
mesh.geometry.dispose()
mesh.material.dispose()
console.log('D3 handoff passed: projection, clipping, Y conversion, and instance reuse.')
