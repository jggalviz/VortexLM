#!/usr/bin/env node
// scripts/i18n-bootstrap.mjs
// Genera un spec de cableado (data-i18n) para ficheros .astro a partir de sus
// nodos de texto/atributos, y opcionalmente inserta las entradas ES/EN en
// src/i18n/ui.ts. Idempotente: los nodos ya cableados se ignoran y la
// numeración de claves continúa desde las claves existentes en el diccionario.
//
// Uso:
//   node scripts/i18n-bootstrap.mjs --targets .tmp/i18n-targets.json
//   node scripts/i18n-bootstrap.mjs --targets .tmp/i18n-targets.json --apply
//
// Salidas:
//   .tmp/i18n-spec-auto.json   → ops compatibles con scripts/apply-i18n.mjs
//   .tmp/i18n-dict-es.json     → { key: texto original (ES) }
//   .tmp/i18n-review.txt       → revisión humana (fichero · etiqueta · clave · texto)
//   .tmp/i18n-missing-en.json  → claves sin traducción EN en .tmp/i18n-dict-en.json

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const arg = (name, fallback = null) => {
  const i = args.indexOf(name);
  return i === -1 ? fallback : args[i + 1];
};

const targetsPath = arg('--targets', '.tmp/i18n-targets.json');
const specPath = arg('--out', '.tmp/i18n-spec-auto.json');
const apply = flag('--apply');

const targets = JSON.parse(fs.readFileSync(path.resolve(ROOT, targetsPath), 'utf8'));
const uiPath = path.resolve(ROOT, 'src/i18n/ui.ts');
let uiSource = fs.readFileSync(uiPath, 'utf8');
const enFile = path.resolve(ROOT, '.tmp/i18n-dict-en.json');
const enDict = fs.existsSync(enFile) ? JSON.parse(fs.readFileSync(enFile, 'utf8')) : {};

// Nombres propios / tecnologías que no se traducen (comparados en minúsculas).
const SKIP = new Set(
  [
    'vCredits', 'Astro', 'React', 'Next.js', 'Nextjs', 'Tailwind CSS', 'Tailwind',
    'TypeScript', 'JavaScript', 'WordPress', 'WooCommerce', 'ACF', 'Gutenberg',
    'PHP', 'PHP 8+', 'Webhooks', 'REST APIs', 'REST API', 'GraphQL', 'Node.js',
    'Python', 'Stripe', 'PayPal', 'GA4', 'GTM', 'SEO', 'FAQ', 'FAQPage',
    'Starter', 'Growth', 'Scale', 'Binance Pay', 'Google', 'Meta Ads', 'ACH',
    'SEPA', 'HTML', 'CSS', 'API', 'SaaS', 'UI', 'UX', 'B2B', 'NDA', 'HTTP',
    'JS', 'TS', 'VortexLM', 'Vortex Logic LLC', 'White Label', 'WHITE LABEL',
    'Schema.org', 'JSON-LD', 'Core Web Vitals', 'Lighthouse', 'GTmetrix',
    'Hostinger', 'Cloudflare', 'GitHub', 'Vercel', 'Netlify', 'Figma', 'Slack',
  ].map((token) => token.toLowerCase())
);

const hasLetters = (text) => /[A-Za-zÀ-ÖØ-öø-ÿ]/.test(text);
const normalize = (text) => text.replace(/\s+/g, ' ').trim();

/** Textos que no se cablean: sólo cifras/precios, correos, URLs o siglas cortas. */
const PRICE_ONLY = /^[$€£]?\s*\d[\d.,]*\s*(USD|EUR|GBP|MXN)?\s*$/i;
const EMAIL_OR_URL = /^(\S+@\S+\.\S+|https?:\/\/\S+|www\.\S+)$/i;
const SHORT_CODE = /^[A-Z0-9]{1,3}$/;

/** Corrige el mojibake típico (UTF-8 leído como Latin-1) cuando es reversible. */
const MOJIBAKE = /[\u00c3\u00c2][\u0080-\u00bf]/;
const fixMojibake = (text) => {
  if (!MOJIBAKE.test(text)) return text;
  const candidate = Buffer.from(text, 'latin1').toString('utf8');
  return MOJIBAKE.test(candidate) ? text : candidate;
};

