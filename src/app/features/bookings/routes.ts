import { Routes } from '@angular/router';

export const BOOKINGS_ROUTES: Routes = [
  {
    path: '',
    title: 'Reservas disponibles',
    loadComponent: () =>
      import('./bookings').then((c) => c.BookingsComponent),
  },
  {
    path: ':bookingId',
    title: 'Detalle de clase',
    loadComponent: () =>
      import('./pages/booking-detail-page/booking-detail-page').then(
        (c) => c.BookingDetailPageComponent,
      ),
  },
  {
    path: ':bookingId/reserve',
    title: 'Reservar clase',
    loadComponent: () =>
      import('./pages/booking-reservation-page').then(
        (c) => c.BookingReservationPageComponent,
      ),
  },
];
