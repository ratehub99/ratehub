# BRIEF — Actualización del sitio ratehub.com.ar

> Última actualización: 27/10/2026
> Uso: una sesión de Claude Code por fase. Al iniciar cada sesión, leé este archivo completo y ejecutá **solo la fase que te indique el usuario**. No avances a la siguiente.

---

## 0. Cómo trabajar entre sesiones

Cada sesión arranca sin memoria. La continuidad vive en el repo:

- Al terminar una fase, guardá su entregable en `docs/` (nombres abajo) y actualizá `docs/decisiones.md`.
- Al empezar una fase, leé primero los entregables de las fases anteriores y `docs/decisiones.md`.
- Si falta un archivo de una fase previa, avisá y frená. No lo reconstruyas por tu cuenta.

| Fase | Entregable | Lee antes |
|---|---|---|
| 1. Auditoría | `docs/fase-1-auditoria.md` | este brief |
| 2. Dirección visual | `docs/fase-2-direccion-visual.md` | brief + fase 1 |
| 3. Arquitectura y copy | `docs/fase-3-arquitectura-copy.md` | brief + fases 1 y 2 + decisiones |
| 4. Implementación | código en rama aparte + `docs/fase-4-implementacion.md` | todo lo anterior |
| 5. Entrega | `docs/fase-5-checklist.md` | todo lo anterior |

`docs/decisiones.md`: registro corto con fecha de cada decisión aprobada por el usuario (qué, por qué, qué la cambiaría). Nada se da por decidido hasta que el usuario lo apruebe.

**Al final de cada fase:** frená, resumí en 5 líneas, listá los `[FALTA: ...]` y preguntas abiertas, y esperá aprobación.

---

## 1. Rol

Sos responsable de contenido y frontend de `ratehub.com.ar`. Trabajás sobre el repo actual (Astro, deploy en Vercel vía GitHub, deploy automático en push). Tu tarea es actualizar todo el contenido del sitio a la dirección de negocio actual y proponer una dirección visual con criterio antes de construirla.

---

## 2. Dirección de negocio actual

- RateHub es un estudio de diseño y desarrollo de sitios web. El sitio es la puerta de entrada a servicios de datos y automatización.
- **Diferencial:** equipo de diseño y marketing con capacidad técnica en datos. El sitio nace conectado a métricas, CRM y automatizaciones, no como pieza aislada.
- **Escalera de servicios (entry point y upsell):**
  1. Diseño y desarrollo de sitio web (entry point).
  2. Medición y orden: analytics, tracking, organización de datos.
  3. Gestión comercial: CRM, formularios conectados, email marketing.
  4. Automatización y visibilidad: automatizaciones de procesos, dashboards de métricas.
  5. Recurrencia: mantenimiento, hosting, retainers. `[FALTA: qué se ofrece y a qué precio]`
- **Etapa:** pre-lanzamiento. Sin clientes publicables. Portfolio mínimo = el propio sitio + 1 o 2 casos. `[FALTA: casos]`
- **Segmento foco:** `[FALTA: no definido]`. El sitio no debe prometerle a todos.
- **Mercado:** Argentina (posible España después). Idioma: español rioplatense. `[FALTA: confirmar si hay versión en inglés]`
- **CTA principal:** `[FALTA: llamada / WhatsApp / formulario]`
- **Producto descartado:** tablero de reseñas de Google. No debe quedar rastro en el sitio.

### Infraestructura (contexto técnico)

- Dominio `ratehub.com.ar` en NIC.ar, DNS en Cloudflare (plan Free), todos los registros en **DNS only** (sin proxy naranja).
- Email: Google Workspace `@ratehub.com.ar`.
- Hosting: Vercel conectado a GitHub. Dominio custom (`ratehub.com.ar` y `www`) **pendiente de verificación**.
- **Plan de Vercel:** el plan Hobby es solo para uso personal no comercial. El sitio de un estudio que vende servicios es uso comercial y requiere Pro (USD 20 por usuario por mes, precio de lista). `[CONFIRMAR: en qué plan está hoy la cuenta]`
- SPF, DKIM y DMARC: pendientes. Bloquean los envíos comerciales.

---

## 3. Reglas duras (aplican a todas las fases)

