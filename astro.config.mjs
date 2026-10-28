import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Sitio 100% estático. El formulario de contacto corre como Vercel Function en /api/contacto.ts.
export default defineConfig({
  site: 'https://ratehub.com.ar',
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  output: 'static',
});
