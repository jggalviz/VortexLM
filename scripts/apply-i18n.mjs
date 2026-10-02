// scripts/apply-i18n.mjs
//
// Herramienta de mantenimiento (apoyo al trabajo de i18n) para conectar
// `data-i18n` en las secciones que aún renderizan texto fijo en español.
//
// Uso:  node scripts/apply-i18n.mjs .tmp/i18n-spec.json [--check]
//
// El spec es un objeto { "ruta/archivo.astro": [operaciones] } y cada
// operación declara UN nodo de texto junto con la clave del diccionario:
//
//   { "wrap": "<texto>", "key": "…" }
//        envuelve el texto en <span data-i18n="clave">…</span>.
//   { "wrap": "<texto>", "exact": true, "key": "…" }
//        sólo acepta coincidencias donde el NODO de texto (contenido entre
//        `>` y `<`, sin espacios) es exactamente `<texto>`. Es el modo
//        recomendado: descarta comentarios, atributos y coincidencias
//        parciales dentro de otros nodos.
//   { "wrapAll": "<texto>", "key": "…" }
//        envuelve TODAS las apariciones (textos repetidos: "Ver más").
//   { "node": "<prefijo del texto>", "key": "…" }
//        añade el atributo a la etiqueta contenedora cuando el texto es su
//        primer hijo y no hay marcado anidado (párrafos largos multilínea).
//   { "attr": "<etiqueta de apertura>", "key": "…" }
//        añade el atributo a esa etiqueta concreta, antes de su `>`.
//   { "aria": "<atributo aria-label…>", "key": "…" }
//        añade data-i18n-aria-label="clave" justo tras ese atributo.
//   { "replaceRe": "<regex>", "with": "<reemplazo>" }
//        saneado puntual (p. ej. mojibake) que no genera clave.
//
// Zonas ignoradas: frontmatter, comentarios HTML, <style>, <script> y valores
// entrecomillados (atributos). Cada anclaje debe resolver a UNA sola
// coincidencia; si no, el script NO escribe el archivo y reporta con contexto.
// Con `--check` sólo valida, sin modificar archivos.

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const specPath = process.argv[2];
const check = process.argv.includes('--check');

if (!specPath) {
  console.error('uso: node scripts/apply-i18n.mjs <spec.json> [--check]');
  process.exit(2);
}

const spec = JSON.parse(fs.readFileSync(path.resolve(ROOT, specPath), 'utf8'));

/** Rangos [inicio, fin) de zonas donde nunca buscamos nodos de texto. */
const ignoredRanges = (src) => {
  const ranges = [];
  const add = (pattern) => {
    for (const match of src.matchAll(pattern)) {
      ranges.push([match.index, match.index + match[0].length]);
    }
  };
  const frontmatter = src.match(/^---[\s\S]*?\n---/);
  if (frontmatter) ranges.push([0, frontmatter[0].length]);
  add(/<!--[\s\S]*?-->/g);
  add(/<style[\s\S]*?<\/style>/g);
  add(/<script[\s\S]*?<\/script>/g);
  return ranges;
};

/** Rangos [inicio, fin) de valores entrecomillados (contenido de atributos). */
const quotedRanges = (src) => {
  const ranges = [];
  for (const match of src.matchAll(/"[^"]*"/g)) {
    ranges.push([match.index, match.index + match[0].length]);
  }
  return ranges;
};

const inRanges = (ranges, index) => ranges.some(([start, end]) => index >= start && index < end);

/** Contexto legible alrededor de una coincidencia, para depurar anclajes. */
const context = (src, index, length) => {
  const clip = (value) => value.replace(/\s+/g, ' ').slice(0, 72);
  const before = src.slice(Math.max(0, index - 72), index);
  const after = src.slice(index + length, index + length + 72);
  return `${clip(before)} ⟦${src.slice(index, index + length)}⟧ ${clip(after)}`;
};

