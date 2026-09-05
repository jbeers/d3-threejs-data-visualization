# Old SVG / optimized SVG / Three.js

## Latest: optimized SVG in interactive Chrome DevTools

New capture: [svg-updated.json.gz](svg-updated.json.gz), recorded September 5 at 22:34:36 UTC. This is a **17.600 s interactive capture with five map drags and one short selection click**. The embedded renderer body matches the optimized headless version after accounting for Vite's import URLs; the embedded `CelestialMap.vue` matches exactly.

**Optimized SVG reaches approximately 36 drawn frames/s here, rather than the headless replay's 29.** It is substantially better than the original SVG capture, but still misses 60 FPS and remains dominated by background generation.

### All three interactive DevTools captures

| Metric | Original SVG | Optimized SVG, new capture | Three.js Space view |
| --- | ---: | ---: | ---: |
| Drawn frames/s during dragging | **10.9** | **35.9** | **74.2** |
| Mean main-thread map callback during dragging | **30.9 ms** | **22.6 ms** | **4.9 ms** |
| 95th-percentile map callback during dragging | 39.2 ms | 31.6 ms | 8.8 ms |
| Median interval between draws during dragging | 84.9 ms | 23.9 ms | 13.3 ms |
| Main-thread busy during dragging | **46.9%** | **92.2%** | **45.8%** |
| Longest main-thread task, excluding profiler startup | 100.0 ms | 80.0 ms | 38.6 ms |
| Tasks >50 ms, excluding profiler startup | 4 | 4 | 0 |
| Drag gestures analyzed | 3 | 5 | 3 |
| Recording duration | 12.116 s | 17.600 s | 13.945 s |

These now share the interactive DevTools/development-build context, the app URL, a 1920 × 999 main viewport, and DPR 1. Extensions are active in the new capture too. **This removes the headless-versus-interactive mismatch, but does not make the recordings identical experiments:** gesture paths/durations and click counts differ, Three.js includes animated Space graphics, and identical data and throttling settings have not been independently established. Treat the table as a comparison of recorded behavior, not universal renderer speedup factors. Raw long-task counts also span different recording lengths/workloads.

### What changed relative to the headless result?

- Draw throughput is about **25% higher**: 28.7 → 35.9 draws/s.
- Mean drag callback is about **27% shorter**: 31.1 → 22.6 ms.
- Main-thread occupancy during dragging is lower, but still high: 98.1% → 92.2%.
- The five individual drags range from **31.7 to 42.8 draws/s**, with mean callbacks from **18.7 to 25.2 ms**. Different geographic views and input trajectories influence the workload. Do not attribute the entire difference to headless mode alone; the build, replay, and profiling conditions also differ.

### What remains expensive?

`updateBackgroundElements` takes approximately **5,089 ms of 5,124 ms sampled inclusive `render` time: 99.3%**. The same projection/clipping/path-generation hotspot remains. A **22.6 ms average callback still exceeds the 16.7 ms budget for 60 Hz**, before the rest of the browser's work.

The four non-startup long tasks last **80.0, 50.3, 55.8, and 56.2 ms**, all during dragging. Three contain major-GC pauses of roughly **14–25 ms**. Stable SVG nodes do not eliminate geographic/path-string allocation. The separate **227.8 ms profiler-start task** is excluded rather than attributed to the application.

The one selection click takes **33.7 ms in dispatch and 65.8 ms through presentation**, versus approximately 97–98 ms dispatch and 134–137 ms through presentation for the two selections in the original SVG recording. This is encouraging, but one click is not a latency distribution or INP measurement; it also does not establish an overall latency ranking against Three.js.

There is no broad resource-use win: whole-recording main-thread occupancy is approximately **37.5%** here, versus 19.2% original SVG and 24.6% Three.js. The new peak JS heap is approximately **209.5 MiB**; differing initial document/GC state prevents interpreting that alone as either a leak or a reliable memory comparison.

### Reproducible drag windows

Offsets are seconds from the new recording's start. Counts use `DrawFrame` events in this renderer's layer tree; callback durations use `FunctionCall` events for `D3Map.js`'s `renderFrame`.

| Drag | Window | Draws | Draws/s | Mean callback |
| --- | --- | ---: | ---: | ---: |
| 1 | 1.567–2.795 s | 42 | 34.2 | 25.2 ms |
| 2 | 3.258–3.772 s | 22 | 42.8 | 18.7 ms |
| 3 | 6.333–7.615 s | 41 | 32.0 | 23.9 ms |
| 4 | 11.292–13.661 s | 94 | 39.7 | 21.9 ms |
| 5 | 14.136–15.337 s | 38 | 31.7 | 22.1 ms |
| Combined | **6.593 s of dragging** | **237** | **35.9** | **22.6 ms over 239 callbacks** |

