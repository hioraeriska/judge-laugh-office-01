// Office joke entry for "Make the AI Judge Laugh".
// The program writes one line about office life to /output/entry.txt.
// Deterministic: the same single line on every run, no randomness, no input.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The office printer only jams when the document is urgent, so I've started telling it my deadline is next month.";

if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`entry line must be 1-200 chars, got ${JOKE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
