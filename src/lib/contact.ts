// Único lugar donde se define el contacto por WhatsApp.
// Para cambiar el número, editar solo este archivo.

/** Formato internacional sin "+" ni espacios (wa.me). */
export const WHATSAPP_NUMBER = '5491144169746';

/** Sin texto prellenado: el chat se abre vacío. */
export const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}`;

/** Atributos para todo <a> que abra WhatsApp: {...whatsappLinkAttrs}. */
export const whatsappLinkAttrs = {
  href: whatsappHref,
  target: '_blank',
  rel: 'noopener noreferrer',
  'aria-label': 'Escribinos por WhatsApp (se abre en una pestaña nueva)',
} as const;
