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
  /** Multiplicador sobre la altura base (--logo-h). Por defecto 1. */
  escala?: number;
  /** Fecha de autorización, formato AAAA-MM-DD (opcional). */
  fechaAutorizacion?: string;
}

// Los logos se muestran en una sola tinta (negro sobre blanco, blanco sobre negro) por CSS, sin importar el color original.
export const clientes: Cliente[] = [
  { nombre: 'Megatlon', logo: megatlon, autorizado: true },
  { nombre: 'La Estación Fútbol y Pádel', logo: laEstacion, escala: 1.155, autorizado: true },
  { nombre: 'Fiter', logo: fiter, autorizado: true },
  { nombre: 'Driving Norte', logo: drivingNorte, escala: 1.155, autorizado: true },
  { nombre: 'Overkicks', logo: overkicks, autorizado: true },
  { nombre: 'Usana', logo: usana, autorizado: true },
];
