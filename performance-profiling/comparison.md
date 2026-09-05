# SVG vs. Three.js: recorded performance comparison

## Bottom line

**In these recordings, Three.js draws about 6.8× as many frames per second during dragging, with about 6.3× shorter main-thread map callbacks.** It also avoids the four application-time tasks exceeding 50 ms seen in the SVG recording.

This is a comparison of these two implementations, not an isolated benchmark of SVG versus WebGL. The Three.js recording uses the richer, continuously animated **Space** mode; the SVG implementation deliberately throttles dragging and regenerates expensive background paths.

## Measurements

| Metric | SVG | Three.js | Interpretation |
| --- | ---: | ---: | --- |
| Recording duration | 12.116 s | 13.945 s | Normalize whole-recording work rather than comparing raw counts. |
| Drawn frames per second during the three drags | 10.9 | 74.2 | About **6.8×** higher frame throughput. |
| Median interval between draws within a drag | 84.9 ms | 13.3 ms | Three.js is drawing at approximately a 75 Hz cadence. |
| Mean map callback duration during dragging | 30.88 ms | 4.88 ms | About **84% less main-thread time per callback**. |
| 95th-percentile map callback during dragging | 39.15 ms | 8.76 ms | Much more headroom within a frame budget. |
| Long main-thread tasks, >50 ms, excluding profiler startup | 4 | 0 | Fewer large interruptions to input processing. |
| Longest main-thread task, excluding profiler startup | 100.03 ms | 38.56 ms | The largest observed application-time stall is substantially smaller. |
| Main-thread busy time during dragging | 46.9% | 45.8% | Similar thread occupancy, but many more frames produced. |
| Main-thread style + layout + paint per recorded second | 7.22 ms | 1.09 ms | About **85% less work in these browser stages**, not 85% less total rendering work. |
| Main-thread busy time over the entire recording, excluding profiler startup | 19.2% | 24.6% | **Three.js does more total work per second**, including continuous animation. |

“Map callback” means the SVG drag timer callback at embedded `D3Map.js:281`, versus `draw` at embedded `SkyMap.js:300`. These are inclusive main-thread elapsed durations, **not complete GPU/display frame times**. The drag comparison uses 35 SVG callbacks and 196 Three.js callbacks. The all-recording Three.js callback average is lower, 2.38 ms, but mixing idle animation with dragging would exaggerate the improvement.

### Drag windows for checking in DevTools

Times are seconds from the beginning of each recording. Each trace contains three sustained map drags and two short selection clicks.

| Gesture | SVG window | SVG draws | Three.js window | Three.js draws |
| --- | --- | ---: | --- | ---: |
| Drag 1 | 1.711–2.564 | 9 | 3.439–4.363 | 69 |
| Drag 2 | 4.950–5.863 | 9 | 4.884–5.415 | 38 |
| Drag 3 | 8.916–10.274 | 16 | 8.017–9.202 | 89 |
| Combined | 3.123 s of dragging | 34 | 2.641 s of dragging | 196 |

Frame throughput is `DrawFrame count / combined gesture duration`. These are compositor draws, not a hardware GPU utilization measurement or a count of screenshots. The gestures differ in duration and movement; they were not identical automated replays.

## Why the SVG version stutters

The captured source and CPU samples identify a more specific bottleneck than “too many SVG elements.”

1. **The drag handler waits 50 ms before updating.** `createDragControls` ignores subsequent drag events while that timer/update is pending. Add the measured ~31 ms callback and scheduling overhead, and the observed ~85 ms between draws makes sense. The throughput gap therefore includes a scheduling-policy difference, not just a rendering-backend difference.
2. **Background regeneration dominates the SVG update.** Sampled inclusive time in `updateBackgroundElements` is approximately **1,414 ms**, versus **1,429 ms** in its enclosing `update`: about **99%**. `updateEventMarkers` accounts for only about **6.5 ms**. These nested sample totals must not be added together. The expensive path repeatedly projects/clips the Milky Way polygons and generates SVG path strings, alongside grid/tick/label updates.
3. **The tick join also defeats reuse.** The five-minute tick selection keys `.data(...)` by its datum, then replaces that datum with projected coordinate arrays using `.datum(...)`. On the next update those old keys no longer match the new numeric tick keys, so the 288 tick lines are replaced. This is an implementation-specific source of DOM churn, not an inherent requirement of SVG.
4. **The new renderer changes the representation and update flow.** `SkyMap.js` uses a texture-backed shader for the sky background, numeric line geometry, instanced markers, and frame-scheduled updates. Its component uses targeted watchers rather than calling the full SVG update on every search-store notification. D3 still computes projections on the CPU: the Three.js trace contains approximately **1,336 ms** of sampled inclusive `projectPath` work.