/** Entidades HTML → texto plano (el runtime usa `textContent`, no `innerHTML`). */
const ENTITIES = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', mdash: '—',
  ndash: '–', hellip: '…', laquo: '«', raquo: '»', lsquo: '‘', rsquo: '’',
  ldquo: '“', rdquo: '”', times: '×', middot: '·', deg: '°', euro: '€',
  hellip_: '…', bull: '•', copy: '©', reg: '®', trade: '™',
};
const decodeEntities = (text) =>
  text.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, (whole, code) => {
    if (code[0] === '#') {
      const hex = code[1] === 'x' || code[1] === 'X';
      const value = Number.parseInt(code.slice(hex ? 2 : 1), hex ? 16 : 10);
      return Number.isNaN(value) ? whole : String.fromCodePoint(value);
    }
    return ENTITIES[code] ?? ENTITIES[code.toLowerCase()] ?? whole;
  });

const translatable = (raw) => {
  const text = normalize(decodeEntities(raw));
  if (!text || !hasLetters(text)) return false;
  if (SKIP.has(text.toLowerCase())) return false;
  if (PRICE_ONLY.test(text) || EMAIL_OR_URL.test(text) || SHORT_CODE.test(text)) return false;
  if (/^\{.*\}$/.test(text)) return false;
  return true;
};

/** Rangos que nunca deben tocarse: frontmatter, comentarios, <style>, <script> y <svg>. */
function ignoredRanges(src) {
  const ranges = [];
  const push = (match, offset) => {
    if (match) ranges.push([offset, offset + match[0].length]);
  };
  const patterns = [
    /^---[\s\S]*?\n---/,
    /<!--[\s\S]*?-->/g,
    /<style[\s\S]*?<\/style>/gi,
    /<script[\s\S]*?<\/script>/gi,
    /<svg[\s\S]*?<\/svg>/gi,
    /<title[\s\S]*?<\/title>/gi,
    /<textarea[\s\S]*?<\/textarea>/gi,
    /<pre[\s\S]*?<\/pre>/gi,
    /<code[\s\S]*?<\/code>/gi,
  ];
  for (const re of patterns) {
    if (!re.global) {
      push(src.match(re), 0);
      continue;
    }
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(src)) !== null) push(m, m.index);
  }
  return ranges;
}

/** Rangos de expresiones Astro `{ ... }` (contenido dinámico, no cableable). */
function expressionRanges(src) {
  const ranges = [];
  for (let i = 0; i < src.length; i += 1) {
    if (src[i] !== '{') continue;
    let depth = 0;
    for (let j = i; j < src.length; j += 1) {
      if (src[j] === '{') depth += 1;
      else if (src[j] === '}') {
        depth -= 1;
        if (depth === 0) {
          ranges.push([i, j + 1]);
          i = j;
          break;
        }
      }
    }
  }
  return ranges;
}

const inRanges = (ranges, index) => ranges.some(([from, to]) => index >= from && index < to);

const VOID_TAGS = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta',
  'param', 'source', 'track', 'wbr', 'path', 'circle', 'rect', 'line', 'polyline',
  'polygon', 'ellipse', 'stop', 'use', 'image', 'DOCTYPE',
]);


const escapeRe = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const escapeTs = (value) => value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

