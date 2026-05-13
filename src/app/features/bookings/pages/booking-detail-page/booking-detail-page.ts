import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, map, of, startWith, switchMap } from 'rxjs';

import { UiBadgeComponent } from '../../../shared/components/ui-badge';
import { UiCardComponent } from '../../../shared/components/ui-card';
import { UiStatusMessageComponent } from '../../../shared/components/ui-status-message';
import { Booking } from '../../models';
import { BookingApi } from '../../services/booking-api';

type BookingDetailViewModel =
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
  selector: 'app-booking-detail-page',
  imports: [
    AsyncPipe,
    RouterLink,
    UiBadgeComponent,
    UiCardComponent,
    UiStatusMessageComponent,
  ],
  templateUrl: './booking-detail-page.html',
  styleUrl: './booking-detail-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingDetailPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly bookingApi = inject(BookingApi);

  protected readonly viewModel$ = this.route.paramMap.pipe(
    map((params) => Number(params.get('bookingId'))),
    switchMap((bookingId) =>
      this.bookingApi.getBookingById(bookingId).pipe(
        map(
          (booking): BookingDetailViewModel => ({
            status: 'success',
            booking,
            error: null,
          }),
        ),
        startWith({
          status: 'loading',
          booking: null,
          error: null,
        } satisfies BookingDetailViewModel),
        catchError(() =>
          of({
            status: 'error',
            booking: null,
            error: 'No pudimos encontrar la clase seleccionada.',
          } satisfies BookingDetailViewModel),
        ),
      ),
    ),
  );

  protected getAvailabilityVariant(
    availableSpots: number,
  ): 'success' | 'danger' {
    return availableSpots > 0 ? 'success' : 'danger';
  }

  protected getAvailabilityLabel(availableSpots: number): string {
    return availableSpots > 0 ? `${availableSpots} cupos disponibles` : 'Sin cupos';
  }
}