The strongest explanation is therefore: **avoid repeatedly rebuilding expensive background geometry and DOM state; schedule smaller updates with the display.** These profiles do not demonstrate that event-marker count itself caused the bottleneck, or that SVG could not be improved.

## Click handling improves more than click-to-display latency

For the two short selection clicks:

| Measurement | SVG | Three.js |
| --- | --- | --- |
| Click dispatch, including synchronous/microtask work captured inside it | 96.8 / 98.5 ms | 2.8 / 3.5 ms |
| Reported click event duration through presentation | 137.5 / 134.5 ms | 85.0 / 80.0 ms |

The main thread handles those clicks much more quickly, but the visual response is **not** 30× faster. There is still considerable time after processing before presentation in the Three.js recording; these traces alone do not establish its cause.

Across all five interaction IDs, taking the maximum reported event duration within each ID, the median is **37.5 ms for SVG versus 81.9 ms for Three.js**; the worst is **137.5 ms versus 89.1 ms**. Thus the worst observed interaction improves, but typical recorded interaction latency does not. Five interactions are insufficient for a general latency claim, and these are **not page-level INP measurements**.

## Memory and capture caveats

- Peak reported DOM nodes: **24,181 SVG versus 3,398 Three.js**. This is consistent with substantially more DOM churn, but the counter includes detached/not-yet-collected nodes and other document state. It is not the number of visible chart elements. By the final counter sample the counts are 4,773 and 3,043.
- Peak JavaScript heap: **57.4 MiB SVG versus 55.6 MiB Three.js**. This does **not** establish a meaningful overall memory saving, and excludes GPU allocations. Do not infer memory use from compressed profile file size.
- Both recordings contain Vite development code and browser extensions. For example, the captured autofill-extension mutation-observer callback totals approximately 103 ms in SVG and 1 ms in Three.js. Extension activity is part of these observations, not an isolated renderer cost.
- Both show the same app URL, renderer process, DPR 1, and a 1920 × 999 document viewport. The initial result lists appear comparable, but identical data, camera movement, and throttling settings are not independently verified.
- These are already-loaded interaction recordings, not measurements of initial load time or WebGL/shader setup.

## Suggested talk wording

> “In these captures, dragging went from about 11 to 74 drawn frames per second. The map's main-thread update dropped from about 31 milliseconds to 5, and the four tasks over 50 milliseconds disappeared—even with the new animated Space view enabled.”

Follow with:

> “This wasn't just changing SVG to WebGL. The old version rebuilt expensive background paths and throttled dragging. We changed the representation and update strategy while keeping D3's projection math.”

Avoid: “Three.js uses less CPU,” “all interactions became faster,” “SVG runs only on the CPU,” or “this proves a universal dataset-size limit.”

For a cleaner follow-up, record both versions with the same fixed data, initial view, viewport, and drag/selection sequence; use Three.js **Graphic** mode with decorative motion off; disable extensions; use the same production-build and throttling settings; and repeat several times. Keep a separate Space-mode capture to demonstrate the additional visual capability.

## Method

Analyzed `svg-version.json.gz` and `three-js-version.json.gz` directly, including their CPU-profile chunks, screenshots, and embedded application source; no application code was changed.

- Recording bounds come from `metadata.modifications.initialBreadcrumb.window`, matching `TracingStartedInBrowser`. Some asynchronous pipeline entries begin before recording; using the earliest raw event would incorrectly report longer captures.
- Main-thread measurements select the `CrRendererMain` thread. Busy time is the union of its `RunTask` intervals, clipped to the measurement window, so nested events are not double-counted.
- The one task containing `CpuProfiler::StartProfiling` in each trace is excluded from the application-time long-task and whole-recording busy comparisons: 93.95 ms in SVG and 127.53 ms in Three.js. Other profiling overhead cannot be removed from these recordings.
- Drag windows pair `EventDispatch` pointer-down/up events lasting over 0.5 s; counts and callback distributions select events beginning inside those windows. Frame-interval statistics do not bridge separate gestures. Percentiles use nearest rank.
- Style/layout/paint is the union of main-thread `UpdateLayoutTree`, `Layout`, and `Paint` intervals: 87.525 ms SVG and 15.138 ms Three.js, divided by recording duration. Nested `Paint` events are counted once. WebGL rendering, raster workers, pre-paint, compositing, and GPU execution are not included in that subtotal.
- CPU hotspots aggregate `ProfileChunk` sample `timeDeltas` by function ancestry, counting a function once per sampled stack. Sampling estimates are approximate, not instrumented function timings.
- Interaction durations use `EventTiming` begin records, not both halves of their asynchronous events. Distinct interactions are grouped by nonzero `interactionId`.

The raw profiles embed application source and screenshots; review those contents before publishing the captures.
