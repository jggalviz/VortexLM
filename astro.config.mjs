import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

export default defineConfig({
  site: 'https://vortexlm.com',
  output: 'server',
  adapter: vercel(),
  integrations: [react(), keystatic(), tailwind(), mdx()]
});
