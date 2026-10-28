import type { APIRoute } from 'astro';
import { whatsappHref } from '../lib/contact';

export const GET: APIRoute = () =>
  new Response(
    `# RateHub

> RateHub es un estudio de Argentina que construye los sistemas que un negocio necesita: sitios web, gestión comercial (formularios, CRM, email marketing), automatización de tareas y dashboards de métricas. El sitio está en español rioplatense (es-AR).

## Servicios

- Sitio web: diseño, desarrollo, hosting y mantenimiento.
- Gestión comercial: formularios inteligentes, CRM y email marketing.
- Automatización: avisos automáticos al equipo, carga de datos entre sistemas, mensajes y recordatorios, seguimiento de contactos y reportes periódicos.
- Medición y visibilidad: dashboards de métricas.

## Páginas

- [Inicio](https://ratehub.com.ar/): qué hacemos y cómo contactarnos.
- [Servicios](https://ratehub.com.ar/#servicios): detalle de cada servicio.
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
