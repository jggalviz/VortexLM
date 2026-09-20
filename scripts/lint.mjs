#!/usr/bin/env node
// scripts/lint.mjs
//
// Zero-dependency lint runner for VortexLM.
//
// Why not ESLint: this project's lockfile is pinned to Linux-only optional
// binaries (`@esbuild/linux-x64`, `@rollup/rollup-linux-x64-gnu`), so extra
// devDependencies cannot be installed in every environment. This runner uses the
// esbuild copy Vite already ships to (a) compile-check every source file and
// (b) enforce the performance rules that protect the Lighthouse budget:
//
//   error  layout-read APIs (offsetWidth, getBoundingClientRect, innerHeight…)
//   error  useLayoutEffect (forces synchronous layout)
//   error  non-passive scroll/touch/wheel listeners
//   warn   h-screen / min-h-screen / bare 100vh (use dvh/svh viewport units)
//
// Suppress a single line with `// lint-allow-layout-read` when the read is real
// and already batched (see the README section on forced reflow).
//
// Usage: npm run lint   ·   npm run lint -- --strict (warnings fail too)
import fs from 'node:fs';
import path from 'node:path';
import { transformSync } from 'esbuild';

const ROOT = process.cwd();
const STRICT = process.argv.includes('--strict');
const SOURCE_DIRS = ['src', 'scripts'];
const EXTRA_FILES = ['astro.config.mjs', 'tailwind.config.mjs', 'keystatic.config.tsx'];
const IGNORED_DIRS = new Set(['node_modules', 'dist', '.vercel', '.astro', '.git', 'public', 'images']);

