import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, delay, of } from 'rxjs';

import { BOOKINGS_MOCK } from '../../features/bookings/mocks/bookings';

export const bookingsMockInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  if (request.method === 'GET' && request.url === '/bookings') {
    return of(
      new HttpResponse({
        status: 200,
        body: BOOKINGS_MOCK,
      }),
    ).pipe(delay(600));
  }

  return next(request);
};
