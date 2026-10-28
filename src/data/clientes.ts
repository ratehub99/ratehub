import type { ImageMetadata } from 'astro';

export interface Cliente {
  nombre: string;
  /** Importar desde src/assets/clientes/ solo cuando haya autorización. Ver logos-pendientes/LEEME.md. */
  logo?: ImageMetadata;
  /** Sitio del cliente (opcional). */
  url?: string;
  /** true solo con autorización escrita del cliente. En producción se muestran únicamente los autorizados. */
  autorizado: boolean;
  /** Fecha de la autorización escrita, formato AAAA-MM-DD. Obligatoria si autorizado = true. */
  fechaAutorizacion?: string;
}

// Regla dura 1 y 2: no se publica ningún logo sin autorización escrita.
// [FALTA: autorización escrita de cada marca. Hasta tenerla, autorizado queda en false.]
export const clientes: Cliente[] = [
  { nombre: 'Megatlon', url: 'https://megatlon.com', autorizado: false },
  { nombre: 'La Estación Fútbol y Pádel', url: 'https://laestacionfutbolpadel.com.ar', autorizado: false },
  { nombre: 'Fiter', url: 'https://fiter.com', autorizado: false },
  { nombre: 'Driving Norte', url: 'https://drivingnorte.com.ar', autorizado: false },
];

for (const c of clientes) {
  if (c.autorizado && (!c.fechaAutorizacion || !c.logo)) {
    throw new Error(`Cliente "${c.nombre}": autorizado = true requiere logo y fechaAutorizacion.`);
  }
}
