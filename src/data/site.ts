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
    desc: 'Diseño y desarrollo de tu sitio para que se vea bien en el celular, se entienda rápido y la gente te contacte.',
  },
  {
    id: 'hosting',
    title: 'Hosting y mantenimiento',
    desc: 'Nos ocupamos de que tu sitio esté siempre en línea y actualizado, y de resolver lo que haga falta con el tiempo.',
  },
  {
    id: 'comercial',
    title: 'Gestión comercial',
    desc: 'Formularios conectados, CRM y email marketing, para que ninguna consulta se pierda y sepas en qué punto está cada contacto.',
  },
  {
    id: 'automatizacion',
    title: 'Automatización y visibilidad',
    desc: 'Tareas repetitivas que se hacen solas, como avisos al equipo o pasar datos de un sistema a otro, y tableros para ver cómo viene tu negocio de un vistazo.',
  },
  {
    id: 'medicion',
    title: 'Medición y orden',
    desc: 'Analytics y seguimiento para saber de dónde llegan tus consultas, y tus datos organizados en un solo lugar.',
  },
];
