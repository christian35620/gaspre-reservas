import { Booking } from '../models';

export const BOOKINGS_MOCK: Booking[] = [
  {
    id: 1,
    className: 'Yoga',
    instructor: 'Laura Gómez',
    schedule: 'Lunes 18:00',
    availableSpots: 10,
    imageUrl: 'assets/images/yoga-class.webp',
    imageAlt: 'Persona practicando yoga en una clase grupal',
    description:
      'Clase suave para mejorar flexibilidad, respiración y equilibrio. Ideal para todos los niveles.',
    category: 'yoga',
  },
  {
    id: 2,
    className: 'Spinning',
    instructor: 'Marcos Ruiz',
    schedule: 'Martes 19:30',
    availableSpots: 8,
    imageUrl: 'assets/images/spinning-class.webp',
    imageAlt: 'Bicicletas fijas preparadas para una clase de spinning',
    description:
      'Entrenamiento cardiovascular intenso sobre bicicleta fija, con música y cambios de ritmo.',
    category: 'spinning',
  },
  {
    id: 3,
    className: 'Funcional',
    instructor: 'Camila Torres',
    schedule: 'Miércoles 18:00',
    availableSpots: 12,
    imageUrl: 'assets/images/functional-class.webp',
    imageAlt: 'Personas entrenando fuerza y movilidad en un gimnasio',
    description:
      'Circuito dinámico para trabajar fuerza, resistencia, coordinación y movilidad.',
    category: 'funcional',
  },
  {
    id: 4,
    className: 'Crossfit',
    instructor: 'Diego Fernández',
    schedule: 'Jueves 20:00',
    availableSpots: 6,
    imageUrl: 'assets/images/crossfit-class.webp',
    imageAlt: 'Atleta realizando entrenamiento funcional de alta intensidad',
    description:
      'Clase de alta intensidad con ejercicios funcionales variados y trabajo por estaciones.',
    category: 'crossfit',
  },
];
