// scripts/check-select-i18n.mjs
//
// Guard de una clase de defecto que ni `lint.mjs` ni `verify-i18n.mjs` pueden
// ver: un marcador `data-i18n*` dentro de un `<select>` solo sobrevive si vive
// en el propio `<option>`/`<optgroup>`. El parser HTML aplica las mismas reglas
// que el navegador y descarta cualquier otro elemento mientras está "in
// select", de modo que
//
//   <option value=""><span data-i18n="form.n04">Elige…</span></option>
//
// llega al DOM como `<option value="">Elige…</option>`: el nodo marcado
// desaparece y `document.querySelectorAll('[data-i18n]')` del motor i18n nunca
// lo traduce. La forma correcta es marcar el propio `<option>`:
//
//   <option value="" data-i18n="form.n04">Elige…</option>
//
// Uso: node scripts/check-select-i18n.mjs
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const IGNORED = new Set(['node_modules', 'dist', '.vercel', '.astro', '.git', 'public', 'images', '.tmp']);
const EXT = new Set(['.astro', '.tsx', '.jsx', '.html', '.vue', '.svelte']);
// Elementos que el modo "in select" del parser sí conserva.
const ALLOWED_IN_SELECT = new Set(['option', 'optgroup', 'hr', 'script', 'template', 'select']);

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (IGNORED.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (EXT.has(path.extname(entry.name))) files.push(full);
  }
  return files;
}

const files = walk(path.join(ROOT, 'src'));
const problems = [];
let selects = 0;
let markers = 0;

/** Nº de marcadores `data-i18n*` presentes en un fragmento. */
const markersIn = (text) => (text.match(/data-i18n(?:-[a-z-]+)?=/g) ?? []).length;

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  const rel = path.relative(ROOT, file).replace(/\\/g, '/');

  for (const block of source.matchAll(/<select[\s\S]*?<\/select>/g)) {
    selects += 1;
    const base = block.index;
    const html = block[0];
    const total = markersIn(html);
    if (!total) continue;
    markers += total;
    let attached = 0;
    let inOtherTags = 0;

    // Atributos con comillas (que pueden contener `>`) o sin ellas, para no
    // cortar el tag antes de tiempo.
    for (const tag of html.matchAll(/<([a-zA-Z][\w:.-]*)((?:"[^"]*"|'[^']*'|[^>"'])*)>/g)) {
      const count = markersIn(tag[0]);
      if (!count) continue;
      if (ALLOWED_IN_SELECT.has(tag[1].toLowerCase())) {
        attached += count;
        continue;
      }
      inOtherTags += count;
      const line = source.slice(0, base + tag.index).split('\n').length;
      problems.push(`${rel}:${line} <${tag[1]}> con marcador dentro de <select> (usar <option data-i18n="…">)`);
    }

    // Marcadores que no pertenecen a ningún tag: quedaron como texto (p. ej.
    // `<option …> data-i18n="x">…`), síntoma de un wrap mal aplicado.
    const stray = total - attached - inOtherTags;
    if (stray > 0) {
      const line = source.slice(0, base).split('\n').length;
      problems.push(`${rel}:${line} <select> con ${stray} marcador(es) suelto(s) fuera de un tag`);
    }
  }
}

console.log(`select-i18n: ${files.length} ficheros, ${selects} <select>, ${markers} marcadores`);
for (const problem of problems) console.log(`  FIX ${problem}`);
console.log(problems.length ? 'select-i18n: FAILED' : 'select-i18n: OK');
if (problems.length) process.exitCode = 1;
