import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, of, startWith, switchMap } from 'rxjs';

import { BookingListComponent } from './components/booking-list/booking-list';
import { UiStatusMessageComponent } from '../shared/components/ui-status-message';
import { Booking } from './models';
import { BookingApi } from './services/booking-api';

type BookingsViewModel =
  | {
      status: 'loading';
      bookings: null;
      error: null;
    }
  | {
      status: 'success';
      bookings: Booking[];
      error: null;
    }
  | {
      status: 'error';
      bookings: null;
      error: string;
    };

@Component({
  selector: 'app-bookings',
  imports: [AsyncPipe, BookingListComponent, UiStatusMessageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './bookings.html',
  styleUrl: './bookings.scss',
})
export class BookingsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly bookingApi = inject(BookingApi);

  protected readonly viewModel$ = this.route.queryParamMap.pipe(
    map((params) => params.get('mock')),
    map((mock) => (mock === 'empty' || mock === 'error' ? mock : undefined)),
    switchMap((mock) =>
      this.bookingApi.getBookings(mock).pipe(
        map(
          (bookings): BookingsViewModel => ({
            status: 'success',
            bookings,
            error: null,
          }),
        ),
        startWith({
          status: 'loading',
          bookings: null,
          error: null,
        } satisfies BookingsViewModel),
        catchError(() =>
          of({
            status: 'error',
            bookings: null,
            error: 'No pudimos cargar las clases disponibles.',
          } satisfies BookingsViewModel),
        ),
      ),
    ),
  );
}
