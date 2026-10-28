import { defineConfig, envField } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

// 'hybrid': todo el sitio se prerenderiza; solo las rutas con `export const prerender = false`
// (hoy: /api/contacto) corren en servidor.
export default defineConfig({
  site: 'https://ratehub.com.ar',
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  output: 'hybrid',
  adapter: vercel(),
  experimental: {
    // Esquema tipado de variables de entorno (API experimental en Astro 4.16).
    env: {
      schema: {
        RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
        TURNSTILE_SECRET_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
        CONTACT_TO_EMAIL: envField.string({ context: 'server', access: 'secret', optional: true }),
        CONTACT_FROM_EMAIL: envField.string({ context: 'server', access: 'secret', optional: true }),
        // Única variable que llega al cliente: la site key de Turnstile es pública por diseño.
        PUBLIC_TURNSTILE_SITE_KEY: envField.string({ context: 'client', access: 'public', optional: true }),
      },
    },
  },
});
