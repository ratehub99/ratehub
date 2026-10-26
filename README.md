# RateHub

Sitio de RateHub (ratehub.com.ar): construimos los sistemas que tu negocio necesita — sitios web, gestión comercial (formularios, CRM, email marketing), automatización y dashboards de métricas.

## Stack

- [Astro](https://astro.build) 4 + [Tailwind CSS](https://tailwindcss.com) 3
- Tipografías Geist y Geist Mono, autoalojadas desde el paquete npm `geist` (licencia SIL OFL)
- Hosting: Vercel

## Páginas

| Ruta | Contenido |
|------|-----------|
| `/` | Home (sistema visual "técnico") |
| `/privacidad` | Política de privacidad |
| `/privacy` | Privacy policy, traducción al inglés |
| `/terminos` | Términos de uso |
| `/llms.txt` | Resumen del sitio para modelos de lenguaje (`public/llms.txt`) |

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/ 
npm run preview  # sirve dist/
```

`.npmrc` fija `legacy-peer-deps=true`: el paquete `geist` declara `next` como peer dependency y no hace falta instalarlo.

## Estructura

- `src/layouts/Ds.astro`: layout del sistema visual (tema claro por defecto, modo oscuro con la clase `.dark`).
- `src/components/ds/`: navbar, hero, secciones y footer.
- `src/styles/ds.css`: tokens de color, tipografía y botones.
- `src/data/site.ts`: datos compartidos (servicios, número de WhatsApp, mail de contacto).

Reglas de contenido y de trabajo: ver `CLAUDE.md`.
