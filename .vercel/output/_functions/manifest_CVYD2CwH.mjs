import 'kleur/colors';
import { h as decodeKey } from './chunks/astro/server_D7JyDS6g.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DUE2DvA1.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Antigravity%20Proyects/VortexLM/","cacheDir":"file:///C:/Antigravity%20Proyects/VortexLM/node_modules/.astro/","outDir":"file:///C:/Antigravity%20Proyects/VortexLM/dist/","srcDir":"file:///C:/Antigravity%20Proyects/VortexLM/src/","publicDir":"file:///C:/Antigravity%20Proyects/VortexLM/public/","buildClientDir":"file:///C:/Antigravity%20Proyects/VortexLM/dist/client/","buildServerDir":"file:///C:/Antigravity%20Proyects/VortexLM/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/api/keystatic/[...params]","pattern":"^\\/api\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-api.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/keystatic-astro-page.DEjYCwZa.css"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/keystatic-astro-page.DEjYCwZa.css"}],"routeData":{"type":"page","isIndex":false,"route":"/keystatic/[...params]","pattern":"^\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-astro-page.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/keystatic-astro-page.DEjYCwZa.css"}],"routeData":{"route":"/servicios/desarrollo-de-apps-caracas","isIndex":false,"type":"page","pattern":"^\\/servicios\\/desarrollo-de-apps-caracas\\/?$","segments":[[{"content":"servicios","dynamic":false,"spread":false}],[{"content":"desarrollo-de-apps-caracas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicios/desarrollo-de-apps-caracas.astro","pathname":"/servicios/desarrollo-de-apps-caracas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/keystatic-astro-page.DEjYCwZa.css"}],"routeData":{"route":"/servicios/diseno-web-caracas","isIndex":false,"type":"page","pattern":"^\\/servicios\\/diseno-web-caracas\\/?$","segments":[[{"content":"servicios","dynamic":false,"spread":false}],[{"content":"diseno-web-caracas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicios/diseno-web-caracas.astro","pathname":"/servicios/diseno-web-caracas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/keystatic-astro-page.DEjYCwZa.css"}],"routeData":{"route":"/servicios/sistemas-gestion-medida","isIndex":false,"type":"page","pattern":"^\\/servicios\\/sistemas-gestion-medida\\/?$","segments":[[{"content":"servicios","dynamic":false,"spread":false}],[{"content":"sistemas-gestion-medida","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicios/sistemas-gestion-medida.astro","pathname":"/servicios/sistemas-gestion-medida","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/keystatic-astro-page.DEjYCwZa.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://vortexlm.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Antigravity Proyects/VortexLM/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Antigravity Proyects/VortexLM/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Antigravity Proyects/VortexLM/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Antigravity Proyects/VortexLM/src/pages/servicios/desarrollo-de-apps-caracas.astro",{"propagation":"none","containsHead":true}],["C:/Antigravity Proyects/VortexLM/src/pages/servicios/diseno-web-caracas.astro",{"propagation":"none","containsHead":true}],["C:/Antigravity Proyects/VortexLM/src/pages/servicios/sistemas-gestion-medida.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-astro-page@_@astro":"pages/keystatic/_---params_.astro.mjs","\u0000@astro-page:src/pages/servicios/desarrollo-de-apps-caracas@_@astro":"pages/servicios/desarrollo-de-apps-caracas.astro.mjs","\u0000@astro-page:src/pages/servicios/diseno-web-caracas@_@astro":"pages/servicios/diseno-web-caracas.astro.mjs","\u0000@astro-page:src/pages/servicios/sistemas-gestion-medida@_@astro":"pages/servicios/sistemas-gestion-medida.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-api@_@js":"pages/api/keystatic/_---params_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","C:/Antigravity Proyects/VortexLM/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DeUR0MYj.mjs","C:\\Antigravity Proyects\\VortexLM\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","C:\\Antigravity Proyects\\VortexLM\\.astro\\content-modules.mjs":"chunks/content-modules_CeMLlIDb.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_DpwmDmmK.mjs","C:/Antigravity Proyects/VortexLM/src/content/blog/cuanto-cuesta-pagina-web-profesional-venezuela-2026.mdx?astroPropagatedAssets":"chunks/cuanto-cuesta-pagina-web-profesional-venezuela-2026_C_tISKk-.mjs","C:/Antigravity Proyects/VortexLM/src/content/blog/seo-local-caracas-guia-posicionamiento.mdx?astroPropagatedAssets":"chunks/seo-local-caracas-guia-posicionamiento_DvWCvIp1.mjs","C:/Antigravity Proyects/VortexLM/src/content/blog/sistemas-inventario-facturacion-venezuela.mdx?astroPropagatedAssets":"chunks/sistemas-inventario-facturacion-venezuela_BON2d5xk.mjs","C:/Antigravity Proyects/VortexLM/src/content/blog/por-que-tu-empresa-caracas-necesita-app-movil-2026.mdx?astroPropagatedAssets":"chunks/por-que-tu-empresa-caracas-necesita-app-movil-2026_BanJNY9C.mjs","C:/Antigravity Proyects/VortexLM/src/content/blog/tendencias-ecommerce-venezuela-2026.mdx?astroPropagatedAssets":"chunks/tendencias-ecommerce-venezuela-2026_2gCm7WWa.mjs","C:/Antigravity Proyects/VortexLM/src/content/blog/cuanto-cuesta-pagina-web-profesional-venezuela-2026.mdx":"chunks/cuanto-cuesta-pagina-web-profesional-venezuela-2026_BuJAQ7u6.mjs","C:/Antigravity Proyects/VortexLM/src/content/blog/seo-local-caracas-guia-posicionamiento.mdx":"chunks/seo-local-caracas-guia-posicionamiento_B0mMs4ji.mjs","C:/Antigravity Proyects/VortexLM/src/content/blog/sistemas-inventario-facturacion-venezuela.mdx":"chunks/sistemas-inventario-facturacion-venezuela_SUwnK4Y-.mjs","C:/Antigravity Proyects/VortexLM/src/content/blog/por-que-tu-empresa-caracas-necesita-app-movil-2026.mdx":"chunks/por-que-tu-empresa-caracas-necesita-app-movil-2026_B_ToAKlo.mjs","C:/Antigravity Proyects/VortexLM/src/content/blog/tendencias-ecommerce-venezuela-2026.mdx":"chunks/tendencias-ecommerce-venezuela-2026_BZ2dZlK8.mjs","\u0000@astrojs-manifest":"manifest_CVYD2CwH.mjs","C:/Antigravity Proyects/VortexLM/node_modules/@keystatic/astro/internal/keystatic-page.js":"_astro/keystatic-page.77bi5KdA.js","@astrojs/react/client.js":"_astro/client.BhtkCt6v.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/keystatic-astro-page.DEjYCwZa.css","/sitemap-index.xml","/_astro/client.BhtkCt6v.js","/_astro/index.Dz9v927v.js","/_astro/keystatic-page.77bi5KdA.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"qQlDA8REIVOiWNPYwqVWcS1LkFPH89zIewe+TpdwEZ0="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
