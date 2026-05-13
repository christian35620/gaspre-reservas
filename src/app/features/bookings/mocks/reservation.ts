import { ReservationRequest, ReservationResult } from '../models';

export function createReservationResult(
  request: ReservationRequest,
): ReservationResult {
  return {
    bookingId: request.bookingId,
    customerName: request.name,
    customerEmail: request.email,
    reservedAt: new Date().toISOString(),
  };
}
