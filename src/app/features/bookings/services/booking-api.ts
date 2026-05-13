import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Booking, ReservationRequest, ReservationResult } from '../models';

@Injectable({
  providedIn: 'root',
})
export class BookingApi {
  private readonly http = inject(HttpClient);

  getBookings(mock?: 'empty' | 'error'): Observable<Booking[]> {
    const params = mock ? new HttpParams().set('mock', mock) : undefined;

    return this.http.get<Booking[]>('/bookings', {
      params,
    });
  }

  getBookingById(bookingId: number): Observable<Booking> {
    return this.http.get<Booking>(`/bookings/${bookingId}`);
  }

  createReservation(
    request: ReservationRequest,
  ): Observable<ReservationResult> {
    return this.http.post<ReservationResult>(
      `/bookings/${request.bookingId}/reservations`,
      request,
    );
  }
}
