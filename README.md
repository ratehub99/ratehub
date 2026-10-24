# RateHub

Sitio de RateHub (ratehub.com.ar): estudio de diseño y desarrollo de sitios web conectados a métricas, CRM y automatizaciones.

> Estado: pre-lanzamiento. Todo el copy es un **borrador generado con IA, pendiente de revisión humana**. Los textos legales están pendientes de revisión legal (Ley 25.326). Lo que falta confirmar está marcado como `[FALTA: ...]` en el sitio.

## Stack

- [Astro](https://astro.build) 4 + [Tailwind CSS](https://tailwindcss.com) 3
- Tipografías Geist y Geist Mono, autoalojadas desde el paquete npm `geist` (licencia SIL OFL)
- Hosting: Vercel

## Páginas

| Ruta | Contenido |
|------|-----------|
| `/` | Home (sistema visual "técnico") |
| `/privacidad` | Política de privacidad (borrador) |
| `/privacy` | Privacy policy, traducción al inglés (borrador) |
| `/terminos` | Términos de uso (borrador) |
| `/propuestas` | Direcciones visuales de trabajo, `noindex` |

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/ (9 páginas)
npm run preview  # sirve dist/
```

`.npmrc` fija `legacy-peer-deps=true`: el paquete `geist` declara `next` como peer dependency y no hace falta instalarlo.

## Estructura

- `src/layouts/Ds.astro`: layout del sistema visual (tema claro por defecto, modo oscuro con la clase `.dark`).
- `src/components/ds/`: navbar, hero, secciones y footer.
- `src/styles/ds.css`: tokens de color, tipografía y botones.
- `src/data/draft.ts`: datos compartidos (escalera de servicios, número de WhatsApp).

Reglas de contenido y de trabajo: ver `CLAUDE.md`.
