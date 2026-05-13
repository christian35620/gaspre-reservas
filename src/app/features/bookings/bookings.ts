import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BookingListComponent } from './components/booking-list/booking-list';
import { BOOKINGS_MOCK } from './mocks/bookings';

@Component({
  selector: 'app-bookings',
  imports: [BookingListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './bookings.html',
  styleUrl: './bookings.scss',
})
export class BookingsComponent {
  protected readonly bookings = BOOKINGS_MOCK;
}
