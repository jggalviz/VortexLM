/* empty css                                                */
import { e as createAstro, c as createComponent, m as maybeRenderHead, b as renderComponent, r as renderTemplate } from '../chunks/astro/server_D7JyDS6g.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DUDHbwPC.mjs';
import { $ as $$ContactForm } from '../chunks/ContactForm_DvL9VT1v.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://vortexlm.com");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="relative w-full min-h-[85vh] flex items-center justify-center bg-slate-900 overflow-hidden"> <!-- Fondo de imagen con Priority Load para evitar CLS --> <div class="absolute inset-0 w-full h-full z-0"> <!-- Componente img estático (o componente Image de Astro) cargado en modo 'eager' con alta prioridad --> <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80" alt="Desarrollo Tecnológico y Web en Caracas" class="object-cover w-full h-full opacity-30" fetchpriority="high" loading="eager" width="1920" height="1080"> <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div> </div> <div class="relative z-10 container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20"> <!-- Copywriting & H1 (Perfectamente jerarquizado para SEO) --> <div class="max-w-2xl"> <span class="inline-block py-1 px-3 mb-4 text-sm font-semibold tracking-wider text-cyan-400 bg-cyan-900/30 rounded-full border border-cyan-800/50 backdrop-blur-sm">
DESARROLLO A MEDIDA Y ESCALABLE
</span> <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
Agencia de <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Desarrollo Web y Apps</span> en Caracas
</h1> <p class="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
Creamos sistemas completos desde cero adaptados a lo que necesitas. Desde frameworks modernos hasta WordPress, replicamos tus diseños o creamos propuestas únicas para escalar tu negocio.
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
