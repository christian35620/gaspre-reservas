import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'bookings',
  },
  {
    path: 'bookings',
    loadChildren: () =>
      import('./features/bookings/routes').then((m) => m.BOOKINGS_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'bookings',
  },
];
