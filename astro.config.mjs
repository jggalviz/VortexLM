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
  adapter: vercel(),
  integrations: [
    react(),
    keystatic(),
    tailwind(),
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes('/desarrollo-web-caracas') &&
        !page.includes('/partner-tecnologico-b2b'),
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
        lib: "https://cdn.jsdelivr.net/npm/@qwik.dev/partytown@0.13.2/lib/",
      },
    }),
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          // Split Keystatic UI into a separate chunk so its CSS doesn't pollute
          // the global bundle loaded on public pages. This chunk is only loaded
          // on the /keystatic/[...params] admin route.
          manualChunks(id) {
            if (id.includes('@keystatic') || id.includes('@radix-ui') || id.includes('@react-aria') || id.includes('@react-stately') || id.includes('@internationalized') || id.includes('react-aria')) {
              return 'keystatic-vendor';
            }
            return null;
          }
        }
      }
    }
  }
});
