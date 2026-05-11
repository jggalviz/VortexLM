/* empty css                                                   */
import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D7JyDS6g.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DUDHbwPC.mjs';
import { $ as $$HeroService, a as $$ServiceCard, b as $$FAQSchema } from '../../chunks/FAQSchema_tNawsQeK.mjs';
import { $ as $$ContactForm } from '../../chunks/ContactForm_DvL9VT1v.mjs';
export { renderers } from '../../renderers.mjs';

const $$DesarrolloDeAppsCaracas = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    { question: "\xBFCu\xE1nto cuesta el desarrollo de una app en Venezuela?", answer: "Los proyectos nativos o h\xEDbridos desde cero comienzan a partir de $500, variando enormemente seg\xFAn la complejidad t\xE9cnica, integraci\xF3n de pagos y APIs requeridas." },
    { question: "\xBFDesarrollan para iOS y Android de forma nativa?", answer: "S\xED, creamos aplicaciones que corren nativamente o mediante arquitecturas h\xEDbridas ultra-optimizadas, garantizando presencia total en la App Store y Google Play." },
    { question: "\xBFMi app m\xF3vil funcionar\xE1 bien en zonas de baja conectividad?", answer: "Especialmente en Caracas, optimizamos con estrategias 'offline-first' y manejo de cach\xE9 avanzado, ideal para el ecosistema venezolano." }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Desarrollo de Apps M\xF3viles en Venezuela | iOS & Android", "description": "Desarrollo de aplicaciones m\xF3viles nativas de alto rendimiento. Posiciona tu marca en los bolsillos de Caracas con VortexLM." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroService", $$HeroService, { "title": "Desarrollo de Apps M\xF3viles en", "highlight": "Venezuela", "subtitle": "Aplicaciones corporativas, e-commerce y startups. Llevamos tu modelo de negocio directo a los bolsillos de tus clientes con rendimiento nativo inigualable." })} ${maybeRenderHead()}<section class="py-24 px-4 md:px-8 max-w-7xl mx-auto"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-5xl font-black text-white mb-6">Desarrollo de Apps en Chacao y Gran Caracas</h2> <p class="text-slate-400 max-w-2xl mx-auto text-lg">En un mercado dominado por el móvil, tener presencia en las tiendas de aplicaciones ya no es un lujo, es la frontera que separa a los líderes del resto.</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Experiencia Nativa (iOS/Android)", "description": "Rendimiento impecable aprovechando todo el hardware del dispositivo. 60fps constantes para una experiencia premium." })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Integraci\xF3n Local (Pagos)", "description": "Conectamos tu app con pasarelas de pago y billeteras digitales relevantes para la econom\xEDa multi-moneda de Venezuela." })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Creaci\xF3n de aplicaciones corporativas", "description": "Sistemas robustos de Delivery, e-commerce, gesti\xF3n interna o fintech dise\xF1ados desde cero con seguridad bancaria." })} </div> <div class="mt-16 text-center"> <a href="/blog/por-que-tu-empresa-caracas-necesita-app-movil-2026" class="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
Leer Artículo: Por qué necesitas una app móvil en 2026
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg> </a> </div> </section> <section class="py-24 px-4 md:px-8 bg-slate-900/30 border-y border-slate-800"> <div class="max-w-3xl mx-auto"> <h2 class="text-3xl md:text-4xl font-black text-white text-center mb-4">Preguntas Frecuentes</h2> <p class="text-slate-400 text-center mb-8">Aclaramos el panorama de la creación de aplicaciones en Venezuela.</p> ${renderComponent($$result2, "FAQSchema", $$FAQSchema, { "faqs": faqs })} </div> </section> <section class="py-24 px-4 md:px-8 max-w-4xl mx-auto text-center" id="contacto"> <h2 class="text-4xl font-black text-white mb-6">Transforma tu idea en código</h2> <p class="text-slate-400 mb-10 text-lg">Contacta a nuestros ingenieros y arquitectos de software para recibir viabilidad técnica.</p> <div class="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl text-left shadow-2xl relative overflow-hidden"> <div class="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px]"></div> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </div> </section> ` })}`;
}, "C:/Antigravity Proyects/VortexLM/src/pages/servicios/desarrollo-de-apps-caracas.astro", void 0);

const $$file = "C:/Antigravity Proyects/VortexLM/src/pages/servicios/desarrollo-de-apps-caracas.astro";
const $$url = "/servicios/desarrollo-de-apps-caracas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DesarrolloDeAppsCaracas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
