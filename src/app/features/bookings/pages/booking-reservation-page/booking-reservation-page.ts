import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, map, of, startWith, switchMap } from 'rxjs';

import { UiBadgeComponent } from '../../../shared/components/ui-badge';
import { UiCardComponent } from '../../../shared/components/ui-card';
import { UiStatusMessageComponent } from '../../../shared/components/ui-status-message';
import { BookingReservationFormComponent } from '../../components/booking-reservation-form';
import { Booking, ReservationRequest } from '../../models';
import { BookingApi } from '../../services/booking-api';

type BookingReservationViewModel =
  | {
      status: 'loading';
      booking: null;
      error: null;
    }
  | {
      status: 'success';
      booking: Booking;
      error: null;
    }
  | {
      status: 'error';
      booking: null;
      error: string;
    };

@Component({
  selector: 'app-booking-reservation-page',
  imports: [
    AsyncPipe,
    RouterLink,
    UiBadgeComponent,
    UiCardComponent,
    UiStatusMessageComponent,
    BookingReservationFormComponent,
  ],
  templateUrl: './booking-reservation-page.html',
  styleUrl: './booking-reservation-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingReservationPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly bookingApi = inject(BookingApi);

  protected readonly reservationStatus = signal<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  protected readonly reservationMessage = signal('');

  protected readonly viewModel$ = this.route.paramMap.pipe(
    map((params) => Number(params.get('bookingId'))),
    switchMap((bookingId) =>
      this.bookingApi.getBookingById(bookingId).pipe(
        map(
          (booking): BookingReservationViewModel => ({
            status: 'success',
            booking,
            error: null,
          }),
        ),
        startWith({
          status: 'loading',
          booking: null,
          error: null,
        } satisfies BookingReservationViewModel),
        catchError(() =>
          of({
            status: 'error',
            booking: null,
            error: 'No pudimos encontrar la clase que querés reservar.',
          } satisfies BookingReservationViewModel),
        ),
      ),
    ),
  );

  protected confirmReservation(request: ReservationRequest): void {
    this.reservationStatus.set('submitting');
    this.reservationMessage.set('');

    this.bookingApi.createReservation(request).subscribe({
      next: () => {
        this.reservationStatus.set('success');
        this.reservationMessage.set('Reserva confirmada correctamente.');
      },
      error: () => {
        this.reservationStatus.set('error');
        this.reservationMessage.set(
          'No pudimos confirmar la reserva. Intentá nuevamente.',
        );
      },
    });
  }

  protected getAvailabilityLabel(availableSpots: number): string {
    if (this.reservationStatus() === 'success') {
      return 'Ya reservada';
    }

    return availableSpots > 0 ? `${availableSpots} cupos disponibles` : 'Sin cupos';
  }

  protected getAvailabilityVariant(
    availableSpots: number,
  ): 'success' | 'warning' | 'danger' {
    if (this.reservationStatus() === 'success') {
      return 'warning';
    }

    return availableSpots > 0 ? 'success' : 'danger';
  }
}
