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

  // ── Caso de estudio (`case.*`) ───────────────────────────────────────────
  // El caso de estudio escribe sus claves con plantillas (`${i}`) o las
  // transporta como props (`i18nBase`, `notaKey`, `tituloKey`, `labelKey`), así
  // que no son literales alcanzables por los escáneres de abajo: se declaran
  // aquí y esta lista es el contrato entre `ui.ts` y los componentes.
  ...[0, 1, 2, 3].flatMap((i) => [
    `case.hero.hallazgo.${i}.titulo`,
    `case.hero.hallazgo.${i}.detalle`,
  ]),
  ...[0, 1, 2].map((i) => `case.ficha.link.${i}.titulo`),
  ...[0, 1, 2, 3, 4, 5].flatMap((i) => [
    `case.stack.${i}.detalle`,
    `case.metricas.${i}.label`,
    `case.metricas.${i}.detalle`,
    `case.reto.restriccion.${i}`,
    `case.diagram.capa.${i}.titulo`,
    `case.diagram.capa.${i}.detalle`,
    `case.desc.row.${i}.opcion`,
    `case.desc.row.${i}.motivo`,
    `case.desc.row.${i}.elegido`,
    `case.reto2.fila.${i}.metodo`,
    `case.reto2.fila.${i}.referencia`,
  ]),
  ...[0, 1, 2].flatMap((i) => [
    `case.reto.dolor.${i}.titulo`,
    `case.reto.dolor.${i}.dolor`,
    `case.reto.dolor.${i}.impacto`,
    `case.decision.${i}.titulo`,
    `case.decision.${i}.decision`,
    `case.decision.${i}.compromiso`,
    `case.reto1.paso.${i}.titulo`,
    `case.reto1.paso.${i}.detalle`,
    `case.reto2.regla.${i}.titulo`,
    `case.reto2.regla.${i}.detalle`,
    `case.reto3.capa.${i}.titulo`,
    `case.reto3.capa.${i}.detalle`,
    `case.cta.route.${i}`,
  ]),
  ...[0, 1, 2, 3, 4].flatMap((i) => [
    `case.decision.0.porque.${i}`,
    `case.decision.1.porque.${i}`,
    `case.reto1.estado.${i}.estado`,
    `case.reto1.estado.${i}.significado`,
    `case.reto1.estado.${i}.efecto`,
    `case.apr.item.${i}.titulo`,
    `case.apr.item.${i}.detalle`,
  ]),
  ...[0, 1, 2, 3].flatMap((i) => [
    `case.decision.2.porque.${i}`,
    `case.cta.aporte.${i}.titulo`,
    `case.cta.aporte.${i}.detalle`,
  ]),
  ...[0, 1, 2, 3, 4].map((i) => `case.apr.scale.${i}`),
  // Cabeceras resueltas por `i18nBase` en SectionHeading y notas de CodePanel.
  ...['reto', 'arq', 'retos', 'apr', 'cta'].flatMap((base) => [
    `case.${base}.eyebrow`,
    `case.${base}.title`,
    `case.${base}.description`,
  ]),
  'case.arq.map.title',
  'case.arq.map.detail',
  'case.reto.callout.title',
  'case.reto1.callout.title',
  'case.reto2.callout.title',
  'case.apr.callout.title',
  'case.apr.scale.title',
  'case.decision.2.note.0',
  'case.decision.2.note.1',
  'case.reto1.note.0',
  'case.reto1.note.1',
  'case.reto2.note.0',
  'case.reto2.note.1',
  'case.term.noAplica',
  ...[
    'nav.reto',
    'nav.arquitectura',
    'nav.retos-tecnicos',
    'nav.aprendizajes',
    'nav.contacto',
  ].map((key) => `case.${key}`),
];

const used = new Set(DYNAMIC_KEYS);
// Prefijos de claves construidas con plantilla (`data-i18n={`ns.${i}.x`}`) que no
// existen en el diccionario: indica que el nombre de la clave y el del
// componente se han desincronizado.
const badTemplatePrefixes = new Set();
const sources = walk(path.join(ROOT, 'src')).filter(
  (file) => /\.(astro|tsx|ts)$/.test(file) && !file.includes(path.join('i18n', ''))
);

for (const file of sources) {
  const source = fs.readFileSync(file, 'utf8');
  for (const match of source.matchAll(/data-i18n(?:-placeholder|-title|-aria-label|-alt|-doc-title|-meta-description)?="([^"]+)"/g)) {
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
  // Claves escritas como plantilla JS (`data-i18n={`…`}`): si la plantilla es
  // estática se valida como un literal; si incluye `${…}` basta con que exista
  // alguna clave con ese prefijo, que es el contrato entre componente y ui.ts.
  for (const match of source.matchAll(/data-i18n(?:-[a-z-]+)?=\{`([^`]+)`\}/g)) {
    const template = match[1];
    const dynamicAt = template.indexOf('${');
    if (dynamicAt === -1) {
      used.add(template);
      continue;
    }
    const prefix = template.slice(0, dynamicAt);
    if (![...esKeys].some((key) => key.startsWith(prefix))) {
      badTemplatePrefixes.add(`${prefix}* (${path.relative(ROOT, file)})`);
    }
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
if (badTemplatePrefixes.size) {
  console.log(`  plantilla sin claves en es: ${[...badTemplatePrefixes].join(', ')}`);
}

// ── Cobertura global del motor ───────────────────────────────────────────
// El cambio de idioma es un proceso del cliente que recorre el documento, así
// que funciona en cualquier ruta siempre y cuando la página cargue el motor.
// Toda página pública debe pasar por un layout con `initI18n()` (BaseLayout /
// DashboardLayout) o inicializarlo explícitamente; si no, el idioma guardado no
// se aplicaría al navegar fuera de la portada.
const ENGINE_REF = /layouts\/(?:BaseLayout|DashboardLayout)\.astro|initI18n\s*\(/;
const PAGES_DIR = path.join(ROOT, 'src', 'pages');
// Rutas que no son páginas del sitio (endpoints de API / islas de servidor).
const NOT_A_PAGE = (rel) => /^src[\\/]pages[\\/](?:api[\\/]|_)/.test(rel);

const pagesWithoutEngine = walk(PAGES_DIR)
  .filter((file) => file.endsWith('.astro'))
  .map((file) => path.relative(ROOT, file))
  .filter((rel) => !NOT_A_PAGE(rel))
  .filter((rel) => !ENGINE_REF.test(fs.readFileSync(path.join(ROOT, rel), 'utf8')));

if (pagesWithoutEngine.length) {
  console.log(`  MISSING engine (rutas sin i18n): ${pagesWithoutEngine.join(', ')}`);
}

const ok =
  missingInEs.length === 0 &&
  missingInEn.length === 0 &&
  extraInEn.length === 0 &&
  badTemplatePrefixes.size === 0 &&
  pagesWithoutEngine.length === 0;
console.log(ok ? 'i18n: OK' : 'i18n: FAILED');
if (!ok) process.exitCode = 1;