1. **No inventes** clientes, casos, testimonios, métricas, logos, precios ni certificaciones. Si falta un dato, dejá `[FALTA: ...]` visible y listalo al final de la fase.
2. **No nombres a ningún cliente** (incluida la clínica en negociación) sin autorización escrita.
3. **No publiques precios ni cifras comerciales** (tampoco en USD) salvo que estén confirmados en este brief.
4. **Sin credenciales, claves ni tokens** en el código, el repo o el chat. Variables de entorno en Vercel.
5. **Datos personales:** si el sitio recolecta datos (formularios, analytics, cookies), incluí política de privacidad y términos marcados como "borrador pendiente de revisión legal" (Ley 25.326, Argentina). **No recolectes datos de salud.** Si algo los toca, frená y avisame.
6. **Copy generado con IA** queda marcado como borrador hasta revisión humana.
7. **Costo:** cero suscripciones nuevas. Solo Vercel + GitHub y planes gratuitos. Tope total del proyecto: 100 USD/mes. Si proponés algo con costo, indicá USD/mes.
8. **Sin prácticas que violen políticas de plataformas** (nada de review gating ni similares), ni siquiera como ejemplo en el copy.
9. **Cambios de alcance o decisiones irreversibles:** preguntá antes.
10. **Referencias = inspiración** de estructura y principios. No copies textos, imágenes, layouts exactos ni assets de ningún sitio.
11. Distinguí siempre **dato verificado**, **estimación** (con método) y **supuesto**. Si no sabés algo, decilo.
12. Si falta contexto, preguntá primero lo que más cambia el resultado.

---

## FASE 1 — Auditoría (sin modificar nada)

**Objetivo:** saber exactamente qué hay hoy en el sitio y qué hay que cambiar.

1. Listá páginas, secciones, textos, metadatos (title, description, OG), formularios, scripts de analytics y links.
2. Buscá y listá **todo rastro del tablero de reseñas**: textos, páginas, formularios, metadatos, links, imágenes, nombres de rutas y componentes.
3. Marcá qué contenido está desactualizado respecto de la dirección actual y qué se puede reutilizar.
4. Detectá problemas técnicos: performance, accesibilidad, SEO básico, responsive, links rotos.
5. Revisá que no haya credenciales, claves o tokens en el repo ni en el historial reciente. Si hay, avisá antes de hacer cualquier otra cosa.

**Entregable:** `docs/fase-1-auditoria.md` con una tabla `sección | estado actual | qué cambia | qué dato necesito del usuario`, más la lista de problemas técnicos priorizados por impacto vs. esfuerzo.

---

## FASE 2 — Dirección visual

**Objetivo:** elegir una dirección con argumentos, no por gusto, y validarla con un mockup mínimo.

**Por qué importa:** el diferencial de RateHub es la conexión con datos y resultados, no solo lo visual. Competir solo por estética nos deja en el terreno de freelancers baratos, Wix y herramientas de IA.

### Referencias (ya revisadas por el usuario con otra herramienta, solo texto y estructura; no se vio lo visual)

| Ref. | Qué se observó | Qué comunica |
|---|---|---|
| A. `bonchostudios.com` | Minimalista, 4 páginas, poco texto, titulares con personalidad, CTA único. Servicios en frases cortas numeradas. Sin métricas ni casos en la home. | Estudio creativo, cercano. Personalidad, no prueba. |
| B. `lemon.me` | Landing larga de consumo, stats grandes, módulos con una acción cada uno, FAQ, footer legal extenso. Estética fintech/cripto. | Confianza por números y respaldo regulatorio. |
| C. `happyrobot.ai` | Sobrio B2B, organizado por plataforma/industria/función, casos con resultados, badges de compliance, CTA de demo. Pensado para empresas muy grandes. | Solidez y proceso. Las métricas son autodeclaradas. |
| D. `github.com` | **Sin revisar.** | — |

**Hipótesis de trabajo (a validar o refutar, con confianza media):** híbrido A + C. Tono y layout limpios (A) con estructura de prueba (caso, resultado, CTA) a escala pyme (C). **Sin estética web3**: no genera confianza en negocios locales y B se apoya en números y respaldo que RateHub todavía no tiene.

### Tareas

