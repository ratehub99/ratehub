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
- **Qué:** se eliminó el marquee del hero ("Lo que construimos", 7 capacidades) con su CSS de animación. En su lugar, `DsLogos.astro` (debajo de los botones del hero), alimentada por `src/data/clientes.ts` (nombre, logo, url opcional, autorizado, fechaAutorizacion). Estática, con wrap, logos con `astro:assets`, en escala de grises. Se resuelve en build: producción muestra solo `autorizado: true` y, si no hay ninguno, no renderiza nada; en previews de Vercel (`VERCEL_ENV=preview`) y en `npm run dev` muestra 4 placeholders grises "[FALTA: logo autorizado]". El build falla si un cliente autorizado no tiene logo y fecha.
- **Por qué:** pedido del responsable. Reglas duras 1 y 2: ningún logo se publica sin autorización escrita.
- **Logos:** se descargaron de los sitios de Megatlon, La Estación Fútbol y Pádel, Fiter y Driving Norte por pedido del responsable. Quedan en `logos-pendientes/`, fuera de `src/` y del build, con `autorizado: false`. No hay registro de que sean clientes ni de autorización. Para publicar uno: ver `logos-pendientes/LEEME.md`.
- **Hosting y mantenimiento:** el responsable aprobó borrar el marquee; ese servicio queda solo en el footer. Sigue pendiente `[FALTA: Recurrencia]`.
- **Qué la cambiaría:** si la franja pasara a mostrar otro tipo de prueba (casos propios), o si los logos autorizados fueran muchos y hiciera falta otro formato.
- **Pendiente:** `[FALTA: autorización escrita de cada marca]`. El rótulo "Confían en nosotros" es borrador y solo corresponde si son clientes. Logos de La Estación y Fiter son claros (para fondo oscuro): casi no se ven sobre el fondo blanco del sitio; hace falta versión oscura.
