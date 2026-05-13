import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, delay, of, throwError } from 'rxjs';

import { BOOKINGS_MOCK } from '../../features/bookings/mocks/bookings';
import { createReservationResult } from '../../features/bookings/mocks/reservation';
import { Booking, ReservationRequest } from '../../features/bookings/models';

let bookingsMockState: Booking[] = BOOKINGS_MOCK.map((booking) => ({
  ...booking,
}));

type MockHttpRequest = HttpRequest<unknown> & {
  urlWithoutParams?: string;
};

export const bookingsMockInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const url =
    (request as MockHttpRequest).urlWithoutParams ?? request.url.split('?')[0];

  if (request.method === 'GET' && url === '/bookings') {
    const mockState = request.params.get('mock');

    if (mockState === 'error') {
      return throwError(
        () =>
          new HttpErrorResponse({
            status: 500,
            statusText: 'Mock server error',
            error: {
              message: 'No pudimos cargar las reservas.',
            },
          }),
      ).pipe(delay(600));
    }

    if (mockState === 'empty') {
      return of(
        new HttpResponse({
          status: 200,
          body: [],
        }),
      ).pipe(delay(600));
    }

    return of(
      new HttpResponse({
        status: 200,
        body: bookingsMockState,
      }),
    ).pipe(delay(600));
  }

  if (
    request.method === 'GET' &&
    url.startsWith('/bookings/') &&
    !url.endsWith('/reservations')
  ) {
    const bookingId = Number(url.split('/')[2]);
    const booking = bookingsMockState.find((item) => item.id === bookingId);

    if (!booking) {
      return throwError(
        () =>
          new HttpErrorResponse({
            status: 404,
            statusText: 'Booking not found',
            error: {
              message: 'Clase no encontrada.',
            },
          }),
      ).pipe(delay(10000));
    }

    return of(
      new HttpResponse({
        status: 200,
        body: booking,
      }),
    ).pipe(delay(10000));
  }

  if (
    request.method === 'POST' &&
    url.startsWith('/bookings/') &&
    url.endsWith('/reservations')
  ) {
    const bookingId = Number(url.split('/')[2]);
    const booking = bookingsMockState.find((item) => item.id === bookingId);
    const body = request.body as ReservationRequest;

    if (!booking) {
      return throwError(
        () =>
          new HttpErrorResponse({
            status: 404,
            statusText: 'Booking not found',
            error: {
              message: 'Clase no encontrada.',
            },
          }),
      ).pipe(delay(400));
    }

    if (booking.availableSpots <= 0) {
      return throwError(
        () =>
          new HttpErrorResponse({
            status: 409,
            statusText: 'No spots available',
            error: {
              message: 'No quedan cupos disponibles para esta clase.',
            },
          }),
      ).pipe(delay(400));
    }

    bookingsMockState = bookingsMockState.map((item) =>
      item.id === bookingId
        ? {
            ...item,
            availableSpots: item.availableSpots - 1,
          }
        : item,
    );

    return of(
      new HttpResponse({
        status: 201,
        body: createReservationResult(body),
      }),
    ).pipe(delay(600));
  }

  return next(request);
};