Frame rate is total draws divided by total gesture duration, not an unweighted average of gesture rates. Callback statistics include calls beginning within the gestures. Frame intervals do not bridge separate drags; p95 uses nearest rank. Main-thread busy time unions clipped task intervals rather than adding nested events. Callback duration and compositor draw cadence are not complete GPU/display frame times.

**Updated talk takeaway:** “In these interactive recordings, the original SVG version drew about 11 frames per second, optimized SVG about 36, and the Three.js Space view about 74. Fixing SVG helped considerably, but repeatedly generating the geographic background remained expensive.” Keep the differing interactions and representation changes explicit; these figures support the case study, not an inherent SVG/DOM ceiling.

No slide or application code was changed for this update. The sections below retain the earlier controlled headless replay analysis; its **41.6 → 31.1 ms** comparison is separate from the interactive **30.9 → 22.6 ms** comparison above.

---

## Earlier headless study — verdict

**The SVG optimization is real: approximately 11 → 29 drawn frames/s on the controlled replay. It removes avoidable scheduling and DOM churn, but leaves geographic background generation occupying almost the entire main thread during dragging.**

The earlier Three.js capture remains a useful reference at approximately 74 drawn frames/s, but **we do not yet have a controlled three-way benchmark**. Its development-build, interactive, animated Space-mode capture differs from the new headless SVG replay. Do not turn the three columns below into renderer speedup ratios.

## Earlier mixed-environment comparison

| Metric | Old SVG, remeasured | Optimized SVG | Three.js, historical reference |
| --- | ---: | ---: | ---: |
| Measurement set | 3 headless replay runs | 3 headless replay runs | 1 earlier DevTools capture |
| Drawn frames/s during dragging | **11.0** | **28.7** | **74.2** |
| Median interval between draws during dragging | 94.2 ms | 33.9 ms | 13.3 ms |
| Mean main-thread map callback during dragging | **41.6 ms** | **31.1 ms** | **4.9 ms** |
| 95th-percentile map callback during dragging | 54.2 ms | 37.7 ms | 8.8 ms |
| Main-thread busy during dragging | **49.9%** | **98.1%** | **45.8%** |
| Tasks >50 ms, by recording | 6, 5, 4 | 3, 0, 1 | 0 |
| Measured sequence/recording duration | 5.77–5.81 s | 5.50–5.55 s | 13.95 s |
| Original SVG tick nodes retained after replay | 0 / 288 | 288 / 288 | Not applicable: numeric line geometry |

SVG summary statistics are medians of per-run statistics. Callback times are inclusive elapsed main-thread durations, not complete frame or GPU execution times. Main-thread occupancy is a union of task intervals within actual drag windows. Long-task counts exclude profiler startup; raw counts across different recording lengths/workloads are not a controlled comparison.

**Why the old SVG callback is now 41.6 ms, not the previous slide's 30.9 ms:** the original SVG capture and the new baseline were taken under different conditions. Use **41.6 → 31.1 ms** for the SVG optimization comparison. Comparing the original 30.9 ms directly with the new 31.1 ms would falsely suggest no improvement. Similar ~11 FPS in both baseline recordings does not calibrate away the other differences; the fixed throttle strongly influences that number.

## What the controlled SVG comparison establishes

### 1. Substantial improvements without changing renderer

- Draw throughput increased **2.61×** (11.00 → 28.67 draws/s). The ranges are narrow and non-overlapping: 10.91–11.01 before, 27.85–28.87 after.
- Mean drag callback duration decreased approximately **25%**; p95 decreased approximately **31%**.
- Median selection click dispatch decreased **110.3 → 46.1 ms**; reported click duration through presentation decreased **121.6 → 55.4 ms**. These pool the six actual selection clicks per version, not the clicks emitted at drag release. They are not page-level INP measurements.
- Original tick-node retention went **0 → 288 out of 288**. All 25 original marker nodes survived in both versions.
- Peak reported DOM nodes decreased **8,659 → 2,061**, but this is predominantly a churn result, not deletion of visible content: final connected element counts are approximately **1,129–1,130 before versus 1,131 after**. Trace node counters also include text and detached/uncollected nodes.

The frozen initial geometry snapshots are byte-identical. The inspected optimized source preserves the full Milky Way data import, stereographic projection and `precision(0.2)`, and continues generating SVG paths. It does not substitute a texture, affine background transform, or reduced-detail geometry.

There is an important attribution limit even within this replay: **the old implementation drops movement; the new implementation accumulates it correctly**. Identical synthetic mouse gestures therefore traverse different geographic views. The observed callback reduction cannot be attributed entirely to faster computation at identical camera angles. It is a comparison of application behavior under the same input replay, including a correctness fix.

### 2. Removing the throttle exposes the remaining bottleneck

The old cadence is consistent with roughly **50 ms waiting + 42 ms updating**, plus browser/scheduling work. Removing that wait increases throughput, but a **31 ms callback alone still exceeds the 16.7 ms budget for 60 Hz**.