1. Abrí las referencias que puedas y, si no podés ver lo visual, decilo. No opines sobre estética como si la hubieras visto.
2. Para cada opción (A, B, C, D si la abrís, e híbrido), evaluá: qué comunica, qué comprador la elegiría y cuál se espantaría, esfuerzo de implementación en Astro (con Tailwind solo si el repo ya lo usa) **sin librerías pagas**, y riesgos (performance, accesibilidad, mantenimiento por 2 personas).
3. Entregá cuadro comparativo y **UNA recomendación** con nivel de confianza (alto/medio/bajo), costo y qué información la cambiaría.
4. Construí **solo** un mockup del hero + una sección de servicios de la opción recomendada y de una alternativa, en rutas de preview (por ejemplo `/preview/a` y `/preview/b`). No rehagas el sitio todavía.
5. Marcá sesgos: el del usuario (elegir lo que impresiona a colegas de diseño en vez de lo que convierte al comprador) y los tuyos (tendencia a complacer, soluciones de gran empresa).

**Entregable:** `docs/fase-2-direccion-visual.md` + mockups en rama aparte con preview de Vercel.

---

## FASE 3 — Arquitectura y copy (requiere dirección visual aprobada)

1. **Estructura de páginas** y orden de la home, con objetivo y CTA de cada sección. La escalera de servicios debe verse como **camino**, no como lista suelta: cada paso deja la puerta abierta al siguiente.
2. **Copy completo** en español rioplatense: directo, claro, sin relleno, sin promesas no verificables. Todo marcado como borrador pendiente de revisión humana.
3. **Prueba:** usá solo el propio sitio y proyectos propios o autorizados. Sin casos reales, dejá placeholder `[FALTA: caso]` y proponé cómo producirlos (por ejemplo un proyecto propio a precio de lanzamiento).
4. **Páginas legales:** política de privacidad y términos como borrador pendiente de revisión de un abogado.
5. Metadatos (title, description, OG) por página.
6. No incluyas precios. Si el usuario los aprobó, estarán en `docs/decisiones.md`.

**Entregable:** `docs/fase-3-arquitectura-copy.md` con sitemap, copy por sección y lista de `[FALTA: ...]`.

---

## FASE 4 — Implementación (requiere copy aprobado)

1. Trabajá en rama aparte con preview de Vercel. Commits chicos y revisables.
2. Implementá estructura, copy y diseño aprobados.
3. Metadatos, OG, sitemap, robots, favicon.
4. Analytics y aviso de cookies **solo si corresponde** y de la forma aprobada.
5. Formularios conectados **sin datos sensibles**. Sin credenciales en el código.
6. Eliminá todo rastro del tablero de reseñas detectado en la Fase 1.
7. Accesibilidad y performance: reportá Lighthouse antes y después.
8. Nada se mergea a `main` sin aprobación explícita del usuario.

**Entregable:** `docs/fase-4-implementacion.md` con qué se hizo, qué quedó pendiente, resultados de Lighthouse y link al preview.

---

## FASE 5 — Cierre y checklist previo a publicar

Verificá y reportá estado (hecho / pendiente / no pude verificar) de cada punto. **No marques como hecho lo que no pudiste comprobar.**

- [ ] Dominio custom (`ratehub.com.ar` y `www`) verificado en Vercel.
- [ ] Plan de Vercel apto para uso comercial confirmado por el usuario.
- [ ] Registros DNS en Cloudflare en **DNS only**.
- [ ] SPF, DKIM y DMARC configurados y probados (el usuario los configura; vos verificás).
- [ ] Política de privacidad y términos publicados, con aviso de que están pendientes de revisión legal.
- [ ] Sin rastro del tablero de reseñas (textos, rutas, formularios, metadatos).
- [ ] Sin datos de salud ni formularios que los pidan.
- [ ] Formulario y links probados.
- [ ] Sin credenciales en el repo.
- [ ] Lista final de `[FALTA: ...]` resuelta o aceptada por el usuario.

**Entregable:** `docs/fase-5-checklist.md`.

---

## Cómo invocar cada sesión (para el usuario)

> Leé `BRIEF-SITIO-RATEHUB.md` y los archivos de `docs/`. Ejecutá **solo la FASE N**. Al terminar, guardá el entregable, actualizá `docs/decisiones.md` y esperá mi aprobación.
