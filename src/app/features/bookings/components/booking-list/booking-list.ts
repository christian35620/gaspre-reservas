import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Booking } from '../../models';
import { BookingCardComponent } from '../booking-card';

@Component({
  selector: 'app-booking-list',
  imports: [BookingCardComponent],
  templateUrl: './booking-list.html',
  styleUrl: './booking-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingListComponent {
  readonly bookings = input.required<Booking[]>();
}
