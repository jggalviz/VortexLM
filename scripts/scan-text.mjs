// scripts/scan-text.mjs
//
// Escáner de apoyo (temporal): lista los nodos de texto "traducibles" (texto
// visible en español que aún no está marcado con `data-i18n`) de los archivos
// indicados, con un índice estable por archivo.
//
// Uso: node scripts/scan-text.mjs <ruta...> [--out archivo]

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const ROOT = process.cwd();
const args = process.argv.slice(2);
const outIndex = args.indexOf('--out');
const outFile = outIndex >= 0 ? args[outIndex + 1] : null;
const targets = args.filter((a, i) => a !== '--out' && i !== outIndex + 1);

const walk = (dir) => {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(abs));
    else out.push(abs);
  }
  return out;
};

const files = targets.flatMap((target) => {
  const abs = path.resolve(ROOT, target);
  const stat = fs.statSync(abs);
  const list = stat.isDirectory() ? walk(abs) : [abs];
  return list.filter((f) => /\.(astro|tsx|ts)$/.test(f) && !/[\\/]i18n[\\/]/.test(f));
});

const lines = [];
for (const file of files.sort()) {
  const rel = path.relative(ROOT, file);
  let source = fs.readFileSync(file, 'utf8');
  source = source
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<pre[\s\S]*?<\/pre>/g, '')
    .replace(/<svg[\s\S]*?<\/svg>/g, '');

  const matches = [...source.matchAll(/>\s*([^<>{}]*[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]{3}[^<>{}]*?)\s*</g)];
  let index = 0;
  const found = [];
  for (const match of matches) {
    const text = match[1].trim();
    if (!/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]{3}/.test(text)) continue;
    if (/^[\d\s.,;:%+\-/()]*$/.test(text)) continue;
    index++;
    found.push(`  ${index}\t${text.replace(/\r?\n/g, '\\n')}`);
  }
  if (found.length) {
    lines.push(`### ${rel}  (${found.length})`);
    lines.push(...found);
  }

  // Etiquetas accesibles: se traducen vía `data-i18n-aria-label`.
  const aria = [...source.matchAll(/aria-label="([^"]+)"/g)].map((match) => match[1]);
  if (aria.length) {
    lines.push(`### ${rel}  (aria ${aria.length})`);
    for (const value of aria) lines.push(`  aria\t${value}`);
  }
}

const report = lines.join('\n');
if (outFile) {
  const abs = path.resolve(ROOT, outFile);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, report + '\n', 'utf8');
  console.log(`escrito ${outFile} (${lines.length} líneas)`);
} else {
  console.log(report);
}
