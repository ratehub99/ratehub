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
