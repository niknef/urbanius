// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Cambiar por el dominio definitivo antes de publicar (afecta sitemap, canonical y OG).
const SITE = process.env.PUBLIC_SITE_URL ?? 'https://urbanusqhse.com.ar';

export default defineConfig({
  site: SITE,
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize: (item) => ({ ...item, lastmod: new Date().toISOString() }),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
