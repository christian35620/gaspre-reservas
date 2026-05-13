import { Booking } from '../models';

export const BOOKINGS_MOCK: Booking[] = [
  {
    id: 1,
    className: 'Yoga',
    instructor: 'Laura Gómez',
    schedule: 'Lunes 18:00',
    availableSpots: 10,
    imageUrl: 'assets/images/yoga-class.png',
    description:
      'Una clase suave para mejorar flexibilidad, respiración y equilibrio.',
    category: 'yoga',
  },
  {
    id: 2,
    className: 'Spinning',
    instructor: 'Marcos Ruiz',
    schedule: 'Martes 19:30',
    availableSpots: 8,
    imageUrl: 'assets/images/spinning-class.png',
    description:
      'Entrenamiento cardiovascular intenso sobre bicicleta fija.',
    category: 'spinning',
  },
  {
    id: 3,
    className: 'Funcional',
    instructor: 'Camila Torres',
    schedule: 'Miércoles 18:00',
    availableSpots: 12,
    imageUrl: 'assets/images/functional-class.png',
    description:
      'Circuito dinámico para trabajar fuerza, resistencia y movilidad.',
    category: 'funcional',
  },
  {
    id: 4,
    className: 'Crossfit',
    instructor: 'Diego Fernández',
    schedule: 'Jueves 20:00',
    availableSpots: 6,
    imageUrl: 'assets/images/crossfit-class.png',
    description:
      'Clase de alta intensidad con ejercicios funcionales variados.',
    category: 'crossfit',
  },
];