const LOADERS = { '.js': 'js', '.mjs': 'js', '.ts': 'ts', '.tsx': 'tsx' };
const LAYOUT_READS = /\b(offsetWidth|offsetHeight|offsetTop|offsetLeft|clientWidth|clientHeight|scrollTop|scrollHeight|scrollLeft|getBoundingClientRect|getClientRects|innerHeight|innerWidth|visualViewport|matchMedia)\b/;
const PASSIVE_EVENTS = /addEventListener\(\s*['"](scroll|touchstart|touchmove|wheel|mousewheel)['"]/;
const OLD_VIEWPORT_UNITS = /(min-h-screen|h-screen|max-h-screen|\b100vh\b)/g;

const problems = [];
const report = (level, file, line, message) => problems.push({ level, file, line, message });

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (IGNORED_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

function checkSyntax(relPath, source, loader) {
  try {
    transformSync(source, { loader, target: 'esnext', format: 'esm', sourcefile: relPath });
  } catch (error) {
    report('error', relPath, 0, `syntax error: ${String(error.message).split('\n')[0]}`);
  }
}

// Extract the code that actually ships from an .astro file: frontmatter plus
// every executable <script> block, preserving line numbers for reporting.
// Comments and the frontmatter are blanked out first (same length, newlines
// kept) so that a literal `<script>` mentioned inside a comment cannot be
// mistaken for a real tag.
const DATA_SCRIPT_TYPES = /type\s*=\s*['"](application\/(ld\+json|json)|text\/(plain|template))['"]/;

function maskCommentsAndFrontmatter(source) {
  const chars = source.split('');
  const blank = (from, to) => {
    for (let i = from; i < to; i += 1) if (chars[i] !== '\n') chars[i] = ' ';
  };
  const frontmatter = source.match(/^---\r?\n[\s\S]*?\r?\n---/);
  if (frontmatter) blank(frontmatter.index, frontmatter.index + frontmatter[0].length);
  for (const match of source.matchAll(/<!--[\s\S]*?-->/g)) blank(match.index, match.index + match[0].length);
  return chars.join('');
}

function astroSegments(source) {
  const segments = [];
  const masked = maskCommentsAndFrontmatter(source);

  const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (frontmatter) segments.push({ code: frontmatter[1], startLine: 2, kind: 'frontmatter' });

  const scriptRe = /<script\b([^>]*)>([\s\S]*?)<\/script>/g;
  let match;
  while ((match = scriptRe.exec(masked)) !== null) {
    if (DATA_SCRIPT_TYPES.test(match[1])) continue; // JSON-LD and friends are data, not code
    const startLine = source.slice(0, match.index).split('\n').length + 1;
    segments.push({ code: source.slice(match.index + match[0].indexOf('>') + 1, match.index + match[0].length - '</script>'.length), startLine, kind: 'script' });
  }
  return segments;
}

// Astro frontmatter behaves like a module body wrapped in an async function:
// top-level `return` and `await` are legal, and `export` is only used for the
// component's Props/GetStaticPaths. Reproduce that shape before parsing.
function asAstroFrontmatter(code) {
  const body = code
    // Imports are hoisted by Astro; drop both single-line and multi-line forms.
    .replace(/^[ \t]*import\s+(?:[\s\S]*?from\s*)?['"][^'"]+['"];?/gm, '')
    .replace(/^\s*export\s+default\s+/gm, 'const __astroDefault = ')
    .replace(/^(\s*)export\s+/gm, '$1');
  return `(async () => {\n${body}\n})();`;
}

function reportSyntax(relPath, code, startLine, wrapper) {
  try {
    transformSync(wrapper ? asAstroFrontmatter(code) : code, {
      loader: 'ts',
      target: 'esnext',
      format: 'esm',
      sourcefile: relPath,
    });
  } catch (error) {
    report('error', relPath, startLine, `syntax error: ${String(error.message).split('\n')[0]}`);
  }
}

function checkAstro(relPath, source) {
  for (const segment of astroSegments(source)) {
    if (!segment.code.trim()) continue;
    reportSyntax(relPath, segment.code, segment.startLine, segment.kind === 'frontmatter');
  }
}

// Unbalanced <script> tags silently swallow page markup and the page's own JS
// (found on /servicios/diseno-paginas-web-caracas: one unclosed tag hid 20 KB of
// content and the contact-form handler). Self-closing script tags are ignored.
function checkScriptBalance(relPath, source) {
  const masked = maskCommentsAndFrontmatter(source);
  const stack = [];
  const tagRe = /<script\b[^>]*?\/?>|<\/script>/gi;
  let match;

  while ((match = tagRe.exec(masked)) !== null) {
    const line = masked.slice(0, match.index).split('\n').length;
    if (match[0].startsWith('</')) {
      if (stack.length === 0) report('error', relPath, line, 'stray </script> without an opening tag');
      else stack.pop();
    } else if (!match[0].endsWith('/>')) {
      stack.push(line);
    }
  }

  for (const line of stack) {
    report('error', relPath, line, 'unbalanced <script> tag (never closed) — it swallows the rest of the document');
  }
}

// ── Performance rules, line by line ───────────────────────────────────────
function checkPerformanceRules(relPath, source) {
  const lines = source.split('\n');

  lines.forEach((line, index) => {
    const lineNumber = index + 1;
    const isComment = /^\s*(\/\/|\*|\/\*)/.test(line);
    const allowed = line.includes('lint-allow-layout-read');

    if (!allowed && !isComment && LAYOUT_READS.test(line)) {
      report(
        'error',
        relPath,
        lineNumber,
        'layout read (forced-reflow risk) — batch it with requestAnimationFrame/ResizeObserver or add `// lint-allow-layout-read`'
      );
    }

    if (/useLayoutEffect\s*\(/.test(line) && !isComment) {
      report('error', relPath, lineNumber, 'useLayoutEffect forces synchronous layout — use useEffect + ResizeObserver');
    }

    if (PASSIVE_EVENTS.test(line)) {
      const context = lines.slice(index, index + 4).join(' ');
      if (!/passive\s*:\s*true/.test(context)) {
        report('error', relPath, lineNumber, 'scroll/touch/wheel listener must be registered with { passive: true }');
      }
    }

    if (!isComment && OLD_VIEWPORT_UNITS.test(line)) {
      const context = lines.slice(Math.max(0, index - 2), index + 3).join('\n');
      const hasModernUnit = /\b100[dls]vh\b/.test(context) || /\b(min-h|h|max-h)-(dvh|svh|lvh)\b/.test(context);
      if (!hasModernUnit) {
        report('warn', relPath, lineNumber, 'legacy viewport unit — prefer dvh/svh (min-h-dvh, min-h-svh) or add a 100dvh fallback');
      }
    }
  });
}

// Inline attribute handlers (`onclick="fn()"`) resolve names on `window`. Astro
// bundles plain <script> blocks as ES modules, so a top-level `function fn(){}`
// there is module-scoped and gets tree-shaken away (the build warns "Generated an
// empty chunk") — every contact form on this site was silently dead because of it.
function checkInlineHandlers(relPath, source) {
  const masked = maskCommentsAndFrontmatter(source);
  const handlerRe = /\son(?:click|submit|change|input|load|focus|mouseenter)="\s*([A-Za-z_$][\w$]*)\s*\(/g;
  const referenced = new Set();
  for (const match of masked.matchAll(handlerRe)) referenced.add(match[1]);
  if (referenced.size === 0) return;

  const inlineBodies = [];
  const moduleBodies = [];
  for (const match of masked.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
    const attrs = match[1];
    if (DATA_SCRIPT_TYPES.test(attrs) || /\ssrc\s*=/.test(attrs)) continue;
    (/\bis:inline\b/.test(attrs) ? inlineBodies : moduleBodies).push(match[2]);
  }

  const declaredIn = (bodies, name) =>
    bodies.some((body) =>
      new RegExp(`function\\s+${name}\\s*\\(|(?:var|let|const)\\s+${name}\\s*=|window\\.${name}\\s*=`).test(body)
    );

  for (const name of referenced) {
    if (declaredIn(moduleBodies, name) && !declaredIn(inlineBodies, name)) {
      report(
        'error',
        relPath,
        0,
        `inline handler calls ${name}() but it is declared inside a bundled <script> module — use <script is:inline> or attach an addEventListener`
      );
    }
  }
}

// ── Run ───────────────────────────────────────────────────────────────────
const targets = [
  ...SOURCE_DIRS.flatMap((dir) => walk(path.join(ROOT, dir))),
  ...EXTRA_FILES.flatMap((entry) => {
    const full = path.join(ROOT, entry);
    if (!fs.existsSync(full)) return [];
    return fs.statSync(full).isDirectory() ? walk(full) : [full];
  }),
].filter((file) => LOADERS[path.extname(file)] || path.extname(file) === '.astro');

// The lint runner itself is a Node CLI: syntax-check it, but exempt its pattern
// definitions from the browser-side performance rules.
const PERF_RULES_SKIP = new Set(['scripts/lint.mjs']);

for (const file of targets) {
  const relPath = path.relative(ROOT, file).replace(/\\/g, '/');
  const source = fs.readFileSync(file, 'utf8');
  const ext = path.extname(file);

  if (ext === '.astro') {
    checkScriptBalance(relPath, source);
    checkInlineHandlers(relPath, source);
    checkAstro(relPath, source);
  } else {
    checkSyntax(relPath, source, LOADERS[ext]);
  }

  if (['.js', '.mjs', '.ts', '.tsx', '.astro'].includes(ext) && !PERF_RULES_SKIP.has(relPath)) {
    checkPerformanceRules(relPath, source);
  }
}

const errors = problems.filter((p) => p.level === 'error');
const warnings = problems.filter((p) => p.level === 'warn');

console.log(`lint: scanned ${targets.length} files`);
for (const problem of problems) {
  const location = problem.line ? `${problem.file}:${problem.line}` : problem.file;
  console.log(`  ${problem.level === 'error' ? 'error' : 'warn '}  ${location}  ${problem.message}`);
}
console.log(`\n${errors.length} error(s), ${warnings.length} warning(s)`);

if (errors.length > 0 || (STRICT && warnings.length > 0)) process.exitCode = 1;

