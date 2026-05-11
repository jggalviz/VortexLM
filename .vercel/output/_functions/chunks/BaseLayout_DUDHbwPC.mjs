import { e as createAstro, c as createComponent, d as addAttribute, r as renderTemplate, u as unescapeHTML, m as maybeRenderHead, b as renderComponent, g as renderHead, f as renderSlot } from './astro/server_D7JyDS6g.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://vortexlm.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title,
    description,
    image = "/images/og-default.jpg",
    canonicalURL = Astro2.url.href,
    type = "website",
    isLocalBusiness = false
  } = Astro2.props;
  const siteName = "VortexLM";
  const siteUrl = "https://vortexlm.com";
  const fullTitle = `${title} | Agencia de Desarrollo Web y Apps en Caracas`;
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "VortexLM",
    "image": `${siteUrl}/images/logo.png`,
    "@id": `${siteUrl}`,
    "url": `${siteUrl}`,
    "telephone": "+58-000-0000000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Zona Empresarial",
      "addressLocality": "Caracas",
      "addressRegion": "Miranda",
      "postalCode": "1060",
      "addressCountry": "VE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.4806,
      "longitude": -66.9036
    },
    "priceRange": "$$$",
    "description": description
  };
  return renderTemplate`<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="canonical"${addAttribute(canonicalURL, "href")}><title>${fullTitle}</title><meta name="title"${addAttribute(fullTitle, "content")}><meta name="description"${addAttribute(description, "content")}><meta property="og:type"${addAttribute(type, "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:title"${addAttribute(fullTitle, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><meta property="og:site_name"${addAttribute(siteName, "content")}><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(fullTitle, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>${isLocalBusiness && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(localBusinessSchema)))}`;
}, "C:/Antigravity Proyects/VortexLM/src/components/seo/SEO.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="w-full sticky top-0 left-0 z-50 py-4 px-4 md:px-8 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50 shadow-sm transition-all"> <div class="max-w-7xl mx-auto flex items-center justify-between"> <a href="/" class="text-2xl font-black tracking-tighter text-white flex items-center gap-2 group"> <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors"> <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> </div>
VORTEX<span class="text-blue-500">LM</span> </a> <nav class="hidden md:flex items-center space-x-8"> <a href="/" class="text-sm font-semibold text-slate-300 hover:text-white transition-colors">Inicio</a> <div class="relative group py-2"> <button class="text-sm font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer">
Servicios
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path></svg> </button> <div class="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col z-50 overflow-hidden"> <a href="/servicios/diseno-web-caracas" class="px-5 py-4 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white border-b border-slate-800">
Diseño Web de Alta Velocidad
</a> <a href="/servicios/desarrollo-de-apps-caracas" class="px-5 py-4 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white border-b border-slate-800">
Desarrollo de Apps Móviles
</a> <a href="/servicios/sistemas-gestion-medida" class="px-5 py-4 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white">
Software a Medida y Sistemas
</a> </div> </div> <a href="/blog" class="text-sm font-semibold text-slate-300 hover:text-white transition-colors">Blog</a> <a href="/#contacto" class="px-5 py-2.5 text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-all shadow-lg shadow-blue-600/20">
Contactar
</a> </nav> <!-- Mobile menu button (Zero JS CSS Only) --> <details class="md:hidden group relative"> <summary class="list-none cursor-pointer text-slate-300 hover:text-white p-2"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path> </svg> </summary> <div class="absolute right-0 top-full mt-4 w-64 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden flex flex-col z-50 max-h-[80vh] overflow-y-auto"> <a href="/" class="px-5 py-4 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white border-b border-slate-800">Inicio</a> <div class="px-5 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-950/50">Servicios</div> <a href="/servicios/diseno-web-caracas" class="px-5 py-4 pl-8 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white border-b border-slate-800">↳ Diseño Web</a> <a href="/servicios/desarrollo-de-apps-caracas" class="px-5 py-4 pl-8 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white border-b border-slate-800">↳ Apps Móviles</a> <a href="/servicios/sistemas-gestion-medida" class="px-5 py-4 pl-8 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white border-b border-slate-800">↳ Software a Medida</a> <a href="/blog" class="px-5 py-4 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white border-b border-slate-800">Blog Técnico</a> <a href="/#contacto" class="px-5 py-4 text-sm font-bold text-blue-400 hover:bg-slate-800">Contactar a Ventas</a> </div> </details> </div> </header>`;
}, "C:/Antigravity Proyects/VortexLM/src/components/ui/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="w-full py-16 px-4 md:px-8 bg-slate-950 border-t border-slate-900 mt-20 relative overflow-hidden"> <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-900 to-transparent opacity-50"></div> <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12"> <div class="col-span-1 md:col-span-5"> <a href="/" class="text-2xl font-black tracking-tighter text-white flex items-center gap-2 mb-6"> <div class="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center"> <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> </div>
VORTEX<span class="text-blue-500">LM</span> </a> <p class="text-slate-400 text-sm leading-relaxed max-w-sm">
Arquitectura de software de rendimiento extremo y estrategias de posicionamiento SEO para dominar el mercado tecnológico en Caracas y toda Venezuela.
</p> </div> <div class="col-span-1 md:col-span-4 md:col-start-6"> <h3 class="text-white font-bold mb-6 tracking-wide">Soluciones y Servicios</h3> <ul class="space-y-3 text-sm text-slate-400"> <li><a href="/servicios/diseno-web-caracas" class="hover:text-blue-400 transition-colors">Diseño Web de Alta Velocidad en Caracas</a></li> <li><a href="/servicios/desarrollo-de-apps-caracas" class="hover:text-blue-400 transition-colors">Desarrollo de Apps Móviles iOS/Android</a></li> <li><a href="/servicios/sistemas-gestion-medida" class="hover:text-blue-400 transition-colors">Sistemas ERP y Software a Medida</a></li> </ul> </div> <div class="col-span-1 md:col-span-2 md:col-start-11"> <h3 class="text-white font-bold mb-6 tracking-wide">Empresa</h3> <ul class="space-y-3 text-sm text-slate-400"> <li><a href="/blog" class="hover:text-blue-400 transition-colors">Blog Técnico</a></li> <li><a href="/#contacto" class="hover:text-blue-400 transition-colors">Contactar</a></li> </ul> </div> </div> <div class="max-w-7xl mx-auto pt-8 border-t border-slate-900/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500"> <p>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} VortexLM. Todos los derechos reservados.</p> <p class="mt-4 md:mt-0 flex items-center gap-1">
Diseñado con <span class="text-blue-500">&hearts;</span> en Caracas, Venezuela.
</p> </div> </footer>`;
}, "C:/Antigravity Proyects/VortexLM/src/components/ui/Footer.astro", void 0);

const $$Astro = createAstro("https://vortexlm.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, isLocalBusiness, type = "website" } = Astro2.props;
  return renderTemplate`<html lang="es" class="scroll-smooth"> <head>${renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "isLocalBusiness": isLocalBusiness, "type": type })}${renderHead()}</head> <body class="bg-slate-950 text-slate-300 font-sans antialiased overflow-x-hidden flex flex-col min-h-screen"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-grow"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Antigravity Proyects/VortexLM/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
