import type { APIRoute } from 'astro';
import { whatsappHref } from '../lib/contact';

export const GET: APIRoute = () =>
  new Response(
    `# RateHub

> RateHub es un estudio de Argentina que construye los sistemas que un negocio necesita: sitio web, gestión comercial, automatización y medición de resultados. El sitio está en español rioplatense (es-AR).

## Servicios

- Sitio web: diseño y desarrollo de tu sitio.
- Hosting y mantenimiento: sitio en línea y actualizado, con soporte.
- Gestión comercial: formularios conectados, CRM y email marketing.
- Automatización y eficiencia: automatización de tareas repetitivas.
- Medición y orden: analytics, seguimiento y dashboards.

## Páginas

- [Inicio](https://ratehub.com.ar/): qué hacemos y cómo contactarnos.
- [Servicios](https://ratehub.com.ar/#servicios): lo que ofrecemos.
- [Política de privacidad](https://ratehub.com.ar/privacidad): cómo tratamos los datos personales (versión en inglés: https://ratehub.com.ar/privacy).
- [Términos de uso](https://ratehub.com.ar/terminos): condiciones de uso del sitio.

## Contacto

- Mail: info@ratehub.com.ar
- WhatsApp: ${whatsappHref}

## Notas

- Los precios no se publican: cada proyecto se cotiza a medida a partir de una consulta.
`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
