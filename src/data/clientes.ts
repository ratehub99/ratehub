import type { ImageMetadata } from 'astro';
import megatlon from '../assets/clientes/megatlon.svg';
import laEstacion from '../assets/clientes/la-estacion.png';
import fiter from '../assets/clientes/fiter.svg';
import drivingNorte from '../assets/clientes/driving-norte.webp';

export interface Cliente {
  nombre: string;
  logo: ImageMetadata;
  /** Sitio del cliente (opcional). */
  url?: string;
  /** En producción se muestran únicamente los autorizados. */
  autorizado: boolean;
  /** Fecha de autorización, formato AAAA-MM-DD (opcional). */
  fechaAutorizacion?: string;
}

// Los logos se muestran en una sola tinta (negro sobre blanco, blanco sobre negro) por CSS, sin importar el color original.
export const clientes: Cliente[] = [
  { nombre: 'Megatlon', logo: megatlon, url: 'https://megatlon.com', autorizado: true },
  { nombre: 'La Estación Fútbol y Pádel', logo: laEstacion, url: 'https://laestacionfutbolpadel.com.ar', autorizado: true },
  { nombre: 'Fiter', logo: fiter, url: 'https://fiter.com', autorizado: true },
  { nombre: 'Driving Norte', logo: drivingNorte, url: 'https://drivingnorte.com.ar', autorizado: true },
];