/** Entradas ES ya presentes en ui.ts → Map<clave, valor>. */
function parseEsEntries() {
  const end = uiSource.indexOf('\n} as const;');
  const body = end === -1 ? uiSource : uiSource.slice(0, end);
  const map = new Map();
  const re = /'([A-Za-z0-9_.]+)':\s*(?:\n\s+)?'((?:[^'\\]|\\.)*)'/g;
  let m;
  while ((m = re.exec(body)) !== null) map.set(m[1], m[2].replace(/\\'/g, "'"));
  return map;
}

const esEntries = parseEsEntries();

const nextIndex = (ns, kind) => {
  const re = new RegExp(`'${escapeRe(ns)}\\.${kind}(\\d+)'`, 'g');
  const found = [...uiSource.matchAll(re)].map((m) => Number(m[1]));
  return found.length ? Math.max(...found) + 1 : 1;
};

const pad = (n) => String(n).padStart(2, '0');

/** Detecta el sufijo mínimo que hace única la ocurrencia del atributo. */
function uniqueAfter(src, at, length) {
  for (let k = 1; k <= 48; k += 1) {
    const suffix = src.slice(at + length, at + length + k);
    if (!suffix) return null;
    const candidate = src.slice(at, at + length + k);
    if (src.split(candidate).length - 1 === 1) return suffix;
  }
  return null;
}

function scanFile(file, ns) {
  const src = fs.readFileSync(path.resolve(ROOT, file), 'utf8');
  const ignore = ignoredRanges(src);
  const expr = expressionRanges(src);
  const tagRe = /<[^<>]*>/g;
  const stack = [];
  const texts = [];
  const attrs = [];
  let cursor = 0;
  let m;
  while ((m = tagRe.exec(src)) !== null) {
    const tagStart = m.index;
    const tag = m[0];
    const tagEnd = tagStart + tag.length;
    const textIndex = cursor;
    const rawText = src.slice(textIndex, tagStart);
    cursor = tagEnd;

    const tagIgnored = inRanges(ignore, tagStart) || inRanges(expr, tagStart);
    if (tagIgnored) continue;

    const wiredAbove = stack.some((entry) => entry.wired);
    if (
      rawText.trim() &&
      !wiredAbove &&
      !inRanges(ignore, textIndex) &&
      !inRanges(expr, textIndex) &&
      translatable(rawText)
    ) {
      texts.push({
        index: textIndex,
        text: fixMojibake(normalize(decodeEntities(rawText))),
        needle: normalize(rawText),
        tag: stack.at(-1)?.name ?? '?',
      });
    }

    if (/^<\//.test(tag)) {
      const name = tag.match(/^<\/\s*([a-zA-Z0-9:-]+)/)?.[1]?.toLowerCase();
      while (stack.length && stack.at(-1).name !== name) stack.pop();
      stack.pop();
    } else {
      const name = tag.match(/^<\s*([a-zA-Z0-9:-]+)/)?.[1]?.toLowerCase() ?? '';
      const selfClosing = /\/>$/.test(tag) || VOID_TAGS.has(name);
      const wired = /\sdata-i18n(-[a-z-]+)?[=\s]/.test(tag);
      if (!selfClosing) stack.push({ name, wired });
      const marks = {
        'aria-label': 'data-i18n-aria-label',
        placeholder: 'data-i18n-placeholder',
        alt: 'data-i18n-alt',
        title: 'data-i18n-title',
      };
      const attrRe = /(aria-label|placeholder|alt|title)="([^"]*)"/g;
      let am;
      while ((am = attrRe.exec(tag)) !== null) {
        const attrString = am[0];
        const attrName = am[1];
        const value = am[2];
        if (tag.includes(marks[attrName])) continue;
        if (!translatable(value)) continue;
        const at = tagStart + am.index;
        const suffix = uniqueAfter(src, at, attrString.length);
        if (!suffix) continue;
        attrs.push({
          attrString,
          suffix,
          as: marks[attrName],
          value: normalize(decodeEntities(value)),
          element: name,
        });
      }
    }
  }
  return { src, texts, attrs, ns };
}

const spec = {};
const newEntries = new Map(); // clave nueva → texto ES
const review = [];
const sections = [];

