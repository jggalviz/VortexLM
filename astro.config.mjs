import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://vortexlm.com',
  output: 'server',
  build: {
    // 'always' inlines every page stylesheet into the HTML that Astro already
    // renders per request. Trade-off: the Tailwind bundle (≈102 kB raw, ≈14 kB
    // compressed) travels inside the HTML instead of as a separate request, so
    // it is part of the first response and blocks nothing. That removes the
    // "Render-blocking requests" audit failure on every public route, at the
    // cost of losing cross-navigation CSS caching (negligible for a marketing
    // funnel where most sessions are a single page view).
    inlineStylesheets: 'always',
  },
  adapter: vercel({
    webAnalytics: { enabled: true },
    imagesConfig: {
      sizes: [320, 640, 1280],
      domains: [] // Evita el error 'not iterable' de forma definitiva
    },
    functionPerRoute: false,
    edgeMiddleware: false
  }),
  integrations: [
    react(),
    keystatic(),
    // applyBaseStyles: false → Tailwind's global stylesheet is no longer injected
    // into every page by the integration. It is owned by `src/styles/tailwind.css`
    // and imported explicitly by the layouts that need it (BaseLayout,
    // DashboardLayout, login, registro, admin), which keeps the /keystatic CMS
    // route free of public-site CSS and out of the critical path.
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes('/desarrollo-web-caracas') &&
        !page.includes('/partner-tecnologico-b2b'),
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
        resolveUrl: function (url) {
          if (url.hostname === 'www.googletagmanager.com' || url.hostname === 'www.google-analytics.com') {
            var proxyUrl = new URL('https://cdn.builder.io/api/v1/proxy-api');
            proxyUrl.searchParams.append('url', url.href);
            return proxyUrl;
          }
          return url;
        }
      }
    }),
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          // Keep the heavy Keystatic CMS dependency graph (≈2.5 MB) in its own
          // chunk so it is only ever fetched when the /keystatic admin route is
          // visited. The rule must be precise: naming @keystatic / @react-aria
          // modules alone previously sucked React core into that same chunk, so
          // every hydrated dashboard island ended up importing the CMS bundle.
          // React now lives in `react-vendor`, shared by the islands and the CMS.
          manualChunks(id) {
            const modulePath = id.replace(/\\/g, '/');
            if (!modulePath.includes('/node_modules/')) return null;

            // Keystatic admin UI + its headless UI dependency graph (admin-only).
            if (
              /\/node_modules\/@(keystatic|react-aria|react-stately|internationalized|radix-ui|spectrum)\//.test(
                modulePath
              )
            ) {
              return 'keystatic-vendor';
            }

            // React runtime shared by the portal islands and the CMS.
            if (/\/node_modules\/(react|react-dom|scheduler)\//.test(modulePath)) {
              return 'react-vendor';
            }

            // Small helpers shared by the portal islands and the CMS graph
            // (tslib's __awaiter/__rest, fetch shims). Naming them explicitly
            // stops Rollup from folding them into `keystatic-vendor`, which
            // would force every hydrated island to download the 2.5 MB CMS
            // bundle just to reach them.
            if (
              /\/node_modules\/(tslib|node-fetch|cross-fetch|whatwg-url|web-streams-polyfill)\//.test(
                modulePath
              )
            ) {
              return 'vendor-shared';
            }

            return null;
          }
        }
      }
    }
  }
});
// Force deploy node 22