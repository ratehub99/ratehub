import type { ImageMetadata } from 'astro';
import megatlon from '../assets/clientes/megatlon.svg';
import laEstacion from '../assets/clientes/la-estacion.png';
import fiter from '../assets/clientes/fiter.svg';
import drivingNorte from '../assets/clientes/driving-norte.webp';
import overkicks from '../assets/clientes/overkicks.png';
import usana from '../assets/clientes/usana.png';

export interface Cliente {
  nombre: string;
  logo: ImageMetadata;
  /** En producción se muestran únicamente los autorizados. */
  autorizado: boolean;
  /** Multiplicador sobre la altura base (--logo-h) para compensar ópticamente el peso de cada logo. Por defecto 1. */
  escala?: number;
  /** Fecha de autorización, formato AAAA-MM-DD (opcional). */
  fechaAutorizacion?: string;
}

// Los logos se muestran en una sola tinta (negro sobre blanco, blanco sobre negro) por CSS, sin importar el color original.
export const clientes: Cliente[] = [
  { nombre: 'Megatlon', logo: megatlon, escala: 0.75, autorizado: true },
  { nombre: 'La Estación Fútbol y Pádel', logo: laEstacion, escala: 1.12, autorizado: true },
  { nombre: 'Fiter', logo: fiter, escala: 1.1, autorizado: true },
  { nombre: 'Driving Norte', logo: drivingNorte, escala: 1.45, autorizado: true },
  { nombre: 'Overkicks', logo: overkicks, escala: 0.92, autorizado: true },
  { nombre: 'Usana', logo: usana, escala: 0.83, autorizado: true },
];
