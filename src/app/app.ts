import { Component } from '@angular/core';

import { BookingsComponent } from './features/bookings/bookings';

@Component({
  selector: 'app-root',
  imports: [BookingsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