The optimized main thread is occupied for **97.8–98.4% of the drag windows**. It is doing more useful updates, but has almost no remaining headroom for input and other UI work during those drags. Fewer >50 ms tasks does not mean frames fit a 60 Hz budget.

`updateBackgroundElements` accounts for **99.3–99.5% of sampled inclusive `render` time** after optimization. Geographic projection, clipping, and path generation remain the dominant work. The remaining problem is no longer well described as unstable joins or unnecessary store-triggered redraws. Nor is it evidence that the 25 event markers overwhelm the DOM.

This does not establish an absolute SVG limit or prove that no further optimization is possible. It establishes that **this corrected, full-detail SVG approach still misses the target**. Further meaningful gains need to address the expensive background calculation/representation, rather than only its small surrounding overhead.

### 3. Throughput improved; total work and allocation did not disappear

- Whole-sequence main-thread occupancy increases **43.0% → 72.6%**.
- Median main-thread minor/major GC elapsed time increases **57 → 129 ms per sequence**, and collection count **53 → 106**. More frames generate more paths and allocations; stable DOM nodes do not eliminate path-string allocation.
- Peak JS heap is inconsistent: before **97.2–97.6 MiB**, after **61.0–154.2 MiB**. Do not claim a reliable heap saving.
- Optimized SVG still has **3, 0, and 1 long tasks** across the three recordings. Do not cherry-pick the zero-long-task run as the universal result.

## What Three.js adds to the story

The historical Three.js implementation changes the background representation to a texture-backed shader and uses frame-scheduled numeric geometry updates. It still uses D3 and CPU-side geographic calculations for other parts of the map.

Its recorded drag callbacks fit comfortably within a typical frame budget on average, unlike either measured SVG implementation. However, claims such as **“Three.js is 2.6× faster than optimized SVG”** or **“uses half the CPU”** are not justified by mixing these measurement sets.

Latency is especially unsafe to rank across the sets: the historical Three.js selection clicks took approximately **80–85 ms** through presentation, versus the new SVG replay's **55.4 ms median**. That does not establish an SVG latency win: synthetic headless presentation, development/production builds, interaction trajectories, and animation workload differ. Smooth throughput and input-to-presentation latency are separate measurements.

## Review and validation status

I re-ran the supplied analyzer against all **six clean traces** and reproduced `metrics-clean.json` exactly. I also checked trace window/thread/frame/sample consistency, independently recomputed the historical Three.js drag rate and callback statistics, inspected the frozen optimized renderer/component, and confirmed the initial geometry snapshots match.

The supplied logs show a passing real-Chromium SVG regression check, five passing existing ingestion-selection tests, and the report records a successful build. The additional browser smoke-test artifact reports no errors and no post-GC growth across repeated teardown/remount cycles. These application checks were reviewed, not re-run as part of this comparison.

Remaining validation limits:

- **Inspect → full event detail remains blocked** by the reported API/detail-component errors. This is not a completely validated end-to-end application flow.
- The backend runner result contains **zero discovered specs**, not a passing backend suite. Database integration tests were not run.
- Continuous pointer-move-to-presentation latency is not measured by this report.
- This review checks the performance evidence and the relevant implementation strategy; it is not a full application correctness/security audit.

## Implication for the talk

This is a stronger case study than the original two-way comparison:

> “We went back and optimized the SVG implementation. That took dragging from about 11 to 29 frames per second without reducing detail. But background generation still took about 31 milliseconds per update. That helped explain the benefit of changing how we represented and rendered that background, while keeping D3's mathematics.”

The lesson is **profile → fix avoidable work → identify the remaining expensive calculation → choose an appropriate representation**. It is not “SVG is always slow,” “all the old problems were inevitable,” or “a large number of event markers exceeded a universal DOM limit.”

Keep the existing original before/after slide labelled as those captures. Before presenting an unqualified three-way benchmark, run Three.js through the same fixed-data/headless replay and build settings. Use Graphic mode with decorative motion off for the closer visual comparison, then measure Space mode separately to demonstrate the additional capability. If physical-display smoothness is the headline, repeat all versions in the same interactive browser/display setup instead.

## Sources and preservation

- Original comparison: [comparison.md](comparison.md).
- Application report: `/home/jacob/dev/usra/portal-to-the-universe/tests/svg-performance.md`.
- New traces: `/tmp/usra-svg-optimization-20260905/{before,after}/svg-*-clean-{1,2,3}.json.gz`.
- New metrics/method: `metrics-clean.json`, `analyze.py`, `record.mjs`, and the per-run `.meta.json` files in that artifact directory.
- Historical Three.js: [three-js-version.json.gz](three-js-version.json.gz).

The new artifacts are under `/tmp`; archive the six clean traces, fixture, metrics, reproduction scripts, and validation report before cleanup. Do not copy the entire artifact directory blindly: it also contains browser profiles, caches, and unrelated browser state. No application code or slide content was changed by this review.
