# Decisiones

## 2026-10-27 — Title de la home
- **Qué:** title de la home = "RateHub | Construimos los sistemas que tu negocio necesita". og:title y twitter:title iguales (antes no existían). Description e imagen OG sin tocar.
- **Por qué:** pedido del responsable; el title anterior ("RateHub — Sitios web conectados a tus datos") no reflejaba el posicionamiento.
- **Pendiente:** template para páginas internas (propuesto, no aplicado). Copy del title es borrador hasta revisión humana.

## 2026-10-27 — WhatsApp con texto genérico y centralizado
- **Qué:** todos los links a WhatsApp salen de `src/lib/contact.ts` (número, texto, URL y atributos). Texto prellenado: "Hola, quiero hacer una consulta." (antes mencionaba "un sitio web"). Links con `target="_blank"`, `rel="noopener noreferrer"` y aria-label. `public/llms.txt` pasó a endpoint (`src/pages/llms.txt.ts`) para usar el mismo helper.
- **Por qué:** el sitio ofrece cuatro servicios, no solo sitios web; el texto no debía sesgar la consulta. Un solo lugar para cambiar número y texto.
- **Pendiente:** el número (5491144169746) ya estaba en el repo; confirmar que sigue vigente. Probado: URL válida y wa.me redirige a api.whatsapp.com conservando el texto; no se probó la apertura en un dispositivo real. Copy del aria-label es borrador hasta revisión humana.

## 2026-10-27 — WhatsApp sin texto prellenado
- **Qué:** los links a WhatsApp ya no llevan `?text=`; el chat se abre vacío (`https://wa.me/<número>`). Reemplaza el texto genérico de la decisión anterior. Se mantiene la centralización en `src/lib/contact.ts`.
- **Por qué:** pedido del responsable: no quieren texto predeterminado cuando alguien escribe.
- **Qué lo cambiaría:** si se quiere medir el origen de las consultas, un texto prellenado sería la forma más simple.

## 2026-10-28 — Una sola sección de servicios (unifica "Qué hacemos" y "Servicios")
- **Qué:** se eliminó la sección "Qué hacemos" (`#conectado`, mockup de terminal con pestañas). Queda una sola sección `#servicios` con 4 tarjetas, sin bajada ni chips: Sitio web, Medición y orden, Gestión comercial, Automatización y visibilidad. Menú sin "Qué hacemos"; footer y `llms.txt` actualizados; todos los links apuntan a `#servicios`.
- **Por qué:** las dos secciones repetían los mismos 4 servicios con distinto formato. Pedido del responsable: es una descripción de lo que se ofrece, no un paso a paso, y sin bajada.
- **Contradice al brief:** la Fase 3 pide que la escalera se vea como "camino". Se decidió lo contrario para la home: áreas de trabajo sin numeración ni orden. Se mantiene la escalera como lógica comercial interna (entrada → upsell).
- **Qué la cambiaría:** si se quiere mostrar un recorrido (p. ej. por baja conversión a servicios 2 a 4), se vuelve a una versión con pasos.
- **Pendiente:** copy en borrador hasta revisión humana. `[FALTA: Recurrencia (mantenimiento, hosting, retainers): qué se ofrece]`; no se muestra en el sitio. Hosting y mantenimiento se sacaron del texto de "Sitio web" y siguen nombrados en el carrusel del hero y en el footer ("Lo que construimos"); falta decidir si se mantienen.

## 2026-10-28 — Franja de logos de clientes en lugar de la línea que gira
- **Qué:** se eliminó el marquee del hero y su CSS. En su lugar, `DsLogos.astro` (debajo de los botones del hero), alimentada por `src/data/clientes.ts` (nombre, logo, url opcional, autorizado, fecha opcional). Logos con `astro:assets`, todos de la misma altura (32 px mobile, 36 px desktop) y en una sola tinta por CSS (`brightness(0)`; con `invert(1)` en modo oscuro): negro sobre fondo claro, blanco sobre fondo oscuro. Mobile: tirita que corre, logos uno al lado del otro; desktop: estática, centrada y con wrap; con `prefers-reduced-motion` queda estática. Producción muestra solo `autorizado: true`; sin ninguno no renderiza; en previews de Vercel y dev muestra 4 placeholders grises.
- **Clientes:** Megatlon, La Estación Fútbol y Pádel, Fiter, Driving Norte, Overkicks y Usana, con `autorizado: true` por indicación del responsable (ya trabajan con ellos; no manejan autorizaciones escritas). Los 4 primeros se descargaron de sus sitios; Overkicks y Usana los adjuntó el responsable (recortados al área del logo). Guardados en `src/assets/clientes/`. Esto es una excepción a las reglas duras 1 y 2 del `CLAUDE.md` (autorización escrita), decidida por el responsable.
- **Hosting y mantenimiento:** se aprobó borrar el marquee; queda solo en el footer. Sigue pendiente `[FALTA: Recurrencia]`.
- **Qué la cambiaría:** que alguna marca pida retirar su logo (poner `autorizado: false`), o que haya muchos logos y convenga otro formato.
- **Pendiente:** el rótulo "Confían en nosotros" es borrador.

