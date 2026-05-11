/* empty css                                 */
import { e as createAstro, f as createComponent, g as addAttribute, h as renderTemplate, u as unescapeHTML, i as renderComponent, j as renderHead, k as renderSlot, m as maybeRenderHead } from '../chunks/astro/server_C1QPO7vu.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://vortexlm.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
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

const $$Astro$1 = createAstro("https://vortexlm.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, isLocalBusiness } = Astro2.props;
  return renderTemplate`<html lang="es" class="scroll-smooth"> <head>${renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "isLocalBusiness": isLocalBusiness })}${renderHead()}</head> <body class="bg-slate-950 text-slate-300 font-sans antialiased overflow-x-hidden"> <main> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Antigravity Proyects/VortexLM/src/layouts/BaseLayout.astro", void 0);

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form action="/api/contact" method="POST" class="space-y-4"> <div> <label for="name" class="block text-sm font-medium text-slate-300 mb-1">Nombre Completo</label> <input type="text" id="name" name="name" required class="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors" placeholder="Ej. Carlos Mendoza"> </div> <div> <label for="email" class="block text-sm font-medium text-slate-300 mb-1">Correo Corporativo</label> <input type="email" id="email" name="email" required class="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors" placeholder="carlos@tuempresa.com"> </div> <div> <label for="service" class="block text-sm font-medium text-slate-300 mb-1">Servicio de Interés</label> <select id="service" name="service" required class="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"> <option value="" disabled selected>Selecciona un servicio</option> <option value="desarrollo-web">Diseño y Desarrollo Web</option> <option value="app-movil">Desarrollo de App Móvil</option> <option value="software">Software a Medida</option> </select> </div> <button type="submit" class="w-full py-4 mt-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-cyan-600/30">
Solicitar Propuesta Gratuita
</button> <p class="text-xs text-slate-500 text-center mt-4">
Tus datos están protegidos. Sin spam, garantizado.
</p> </form>`;
}, "C:/Antigravity Proyects/VortexLM/src/components/ui/ContactForm.astro", void 0);

const $$Astro = createAstro("https://vortexlm.com");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="relative w-full min-h-[85vh] flex items-center justify-center bg-slate-900 overflow-hidden"> <!-- Fondo de imagen con Priority Load para evitar CLS --> <div class="absolute inset-0 w-full h-full z-0"> <!-- Componente img estático (o componente Image de Astro) cargado en modo 'eager' con alta prioridad --> <img src="/images/hero-caracas-tech.webp" alt="Desarrollo Tecnológico y Web en Caracas" class="object-cover w-full h-full opacity-30" fetchpriority="high" loading="eager" width="1920" height="1080"> <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div> </div> <div class="relative z-10 container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20"> <!-- Copywriting & H1 (Perfectamente jerarquizado para SEO) --> <div class="max-w-2xl"> <span class="inline-block py-1 px-3 mb-4 text-sm font-semibold tracking-wider text-cyan-400 bg-cyan-900/30 rounded-full border border-cyan-800/50 backdrop-blur-sm">
INFRAESTRUCTURA ANTI-GRAVITY
</span> <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
Agencia de <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Desarrollo Web y Apps</span> en Caracas
</h1> <p class="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
Dominamos el mercado tecnológico con soluciones de velocidad luz y peso mínimo. Posiciona tu negocio como el #1 en Google y convierte visitantes en clientes con plataformas de alto rendimiento.
</p> <div class="flex flex-col sm:flex-row gap-4"> <a href="#contacto" class="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-colors shadow-lg shadow-cyan-600/30 text-center">
Cotizar mi Proyecto
</a> <a href="/portafolio" class="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-colors border border-slate-700 text-center">
Ver Casos de Éxito
</a> </div> </div> <!-- Formulario de Conversión (Zero-JS) --> <div class="w-full max-w-md mx-auto lg:ml-auto" id="contacto"> <div class="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-700 shadow-2xl"> <h2 class="text-2xl font-bold text-white mb-2">Inicia tu Transformación</h2> <p class="text-slate-400 mb-6 text-sm">Respuesta en menos de 2 horas hábiles.</p> ${renderComponent($$result, "ContactForm", $$ContactForm, {})} </div> </div> </div> </section>`;
}, "C:/Antigravity Proyects/VortexLM/src/components/ui/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Inicio", "description": "Dominamos el mercado tecnol\xF3gico con soluciones de velocidad luz y peso m\xEDnimo. Posiciona tu negocio como el #1 en Google.", "isLocalBusiness": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ` })}`;
}, "C:/Antigravity Proyects/VortexLM/src/pages/index.astro", void 0);

const $$file = "C:/Antigravity Proyects/VortexLM/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
