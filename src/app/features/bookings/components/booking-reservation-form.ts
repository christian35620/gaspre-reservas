import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { ReservationRequest } from '../models';

@Component({
  selector: 'app-booking-reservation-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './booking-reservation-form.html',
  styleUrl: './booking-reservation-form.scss',
})
export class BookingReservationFormComponent {
  readonly bookingId = input.required<number>();
  readonly reservationSubmitted = output<ReservationRequest>();
}
