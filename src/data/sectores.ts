import type { IconName } from '../lib/icons';

export type Sector = { icon: IconName; title: string; text: string };

export const sectores: Sector[] = [
  {
    icon: 'bolt',
    title: 'Energía & Renovables',
    text: 'Térmica, hidroeléctrica, parques eólicos y solares.',
  },
  {
    icon: 'building',
    title: 'Infraestructura & Construcción',
    text: 'Obras civiles y montajes industriales de gran envergadura.',
  },
  {
    icon: 'gear',
    title: 'Manufactura & Procesos',
    text: 'Metalmecánica, alimenticia, bebidas, laboratorios y farmacéuticas.',
  },
  {
    icon: 'truck',
    title: 'Logística & Servicios',
    text: 'Centros de distribución, hotelería y mantenimiento industrial.',
  },
];
