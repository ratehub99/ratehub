// BORRADOR generado con IA, pendiente de revisión humana.
// Contenido compartido por las propuestas visuales (/propuestas/*).

// [FALTA: número de WhatsApp en formato internacional sin "+", ej. 5491100000000]
export const WHATSAPP_NUMBER = '';
export const WHATSAPP_MESSAGE = 'Hola, quiero consultar por un sitio web para mi negocio.';

export interface Step {
  n: string;
  title: string;
  desc: string;
  missing?: string;
}

export const steps: Step[] = [
  {
    n: '1',
    title: 'Tu sitio web',
    desc: 'Diseñamos y desarrollamos tu sitio para que se vea bien en el celular, se entienda rápido y la gente te contacte.',
  },
  {
    n: '2',
    title: 'Medición y orden',
    desc: 'Analytics, seguimiento y organización de tus datos, para saber de dónde llegan tus consultas.',
  },
  {
    n: '3',
    title: 'Gestión comercial',
    desc: 'CRM, formularios conectados y email marketing, para que cada consulta tenga seguimiento.',
  },
  {
    n: '4',
    title: 'Automatización y visibilidad',
    desc: 'Automatizamos tareas que se repiten y armamos tableros para ver cómo viene tu negocio de un vistazo.',
  },
  {
    n: '5',
    title: 'Acompañamiento mensual',
    desc: 'Mantenimiento, hosting y seguimiento continuo de todo lo anterior.',
    missing: 'FALTA: qué incluye y cómo se contrata',
  },
];
