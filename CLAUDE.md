# RateHub — Guía para el agente

## Qué es este repo

Sitio de **ratehub.com.ar**: estudio de diseño y desarrollo de sitios web. El sitio es la puerta de entrada a servicios de datos y automatización. Estático, sin backend.

- Stack: **Astro 4 + Tailwind 3** (se decidió seguir con Astro, no migrar a Next.js).
- Deploy: Vercel, conectado a GitHub (preview por rama).
- Idioma: español rioplatense, trato de vos. Mercado: Argentina.

## Comandos

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview
```

## Rama de trabajo

`claude/focused-hypatia-4fki4e`. No pushear a `main` sin aprobación humana.

## Dirección de negocio

- Diferencial: equipo de diseño y marketing con capacidad técnica en datos. El sitio nace conectado a métricas, CRM y automatizaciones.
- Escalera de servicios (se muestra como camino, no como lista): 1) sitio, 2) medición y orden, 3) gestión comercial, 4) automatización y visibilidad, 5) recurrencia.
- Público: dueños de pymes y empresarios, en buena parte mayores. Tipografía grande, contraste alto, lenguaje sin jerga.
- CTA principal: WhatsApp.
- Pre-lanzamiento: sin precios publicados; se pide que nos contacten.
- Producto descartado: tablero de reseñas de Google. No debe quedar rastro en el sitio.

## Reglas duras

1. No inventar clientes, casos, testimonios, métricas, logos, precios ni certificaciones. Si falta un dato, dejar `[FALTA: ...]` visible.
2. No nombrar a ningún cliente sin autorización escrita.
3. No publicar precios ni cifras comerciales.
4. Sin credenciales ni tokens en el código. Variables de entorno en Vercel.
5. Si el sitio recolecta datos (formularios, analytics, cookies): política de privacidad y términos como "borrador pendiente de revisión legal" (Ley 25.326). No recolectar datos de salud.
6. Todo copy generado con IA queda marcado como borrador hasta revisión humana.
7. Cero suscripciones nuevas. Tope del proyecto: 100 USD/mes; si algo tiene costo, indicar USD/mes.
8. Sin promesas que violen políticas de plataformas (nada de review gating).
9. Cambios de alcance o decisiones irreversibles: preguntar antes.
10. Las referencias son inspiración de estructura; no copiar textos, imágenes ni layouts.

## Forma de trabajo

Por fases, con pausa y aprobación humana al final de cada una: 1 auditoría, 2 dirección visual, 3 arquitectura y copy, 4 implementación, 5 entrega. Distinguir dato verificado, estimación y supuesto. Commits chicos.
