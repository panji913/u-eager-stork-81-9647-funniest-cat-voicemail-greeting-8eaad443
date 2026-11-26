import { mkdirSync, writeFileSync } from "node:fs";

// Funniest cat voicemail greeting: one line, at most 120 characters.
// A cat, a box, and a total refusal to move — spoken aloud in seconds.
const GREETING =
  "Hi, you've reached Pickles. I'm in the box your parcel came in. Leave a message after the beep — I'll sit on that too.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", GREETING, "utf8");
console.log(`Wrote ${GREETING.length} characters to /output/entry.txt`);
