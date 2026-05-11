/* empty css                                                   */
import { e as createAstro, c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D7JyDS6g.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DUDHbwPC.mjs';
import { $ as $$HeroService, a as $$ServiceCard, b as $$FAQSchema } from '../../chunks/FAQSchema_tNawsQeK.mjs';
import { $ as $$ContactForm } from '../../chunks/ContactForm_DvL9VT1v.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://vortexlm.com");
const $$DisenoWebCaracas = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DisenoWebCaracas;
  const faqs = [
    { question: "\xBFCu\xE1nto cuesta una p\xE1gina web en Venezuela?", answer: "Nuestros proyectos a medida comienzan desde $500. Sin embargo, la inversi\xF3n final depende de la escala de tu negocio, requerimientos t\xE9cnicos y funcionalidades." },
    { question: "\xBFQu\xE9 tecnolog\xEDas y plataformas utilizan?", answer: "Elegimos el framework ideal (Astro, React, Next.js) seg\xFAn el proyecto. Tambi\xE9n utilizamos WordPress si lo prefieres, pero jam\xE1s usamos plantillas; desarrollamos desde cero y replicamos tus dise\xF1os con exactitud." },
    { question: "\xBFEl dise\xF1o web incluye SEO Local?", answer: "Absolutamente. Cada sitio que desarrollamos incluye optimizaci\xF3n t\xE9cnica y metadatos geolocalizados para posicionarte como la mejor agencia o negocio en tu zona." }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Dise\xF1o Web en Caracas | Agencia de Software de Alto Rendimiento", "description": "Lideramos el mercado de dise\xF1o web en Caracas con arquitecturas ultrarr\xE1pidas y SEO Local. Haz que tu negocio destaque en Google." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroService", $$HeroService, { "title": "Dise\xF1o Web de \xC9lite en", "highlight": "Caracas", "subtitle": "Transformamos tu visi\xF3n en una experiencia digital de velocidad luz. Arquitectura de software moderna dise\xF1ada para aplastar a la competencia en Google." })} ${maybeRenderHead()}<section class="py-24 px-4 md:px-8 max-w-7xl mx-auto"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-5xl font-black text-white mb-6">Sistemas Completos a Medida</h2> <p class="text-slate-400 max-w-2xl mx-auto text-lg">Creamos proyectos escalables adaptados a lo que necesitas. Replicamos fielmente diseños proporcionados por ti o creamos interfaces completamente nuevas y exclusivas para tu marca.</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Dise\xF1o y Desarrollo Flexible", "description": "Desde frameworks modernos hasta desarrollo en WordPress, elegimos la pila tecnol\xF3gica perfecta seg\xFAn tus requerimientos." })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Agencia de software en Caracas", "description": "Estructuramos tu sitio con microdatos sem\xE1nticos para que Google te identifique como la autoridad #1 en tu sector geogr\xE1fico." })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Dise\xF1o UX/UI Premium", "description": "Interfaces minimalistas, modo oscuro nativo y una est\xE9tica tecnol\xF3gica que transmite confianza absoluta a tus clientes empresariales." })} </div> <div class="mt-16 text-center"> <a href="/blog/por-que-tu-empresa-caracas-necesita-app-movil-2026" class="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
Leer: Por qué complementar tu web con una App Móvil
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg> </a> </div> </section> <section class="py-24 px-4 md:px-8 bg-slate-900/30 border-y border-slate-800"> <div class="max-w-3xl mx-auto"> <h2 class="text-3xl md:text-4xl font-black text-white text-center mb-4">Preguntas Frecuentes</h2> <p class="text-slate-400 text-center mb-8">Información transparente sobre precios de páginas web en Venezuela y nuestros procesos.</p> ${renderComponent($$result2, "FAQSchema", $$FAQSchema, { "faqs": faqs })} </div> </section> <section class="py-24 px-4 md:px-8 max-w-4xl mx-auto text-center" id="contacto"> <h2 class="text-4xl font-black text-white mb-6">¿Listo para escalar tu negocio?</h2> <p class="text-slate-400 mb-10 text-lg">Déjanos tus datos y un arquitecto de software evaluará tu caso sin compromiso.</p> <div class="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl text-left shadow-2xl relative overflow-hidden"> <div class="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]"></div> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </div> </section> ` })}`;
}, "C:/Antigravity Proyects/VortexLM/src/pages/servicios/diseno-web-caracas.astro", void 0);

const $$file = "C:/Antigravity Proyects/VortexLM/src/pages/servicios/diseno-web-caracas.astro";
const $$url = "/servicios/diseno-web-caracas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DisenoWebCaracas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
