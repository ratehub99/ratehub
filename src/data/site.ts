// Datos compartidos del sitio.

export const CONTACT_EMAIL = 'info@ratehub.com.ar';

export interface Service {
  id: string;
  title: string;
  desc: string;
}

// BORRADOR de copy generado con IA: pendiente de revisión humana.
// Son áreas de trabajo, no pasos: sin numeración. El orden es el de la grilla.
export const services: Service[] = [
  {
    id: 'sitio',
    title: 'Sitio web',
    desc: 'Diseño y desarrollo de tu sitio con una estética cuidada, para que se vea bien en cualquier dispositivo, explique con claridad tu propuesta y facilite que te contacten.',
  },
  {
    id: 'hosting',
    title: 'Hosting y mantenimiento',
    desc: 'Sitio en línea y actualizado, con soporte cuando lo necesites.',
  },
  {
    id: 'comercial',
    title: 'Gestión comercial',
    desc: 'Organización de cómo llegan y se atienden tus consultas a través de formularios conectados, CRM y email marketing, para que sepas en qué etapa está cada contacto.',
  },
  {
    id: 'automatizacion',
    title: 'Automatización y eficiencia',
    desc: 'Automatización de tareas repetitivas para ahorrar tiempo y mejorar tus procesos.',
  },
  {
    id: 'medicion',
    title: 'Medición y orden',
    desc: 'Analytics, seguimiento y dashboards para medir tus resultados y saber de dónde llegan tus consultas, con tus datos organizados en un solo lugar.',
  },
];