/** Posiciones válidas de `needle` según los filtros activos. */
const findPositions = (src, needle, { ignore = [], quotes = [], skipQuotes = true }) => {
  const positions = [];
  for (let i = src.indexOf(needle); i !== -1; i = src.indexOf(needle, i + 1)) {
    if (inRanges(ignore, i)) continue;
    if (skipQuotes && inRanges(quotes, i)) continue;
    positions.push(i);
  }
  return positions;
};

/** ¿El texto constituye el nodo completo (contenido entre `>` y `<`)? */
const isExactNode = (src, index, text, normalize = false) => {
  const nodeStart = src.lastIndexOf('>', index) + 1;
  const nodeEnd = src.indexOf('<', index + text.length);
  if (nodeEnd < 0) return false;
  const clean = (value) => (normalize ? value.replace(/\s+/g, ' ').trim() : value.trim());
  const expected = normalize ? text.replace(/\s+/g, ' ').trim() : text.trim();
  return clean(src.slice(nodeStart, nodeEnd)) === expected;
};

/** Convierte un texto normalizado en una regex tolerante a los saltos de línea. */
const flexRegex = (text) => {
  const escape = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(text.trim().split(/\s+/).map(escape).join('\\s+'), 'g');
};

/** Coincidencias { index, text } del anclaje, con o sin tolerancia de espacios. */
const findMatches = (src, needle, { ignore = [], quotes = [], norm = false, skipQuotes = true }) => {
  const matches = [];
  if (norm) {
    for (const match of src.matchAll(flexRegex(needle))) {
      matches.push({ index: match.index, text: match[0] });
    }
  } else {
    for (let i = src.indexOf(needle); i !== -1; i = src.indexOf(needle, i + 1)) {
      matches.push({ index: i, text: needle });
    }
  }
  return matches.filter(
    (match) => !inRanges(ignore, match.index) && !(skipQuotes && inRanges(quotes, match.index))
  );
};


let applied = 0;
let failed = 0;