## 2026-10-28 — Formulario de contacto (Resend + Cloudflare Turnstile)
- **Qué:** formulario al final de la home (`#contacto`, `DsContactForm.astro`) que envía a `/api/contacto`. Campos: nombre, apellido, email, empresa y mensaje, **todos obligatorios**, más checkbox de consentimiento con link a `/privacidad` y aviso "No incluyas datos de salud ni información sensible." Servidor: valida longitudes y formato de email, honeypot (`website`), verifica el token de Turnstile contra `siteverify` antes de enviar y manda el mail por la API de Resend con `reply_to` = email de quien escribe. No se guarda nada en base de datos. Lógica en `src/lib/contact-form.ts` (8 tests: `npm test`).
- **Estructura (cambio aprobado por el responsable):** `output: 'hybrid'` + `@astrojs/vercel@7.8.2` (la 11 no es compatible con Astro 4). Todo el sitio sigue prerenderizado; solo `/api/contacto` corre en servidor. Se descartó Astro Actions porque los formularios con Actions exigen que la página sea on-demand (sacaría la home del prerender).
- **Resend en vez de Gmail SMTP:** elegido por el responsable. Resend usa una clave acotada a envío; Gmail SMTP exigía una contraseña de aplicación con acceso a la casilla y SMTP relay no sirve en Vercel (sin IP fija).
- **Variables:** `RESEND_API_KEY`, `TURNSTILE_SECRET_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` (solo servidor) y `PUBLIC_TURNSTILE_SITE_KEY` (única pública). Esquema tipado con `astro:env` (experimental en Astro 4.16). `.env.example` sin valores. En desarrollo se usan las test keys oficiales de Cloudflare.
- **Publicación controlada por la site key:** si `PUBLIC_TURNSTILE_SITE_KEY` no está cargada en Vercel, el formulario no se renderiza y queda WhatsApp/email. Para publicarlo hay que cargar las variables y redeployar.
- **Sin JavaScript:** no es viable, Turnstile necesita JS. El formulario se oculta sin JS y se muestra un aviso con WhatsApp y email como alternativa.
- **Privacidad:** `/privacidad` y `/privacy` ya existían; se actualizaron (formulario, Resend, Cloudflare Turnstile, Google Workspace, sin base de datos). No se agregó leyenda de borrador porque la regla 6 del CLAUDE.md prohíbe leyendas de borrador en el sitio.
- **Probado:** envío ok (solo con `fetch` simulado: **no se envió ningún mail real**), Turnstile fallido (con la secret de prueba que siempre rechaza, contra el siteverify real), campos inválidos, honeypot, GET → 405. Accesibilidad: etiquetas en todos los campos, resumen de errores con foco, `aria-invalid`, orden de tabulación, honeypot inerte. Responsive 375 px sin scroll horizontal y modo oscuro revisados. No se probó con lector de pantalla ni en un dispositivo real.
- **Riesgos:** (1) el adapter 7.x usa **Node 18** como runtime de la función (fuera de soporte); hay que revisar la versión de Node en Vercel. (2) `getSecret` de `astro:env` es experimental en este adapter. (3) Resend gratis: 100 emails/día y 3.000/mes; un ataque que pase Turnstile podría agotar el cupo. (4) El token de Turnstile se valida con la IP del visitante; no se verificó si Turnstile deja cookies, y la política dice que no usamos cookies de analítica ni publicidad.
- **Qué lo cambiaría:** migrar a Astro 5 (adapter vigente, `astro:env` estable, Node actual), o superar el cupo de Resend.
- **Pendiente:** cuentas y claves (Resend, Turnstile), DNS en Cloudflare, variables en Vercel, revisión legal de la política de privacidad.
