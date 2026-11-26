import { mkdirSync, writeFileSync } from "node:fs";

// Sorry, I Heard That Wrong — one-line smart-speaker apology (gate: 1-140 chars).
const line =
  "Sorry, I heard 'add oat milk to the list'. I added a goat. It arrives Friday. It is named Oat.";

// The gate only accepts 1-140 characters: refuse to write an over-long line.
if (line.length < 1 || line.length > 140) {
  throw new Error(`entry is ${line.length} characters, gate needs 1-140`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
