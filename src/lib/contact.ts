// Único lugar donde se define el contacto por WhatsApp.
// Para cambiar el número o el texto prellenado, editar solo este archivo.

/** Formato internacional sin "+" ni espacios (wa.me). */
export const WHATSAPP_NUMBER = '5491144169746';
export const WHATSAPP_MESSAGE = 'Hola, quiero hacer una consulta.';

export function whatsappUrl(message: string = WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const whatsappHref = whatsappUrl();

/** Atributos para todo <a> que abra WhatsApp: {...whatsappLinkAttrs}. */
export const whatsappLinkAttrs = {
  href: whatsappHref,
  target: '_blank',
  rel: 'noopener noreferrer',
  'aria-label': 'Escribinos por WhatsApp (se abre en una pestaña nueva)',
} as const;
