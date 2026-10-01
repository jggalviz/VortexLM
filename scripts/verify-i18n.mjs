// scripts/verify-i18n.mjs
//
// Comprobación de integridad del sistema i18n:
//   • toda clave referenciada en el código (data-i18n*, t(), translate(),
//     keyFor() y las claves dinámicas por índice) existe en el diccionario `es`;
//   • `es` y `en` tienen exactamente el mismo conjunto de claves.
//
// Uso: node scripts/verify-i18n.mjs
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const UI_PATH = path.join(ROOT, 'src', 'i18n', 'ui.ts');
const IGNORED = new Set(['node_modules', 'dist', '.vercel', '.astro', '.git', 'public', 'images']);
const EN_MARKER = 'export const en';

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (IGNORED.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

const keysOf = (source) => {
  const found = new Set();
  for (const match of source.matchAll(/^\s*'([^']+)':/gm)) found.add(match[1]);
  return found;
};

const ui = fs.readFileSync(UI_PATH, 'utf8');
const splitAt = ui.indexOf(EN_MARKER);
const esKeys = keysOf(ui.slice(0, splitAt));
const enKeys = keysOf(ui.slice(splitAt));

// Claves construidas por índice en tiempo de render (no literales en el código).
const DYNAMIC_KEYS = [
  ...[0, 1, 2, 3].map((i) => `home.project.feature.${i}`),
  ...[0, 1, 2].flatMap((i) => [`home.project.kpi.${i}.label`, `home.project.kpi.${i}.value`, `home.project.kpi.${i}.hint`]),
  ...[0, 1, 2].flatMap((i) => [`home.project.agenda.${i}.patient`, `home.project.agenda.${i}.status`]),
  ...[0, 1, 2, 3, 4].map((i) => `home.project.tag.${i}`),
];

const used = new Set(DYNAMIC_KEYS);
const sources = walk(path.join(ROOT, 'src')).filter(
  (file) => /\.(astro|tsx|ts)$/.test(file) && !file.includes(path.join('i18n', ''))
);

for (const file of sources) {
  const source = fs.readFileSync(file, 'utf8');
  for (const match of source.matchAll(/data-i18n(?:-placeholder|-title|-aria-label|-doc-title|-meta-description)?="([^"]+)"/g)) {
    used.add(match[1]);
  }
  for (const match of source.matchAll(/(?:[^A-Za-z0-9_$.]|^)(?:t|translate)\(\s*'([^']+)'/g)) {
    used.add(match[1]);
  }
  for (const match of source.matchAll(/keyFor\('([^']+)'\)/g)) {
    used.add(`home.project.${match[1]}`);
  }
  // Props de layout que transportan claves (no van en atributos data-i18n*).
  for (const match of source.matchAll(/(?:titleKey|descriptionKey)="([^"]+)"/g)) {
    used.add(match[1]);
  }
}

const missingInEs = [...used].filter((key) => !esKeys.has(key));
const missingInEn = [...esKeys].filter((key) => !enKeys.has(key));
const extraInEn = [...enKeys].filter((key) => !esKeys.has(key));
const unreferenced = [...esKeys].filter((key) => !used.has(key));

console.log(`i18n: ${esKeys.size} claves en es, ${enKeys.size} claves en en, ${used.size} referenciadas`);
if (missingInEs.length) console.log(`  MISSING in es: ${missingInEs.join(', ')}`);
if (missingInEn.length) console.log(`  MISSING in en: ${missingInEn.join(', ')}`);
if (extraInEn.length) console.log(`  EXTRA in en: ${extraInEn.join(', ')}`);
if (unreferenced.length) console.log(`  sin referencia (reservadas): ${unreferenced.join(', ')}`);

const ok = missingInEs.length === 0 && missingInEn.length === 0 && extraInEn.length === 0;
console.log(ok ? 'i18n: OK' : 'i18n: FAILED');
if (!ok) process.exitCode = 1;
