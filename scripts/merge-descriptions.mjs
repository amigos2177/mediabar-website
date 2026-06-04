// Fills missing descriptions in data/work-videos.json from data/video-descriptions.json.
// Only fills blanks — never overwrites a description already present.
import { readFileSync, writeFileSync } from "node:fs";
const work = JSON.parse(readFileSync("data/work-videos.json", "utf8"));
const map = JSON.parse(readFileSync("data/video-descriptions.json", "utf8"));
let filled = 0;
for (const v of work) {
  const id = (v.embedUrl || "").split("/").pop();
  if (map[id] && (!v.description || !v.description.trim())) {
    v.description = map[id];
    filled++;
  }
}
writeFileSync("data/work-videos.json", JSON.stringify(work, null, 2));
console.log(`Filled ${filled} descriptions in data/work-videos.json`);
