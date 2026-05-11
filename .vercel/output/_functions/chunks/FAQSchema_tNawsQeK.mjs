import { e as createAstro, c as createComponent, m as maybeRenderHead, r as renderTemplate, f as renderSlot, u as unescapeHTML } from './astro/server_D7JyDS6g.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$2 = createAstro("https://vortexlm.com");
const $$HeroService = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeroService;
  const { title, subtitle, highlight } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="w-full pt-48 pb-24 px-4 md:px-8 bg-slate-950 relative overflow-hidden"> <!-- Grid background for technological feel --> <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBWNDBIMHptMzkuNSAwVjBoLjV2NDB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9zdmc+')] bg-center opacity-30"></div> <!-- Glowing orb --> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-900/20 blur-[120px] rounded-[100%] pointer-events-none"></div> <div class="max-w-4xl mx-auto text-center relative z-10"> <h1 class="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-8"> ${title} <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">${highlight}</span> </h1> <p class="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"> ${subtitle} </p> </div> </section>`;
}, "C:/Antigravity Proyects/VortexLM/src/components/ui/HeroService.astro", void 0);

const $$Astro$1 = createAstro("https://vortexlm.com");
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 group"> <div class="w-14 h-14 rounded-2xl bg-blue-900/30 border border-blue-800/50 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"> ${renderSlot($$result, $$slots["icon"], renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path> </svg> `)} </div> <h3 class="text-xl font-bold text-white mb-3">${title}</h3> <p class="text-slate-400 leading-relaxed text-sm">${description}</p> </div>`;
}, "C:/Antigravity Proyects/VortexLM/src/components/ui/ServiceCard.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://vortexlm.com");
const $$FAQSchema = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FAQSchema;
  const { faqs } = Astro2.props;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script> ", '<div class="space-y-4 mt-8"> ', " </div>"])), unescapeHTML(JSON.stringify(schema)), maybeRenderHead(), faqs.map((faq) => renderTemplate`<details class="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden"> <summary class="flex items-center justify-between p-6 text-lg font-bold text-white cursor-pointer hover:bg-slate-800/50 transition-colors"> ${faq.question} <span class="transition group-open:rotate-180 bg-blue-900/30 p-2 rounded-full text-blue-500"> <svg fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg> </span> </summary> <div class="px-6 pb-6 text-slate-400 leading-relaxed"> <p>${faq.answer}</p> </div> </details>`));
}, "C:/Antigravity Proyects/VortexLM/src/components/seo/FAQSchema.astro", void 0);

export { $$HeroService as $, $$ServiceCard as a, $$FAQSchema as b };
