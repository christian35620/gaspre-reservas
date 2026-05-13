import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-booking-reservation-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './booking-reservation-form.html',
  styleUrl: './booking-reservation-form.scss',
})
export class BookingReservationFormComponent {}