for (const { file, ns } of targets) {
  const { src, texts, attrs } = scanFile(file, ns);
  const perNs = new Map();
  for (const [key, value] of esEntries) {
    if (key.startsWith(`${ns}.`)) perNs.set(normalize(value), key);
  }
  let counter = nextIndex(ns, 'n');
  const ops = [];
  const grouped = new Map();
  for (const node of texts) {
    const current = grouped.get(node.text);
    if (current) {
      current.count += 1;
      continue;
    }
    grouped.set(node.text, { ...node, count: 1 });
  }
  const created = [];
  for (const [text, node] of grouped) {
    let key = perNs.get(text);
    const isNew = !key;
    if (isNew) {
      key = `${ns}.n${pad(counter++)}`;
      perNs.set(text, key);
      newEntries.set(key, text);
      created.push({ key, value: text, tag: node.tag });
    }
    review.push(`${isNew ? 'NEW' : 'REU'} · ${file} · <${node.tag}> · ${key} · ${text}`);
    const op = {
      key,
      [node.count > 1 ? 'wrapAll' : 'wrap']: text,
      norm: true,
      exact: true,
    };
    if (node.needle && node.needle !== text) op.needle = node.needle;
    ops.push(op);
  }
  // Saneado de mojibake (UTF-8 leído como Latin-1) detectado en nodos de texto.
  for (const node of grouped.values()) {
    if (node.needle === node.text || !MOJIBAKE.test(node.needle)) continue;
    if (src.split(node.needle).length - 1 !== 1) continue; // sólo si es único
    ops.push({ replaceRe: escapeRe(node.needle), with: node.text });
    review.push(`FIX · ${file} · mojibake · ${node.needle} → ${node.text}`);
  }
  for (const attr of attrs) {
    let key = perNs.get(attr.value);
    const isNew = !key;
    if (isNew) {
      key = `${ns}.n${pad(counter++)}`;
      perNs.set(attr.value, key);
      newEntries.set(key, attr.value);
      created.push({ key, value: attr.value, tag: `${attr.element}[${attr.as}]` });
    }
    review.push(
      `${isNew ? 'NEW' : 'REU'} · ${file} · <${attr.element} ${attr.attrString}> · ${key} · ${attr.value}`
    );
    ops.push({ key, mark: attr.attrString, then: attr.suffix, as: attr.as });
  }
  if (ops.length) spec[file] = ops;
  if (created.length) sections.push({ ns, file, entries: created });
}

fs.mkdirSync(path.resolve(ROOT, '.tmp'), { recursive: true });
fs.writeFileSync(path.resolve(ROOT, specPath), `${JSON.stringify(spec, null, 2)}\n`, 'utf8');
fs.writeFileSync(
  path.resolve(ROOT, '.tmp/i18n-dict-es.json'),
  `${JSON.stringify(Object.fromEntries(newEntries), null, 2)}\n`,
  'utf8'
);
fs.writeFileSync(
  path.resolve(ROOT, '.tmp/i18n-review.txt'),
  `${review.join('\n')}\n`,
  'utf8'
);

const missingEn = {};
for (const [key, value] of newEntries) if (!enDict[key]) missingEn[key] = value;
fs.writeFileSync(
  path.resolve(ROOT, '.tmp/i18n-missing-en.json'),
  `${JSON.stringify(missingEn, null, 2)}\n`,
  'utf8'
);

const formatEntry = (key, value) => {
  const single = `  '${key}': '${escapeTs(value)}',`;
  return single.length <= 100 ? single : `  '${key}':\n    '${escapeTs(value)}',`;
};

if (apply) {
  const esBlock = sections
    .map(
      (section) =>
        `\n  // ── ${section.file} ──\n` +
        section.entries.map((entry) => formatEntry(entry.key, entry.value)).join('\n')
    )
    .join('\n');
  const esAnchor = '\n} as const;';
  const esAt = uiSource.indexOf(esAnchor);
  if (esAt === -1) throw new Error('No se encontró el cierre del diccionario ES en src/i18n/ui.ts');
  uiSource = uiSource.slice(0, esAt) + esBlock + uiSource.slice(esAt);

  const enSections = sections
    .map((section) => {
      const lines = section.entries
        .filter((entry) => enDict[entry.key])
        .map((entry) => formatEntry(entry.key, enDict[entry.key]));
      return lines.length ? `\n  // ── ${section.file} ──\n${lines.join('\n')}` : '';
    })
    .join('\n');
  const marker = '/** Catálogo completo indexado por locale. */';
  const markerAt = uiSource.indexOf(marker);
  const enAt = uiSource.lastIndexOf('};', markerAt);
  if (markerAt === -1 || enAt === -1) throw new Error('No se encontró el cierre del diccionario EN en src/i18n/ui.ts');
  uiSource = uiSource.slice(0, enAt) + enSections + '\n' + uiSource.slice(enAt);
  fs.writeFileSync(uiPath, uiSource, 'utf8');
}

const totals = sections.reduce((sum, section) => sum + section.entries.length, 0);
console.log(`Ficheros: ${Object.keys(spec).length} · operaciones: ${Object.values(spec).reduce((s, o) => s + o.length, 0)}`);
console.log(`Claves nuevas: ${totals} · sin traducción EN: ${Object.keys(missingEn).length}`);
if (apply) console.log('Diccionario actualizado: src/i18n/ui.ts');
for (const section of sections) {
  console.log(`  ${section.ns}: ${section.entries.length} clave(s)`);
}
