// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://nschmidt.me',
  base: '/',
  integrations: [
    react(),
    sitemap(),
  ],
  build: {
    assets: '_assets'
  },
  vite: {
    ssr: {
      noExternal: ['react-icons'],
    },
  },
});
