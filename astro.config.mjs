import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://vortexlm.com',
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind(), mdx()]
});
