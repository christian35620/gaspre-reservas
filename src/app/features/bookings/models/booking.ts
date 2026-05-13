export type BookingCategory =
  | 'yoga'
  | 'funcional'
  | 'spinning'
  | 'box'
  | 'crossfit';

export interface Booking {
  id: number;
  className: string;
  instructor: string;
  schedule: string;
  availableSpots: number;
  imageUrl: string;
  description: string;
  category: BookingCategory;
}
