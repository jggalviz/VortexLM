// scripts/i18n-debug.mjs — diagnóstico temporal de rangos ignorados.
import fs from 'node:fs';

const file = process.argv[2];
const src = fs.readFileSync(file, 'utf8');
const clip = (v) => v.replace(/\s+/g, ' ').slice(0, 60);

const ranges = [];
const add = (label, pattern) => {
  for (const m of src.matchAll(pattern)) ranges.push([label, m.index, m.index + m[0].length, clip(m[0])]);
};
const fm = src.match(/^---[\s\S]*?\n---/);
if (fm) ranges.push(['frontmatter', 0, fm[0].length, clip(fm[0])]);
add('comment', /<!--[\s\S]*?-->/g);
add('style', /<style[\s\S]*?<\/style>/g);
add('script', /<script[\s\S]*?<\/script>/g);
add('quote', /"[^"]*"/g);

ranges.sort((a, b) => a[1] - b[1]);
for (const [label, start, end, text] of ranges) {
  console.log(`${label.padEnd(11)} ${String(start).padStart(6)}-${String(end).padStart(6)} len=${String(end - start).padStart(6)}  ${text}`);
}

for (const needle of process.argv.slice(3)) {
  console.log(`\n== ${needle}`);
  for (let i = src.indexOf(needle); i !== -1; i = src.indexOf(needle, i + 1)) {
    const hit = ranges.find(([, a, b]) => i >= a && i < b);
    const tagStart = src.lastIndexOf('>', i) + 1;
    const nodeEnd = src.indexOf('<', i + needle.length);
    const raw = nodeEnd < 0 ? '<sin cierre>' : JSON.stringify(src.slice(tagStart, nodeEnd).trim());
    console.log(`  pos=${i} enRango=${hit ? hit[0] : 'no'} nodo=${raw}`);
  }
}
