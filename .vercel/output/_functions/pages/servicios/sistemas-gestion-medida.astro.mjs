/* empty css                                                   */
import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D7JyDS6g.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DUDHbwPC.mjs';
import { $ as $$HeroService, a as $$ServiceCard, b as $$FAQSchema } from '../../chunks/FAQSchema_tNawsQeK.mjs';
import { $ as $$ContactForm } from '../../chunks/ContactForm_DvL9VT1v.mjs';
export { renderers } from '../../renderers.mjs';

const $$SistemasGestionMedida = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    { question: "\xBFCu\xE1l es el precio base de un software de gesti\xF3n?", answer: "Los proyectos de automatizaci\xF3n y sistemas a medida comienzan en $500. El presupuesto escala dependiendo de la cantidad de m\xF3dulos (inventario, rrhh, facturaci\xF3n) y complejidad." },
    { question: "\xBFEl sistema se integra con facturaci\xF3n fiscal en Venezuela?", answer: "Desarrollamos conectores a medida adapt\xE1ndonos a las exigencias operativas y contables locales, facilitando el control de divisas y bol\xEDvares." },
    { question: "\xBFEs mejor un software a medida o uno gen\xE9rico?", answer: "El software a medida elimina las altas cuotas mensuales a largo plazo y hace exactamente lo que tu empresa necesita sin flujos de trabajo forzados." }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Sistemas a Medida y Software de Gesti\xF3n | VortexLM", "description": "Desarrollo de software empresarial en Caracas. Automatizaci\xF3n de inventarios, sistemas de facturaci\xF3n y ERP a la medida de tu industria." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroService", $$HeroService, { "title": "Sistemas a Medida y", "highlight": "Software de Gesti\xF3n", "subtitle": "Libera a tu equipo del trabajo manual. Automatiza operaciones, integra inventarios y escala tu productividad con herramientas corporativas exclusivas." })} ${maybeRenderHead()}<section class="py-24 px-4 md:px-8 max-w-7xl mx-auto"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-5xl font-black text-white mb-6">Desarrollo de Software Empresarial Caracas</h2> <p class="text-slate-400 max-w-2xl mx-auto text-lg">En un entorno multi-moneda complejo, depender de hojas de cálculo genéricas es un riesgo enorme. Diseñamos arquitectura en la nube para control total.</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Automatizaci\xF3n de Inventarios", "description": "Control en tiempo real de m\xFAltiples almacenes, sincronizaci\xF3n de sucursales e integraciones con hardware de punto de venta." })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Sistemas ERP y CRM a Medida", "description": "Construimos plataformas que centralizan recursos humanos, finanzas y atenci\xF3n al cliente en un \xFAnico ecosistema cifrado." })} ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "title": "Dashboards y Anal\xEDtica", "description": "Toma decisiones con datos precisos. Generaci\xF3n de reportes instant\xE1neos sobre rentabilidad, ventas y m\xE9tricas clave." })} </div> <div class="mt-16 text-center"> <a href="/blog/sistemas-inventario-facturacion-venezuela" class="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
Leer Caso: Automatización de inventario multi-moneda en Venezuela
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg> </a> </div> </section> <section class="py-24 px-4 md:px-8 bg-slate-900/30 border-y border-slate-800"> <div class="max-w-3xl mx-auto"> <h2 class="text-3xl md:text-4xl font-black text-white text-center mb-4">Preguntas Frecuentes</h2> <p class="text-slate-400 text-center mb-8">Descubre cómo un software propio puede multiplicar el rendimiento de tu empresa.</p> ${renderComponent($$result2, "FAQSchema", $$FAQSchema, { "faqs": faqs })} </div> </section> <section class="py-24 px-4 md:px-8 max-w-4xl mx-auto text-center" id="contacto"> <h2 class="text-4xl font-black text-white mb-6">Auditoría de Procesos</h2> <p class="text-slate-400 mb-10 text-lg">Cuéntanos cómo funciona tu empresa actualmente y te propondremos la arquitectura ideal.</p> <div class="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl text-left shadow-2xl relative overflow-hidden"> <div class="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px]"></div> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </div> </section> ` })}`;
}, "C:/Antigravity Proyects/VortexLM/src/pages/servicios/sistemas-gestion-medida.astro", void 0);

const $$file = "C:/Antigravity Proyects/VortexLM/src/pages/servicios/sistemas-gestion-medida.astro";
const $$url = "/servicios/sistemas-gestion-medida";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SistemasGestionMedida,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
