/* empty css                                                */
import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_D7JyDS6g.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_COByHc3s.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DUDHbwPC.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Blog T\xE9cnico", "description": "Art\xEDculos t\xE9cnicos sobre transformaci\xF3n digital, desarrollo web y aplicaciones m\xF3viles en Caracas." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto min-h-screen"> <div class="mb-16"> <h1 class="text-4xl md:text-5xl font-black text-white mb-4">Blog <span class="text-blue-500">Técnico</span></h1> <p class="text-lg text-slate-400 max-w-2xl">Descubre las últimas tendencias en tecnología y desarrollo de software para potenciar tu empresa en Caracas y toda Venezuela.</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${posts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} class="group block bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1"> ${post.data.image && renderTemplate`<div class="w-full h-48 bg-slate-800 overflow-hidden relative"> <img${addAttribute(post.data.image, "src")}${addAttribute(post.data.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"> <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div> </div>`} <div class="p-6"> <div class="text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wider">${post.data.category}</div> <h2 class="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">${post.data.title}</h2> <p class="text-slate-400 text-sm line-clamp-3 mb-4">${post.data.description}</p> <div class="text-xs text-slate-500 font-medium"> ${post.data.pubDate.toLocaleDateString("es-VE", { year: "numeric", month: "long", day: "numeric" })} </div> </div> </a>`)} </div> </div> ` })}`;
}, "C:/Antigravity Proyects/VortexLM/src/pages/blog/index.astro", void 0);

const $$file = "C:/Antigravity Proyects/VortexLM/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
