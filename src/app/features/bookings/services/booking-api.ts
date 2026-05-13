import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Booking } from '../models';

@Injectable({
  providedIn: 'root',
})
export class BookingApi {
  private readonly http = inject(HttpClient);

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>('/bookings');
  }
}
