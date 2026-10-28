// Datos compartidos del sitio.

export const WHATSAPP_NUMBER = '5491144169746';
export const WHATSAPP_MESSAGE = 'Hola, quiero consultar por un sitio web para mi negocio.';
export const CONTACT_EMAIL = 'info@ratehub.com.ar';

export const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export interface Service {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  includes: string[];
}

export const services: Service[] = [
  {
    id: 'sitio',
    title: 'Sitio web',
    tagline: 'Diseño, desarrollo, hosting y mantenimiento.',
    desc: 'Diseñamos y desarrollamos tu sitio para que se vea bien en el celular, se entienda rápido y la gente te contacte. Nos encargamos también del hosting y del mantenimiento para que siga funcionando y actualizado.',
    includes: ['Diseño', 'Desarrollo', 'Hosting', 'Mantenimiento'],
  },
  {
    id: 'comercial',
    title: 'Gestión comercial',
    tagline: 'Formularios inteligentes, CRM y email marketing.',
    desc: 'Que ninguna consulta se pierda. Los formularios te entregan los datos ordenados, el CRM te muestra en qué punto está cada contacto y el email marketing te ayuda a mantener la relación con tus clientes.',
    includes: ['Formularios inteligentes', 'CRM', 'Email marketing'],
  },
  {
    id: 'automatizacion',
    title: 'Automatización',
    tagline: 'Que las tareas repetitivas se hagan solas.',
    desc: 'Conectamos tus herramientas para que lo que hoy hacés a mano pase solo: avisos al equipo cuando entra una consulta, datos que viajan de un sistema a otro sin copiar y pegar, mensajes y recordatorios automáticos, seguimiento de contactos y reportes que llegan listos. Menos tiempo en tareas manuales y menos errores.',
    includes: [
      'Avisos automáticos al equipo',
      'Carga de datos entre sistemas',
      'Mensajes y recordatorios',
      'Seguimiento de contactos',
      'Reportes periódicos',
    ],
  },
  {
    id: 'medicion',
    title: 'Medición y visibilidad',
    tagline: 'Dashboards de métricas.',
    desc: 'Armamos tableros para que veas cómo viene tu negocio de un vistazo: consultas, ventas y resultados en una sola pantalla, siempre actualizados.',
    includes: ['Dashboards de métricas'],
  },
];
