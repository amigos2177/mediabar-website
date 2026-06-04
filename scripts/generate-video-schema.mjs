import { writeFileSync } from "node:fs";
const [out, ...ids] = process.argv.slice(2);
function isoDuration(sec) {
  const m = Math.floor(sec / 60), s = sec % 60;
  return `PT${m}M${s}S`;
}
const videos = [];
const failed = [];
for (const id of ids) {
  try {
    const r = await fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${id}&width=1280`);
    if (!r.ok) { failed.push(`${id} (${r.status})`); continue; }
    const d = await r.json();
    videos.push({
      name: d.title,
      description: (d.description || "").trim() || undefined,
      thumbnailUrl: d.thumbnail_url,
      uploadDate: (d.upload_date || "").split(" ")[0],
      duration: isoDuration(d.duration),
      embedUrl: `https://player.vimeo.com/video/${id}`,
    });
    await new Promise(res => setTimeout(res, 150));
  } catch (e) { failed.push(`${id} (${e.message})`); }
}
writeFileSync(out, JSON.stringify(videos, null, 2));
console.log(`Wrote ${videos.length} videos to ${out}`);
if (failed.length) console.log(`Failed (${failed.length}): ${failed.join(", ")}`);
