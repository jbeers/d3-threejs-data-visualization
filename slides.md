---
title: Data Visualization with D3 and Three.js
---

# Breaking the DOM Limit: High-Performance Data Visualization with D3 and Three.js

By Jacob Beers

---

# A Matter of Life and Death

What if the Rebels had given Luke Skywalker a CSV for the Death Star trench run?

---

# A Visualization in Space

I was thrilled to join a project that needed a data visualization, especially one about space.

---

# Ortus Solutions and USRA

Ortus Solutions was contracted to create a proof of concept for USRA.

---

# So We Assembled a Team

- Bill Cleveland (USRA)
- Adam Goldstein (USRA)
- Michael O'Dell (USRA)
- Jorge Reyes (Ortus)
- Esme Acevedo (Ortus)
- Tom Buettell (Ortus)
- Lourdes Munoz (Ortus)
- Jacob Beers (Ortus)

---

# We Built Multi-Messenger: Portal to the Universe

It aggregates scientific data from many observatories, using D3 for math and SVG for rendering.

> The Portal to the Universe is a demonstration that covers approximately one year of data from April 1, 2019 through March 27, 2020 for the Fermi Gamma-ray Burst Monitor, the LIGO and Virgo Gravitational-wave observatories, and the Zwicky Transient Facility.

---

# NASA Grant Winner

Multi-Messenger won a grant from NASA.

---

# A Family Connection to NASA

This was especially meaningful to me as my grandpa worked on the moon mission, and my uncle created 3D mission animations at NASA. It was therefore imperative that I do my best.

---

# Reviewing the Application I Noticed

The primary visualization was slower and jankier than I had realized; what would my ancestors say?

---

# This Could Not Be My Contribution

The visualization was janky, stuttered, and ran slowly. Why could something like a complicated game perform better?

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
