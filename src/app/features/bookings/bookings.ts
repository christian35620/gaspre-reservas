import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-bookings',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './bookings.html',
  styleUrl: './bookings.scss',
})
export class BookingsComponent {}
