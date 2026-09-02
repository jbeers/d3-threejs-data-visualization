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

# Profile the Old Code

Let’s measure where the existing visualization spends its time.

---

# Put More on the GPU

What if the GPU could do more of this work?

---

# Enter Three.js

Three.js provides an explicitly GPU-oriented rendering approach.

---

# What Is Three.js?

Three.js makes WebGL easier, like React or Vue makes the DOM API easier.

---

# Will Three.js Work with D3?

The new renderer still needs to fit our existing D3-based application.

---

# We Still Need D3

D3 handles projections and tracks objects in the visualization.

---

# D3 Manages the Data

D3 is also the backbone of loading and managing our data.

---

# Requirements for Three.js

It must maintain accuracy, improve performance, and work with D3.

---

# It Worked

Three.js was a drop-in replacement for the SVG renderer.

---

# New Performance Numbers

Let’s compare the new renderer with the old one.

---

# How SVG Draws

SVG rendering combines shapes with styles.

---

# How Three.js Renders

Three.js rendering combines geometry, material, and mesh.

---

# Optimization One: InstancedMesh

Instancing stores shared geometry once and batches many object transforms into one GPU draw call.

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

# No Longer Shamed

The visualization is finally worthy of its NASA connection.

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