for (const [rel, ops] of Object.entries(spec)) {
  const abs = path.resolve(ROOT, rel);
  let source = fs.readFileSync(abs, 'utf8');
  const before = source;
  const problems = [];

  for (const op of ops) {
    const { key } = op;
    // Se recalculan en cada operación: un wrap anterior desplaza posiciones.
    const ignore = ignoredRanges(source);
    const quotes = quotedRanges(source);

    const report = (message, needle, accepted, extra = '') => {
      failed += 1;
      problems.push(message + extra);
      for (const i of findPositions(source, needle, { skipQuotes: false })) {
        problems.push(`    ↳${accepted.includes(i) ? '*' : ' '} ${context(source, i, needle.length)}`);
      }
    };

    if (op.wrap !== undefined || op.wrapAll !== undefined) {
      const all = op.wrapAll !== undefined || op.all === true;
      const text = (op.wrapAll ?? op.wrap ?? '').trim();
      const needle = (op.needle ?? text).trim();
      if (source.includes(`data-i18n="${key}"`)) continue; // ya cableado
      let matches = findMatches(source, needle, {
        ignore,
        quotes,
        norm: Boolean(op.norm),
        skipQuotes: !needle.includes('"'),
      });
      if (op.exact) {
        matches = matches.filter((match) => isExactNode(source, match.index, match.text, Boolean(op.norm)));
      }
      if (op.before) matches = matches.filter((match) => source.startsWith(op.before, match.index + match.text.length));
      if (op.after) matches = matches.filter((match) => source.slice(match.index - op.after.length, match.index) === op.after);
      if (!all && matches.length !== 1) {
        report(
          `wrap key=${key} ocurrencias=${matches.length} texto=${JSON.stringify(needle)}`,
          needle,
          matches.map((match) => match.index),
          op.exact ? ' (exact)' : ''
        );
        continue;
      }
      if (all && matches.length === 0) {
        report(`wrapAll key=${key} sin ocurrencias texto=${JSON.stringify(needle)}`, needle, []);
        continue;
      }
      // Se reemplaza de derecha a izquierda para no desplazar los índices.
      for (const match of [...matches].reverse()) {
        const patched = `<span data-i18n="${key}">${match.text}</span>`;
        source = source.slice(0, match.index) + patched + source.slice(match.index + match.text.length);
        applied += 1;
      }
      continue;
    }

    if (op.node !== undefined) {
      const prefix = op.node;
      const positions = findPositions(source, prefix, { ignore, quotes });
      if (positions.length !== 1) {
        report(`node key=${key} ocurrencias=${positions.length} prefijo=${JSON.stringify(prefix)}`, prefix, positions);
        continue;
      }
      const textIndex = positions[0];
      const tagEnd = source.lastIndexOf('>', textIndex);
      const tagStart = source.lastIndexOf('<', tagEnd);
      const between = source.slice(tagEnd + 1, textIndex);
      const tag = source.slice(tagStart, tagEnd + 1);
      if (between.trim() !== '' || tag.startsWith('</') || tag.startsWith('<!--') || tag.endsWith('/>')) {
        report(`node key=${key} etiqueta no utilizable ${JSON.stringify(tag.slice(0, 48))}`, prefix, positions);
        continue;
      }
      if (tag.includes('data-i18n')) continue;
      source = source.slice(0, tagEnd) + ` data-i18n="${key}"` + source.slice(tagEnd);
      applied += 1;
      continue;
    }

    if (op.attr !== undefined) {
      const tag = op.attr;
      const positions = findPositions(source, tag, { ignore, skipQuotes: false });
      if (positions.length !== 1 || !tag.endsWith('>')) {
        report(`attr key=${key} ocurrencias=${positions.length} tag=${JSON.stringify(tag)}`, tag, positions);
        continue;
      }
      const at = positions[0];
      const patched = `${tag.slice(0, -1)} data-i18n="${key}">`;
      source = source.slice(0, at) + patched + source.slice(at + tag.length);
      applied += 1;
      continue;
    }

    if (op.aria !== undefined || op.mark !== undefined) {
      const attr = op.aria ?? op.mark;
      const as = op.as ?? 'data-i18n-aria-label';
      let matches = findMatches(source, attr, { ignore, skipQuotes: false });
      if (op.before) matches = matches.filter((m) => source.startsWith(op.before, m.index + m.text.length));
      if (op.after) matches = matches.filter((m) => source.slice(m.index - op.after.length, m.index) === op.after);
      if (op.then !== undefined) matches = matches.filter((m) => source.startsWith(op.then, m.index + m.text.length));
      if (matches.length !== 1) {
        report(`${op.mark ? 'mark' : 'aria'} key=${key} ocurrencias=${matches.length} attr=${JSON.stringify(attr)}`, attr, matches.map((m) => m.index));
        continue;
      }
      const at = matches[0].index;
      source = source.slice(0, at) + `${attr} ${as}="${key}"` + source.slice(at + attr.length);
      applied += 1;
      continue;
    }

    if (op.replaceRe !== undefined) {
      const re = new RegExp(op.replaceRe, 'g');
      const hits = [...source.matchAll(re)];
      if (hits.length !== 1) {
        report(`replaceRe ocurrencias=${hits.length} patrón=${op.replaceRe}`, op.replaceRe, []);
        continue;
      }
      source = source.replace(re, op.with);
      applied += 1;
      continue;
    }

    failed += 1;
    problems.push('operación sin modo válido (wrap/wrapAll/node/attr/aria/replaceRe)');
  }

  if (problems.length) {
    console.error(`\n✗ ${rel}`);
    for (const problem of problems) console.error(`    ${problem}`);
    continue;
  }

  if (source !== before && !check) {
    fs.writeFileSync(abs, source, 'utf8');
    console.log(`✓ ${rel} (${ops.length} nodos)`);
  } else {
    console.log(`= ${rel} (sin cambios)`);
  }
}

console.log(`\naplicados: ${applied}  problemas: ${failed}`);
if (failed) process.exitCode = 1;

