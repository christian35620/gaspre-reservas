export interface ReservationFormValue {
  name: string;
  email: string;
}

export interface ReservationRequest {
  bookingId: number;
  name: string;
  email: string;
}

export interface ReservationResult {
  bookingId: number;
  customerName: string;
  customerEmail: string;
  reservedAt: string;
}
