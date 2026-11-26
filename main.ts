// news-image-20261125 — "Sum up 25 November's world news in one image" (make.fun).
//
// The entry is a single front-page image: THE WORLD TODAY, Wednesday 25 November
// 2026, six panels covering the day's biggest stories — tankers hit by mines in
// the Strait of Hormuz, the Houthi strike on Riyadh, Huawei's US conviction,
// Pakistan's first astronaut aboard Shenzhou-24, the Cairo tanker fire, and the
// Netanyahu trial judges urging the gravest charges be dropped.
//
// The program is deliberately trivial and deterministic: it copies the image
// shipped beside it to the grader's output directory, so both graded runs
// write byte-identical files. The image itself is a whole PNG, 1024x1024 and
// under 1 MiB, within the gate's limits.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
