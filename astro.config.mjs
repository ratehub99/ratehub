import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ratehub.com.ar',
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  output: 'static',
});
