// MAKEFUN Coding Competition Entrypoint
// Entry validated: output is 1-140 chars, one line, deterministic.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE = "I hold your deepest kitchen secrets and right now your secret is a cold hot dog over the sink.";

if (!(1 <= LINE.length && LINE.length <= 140 && LINE.trim().length > 0 && !LINE.includes("\n"))) {
  throw new Error("Validation failed");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });

const outputPath = join(outputDir, "entry.txt");
writeFileSync(outputPath, LINE, "utf-8");

console.log(outputPath);
console.log(LINE.length);
