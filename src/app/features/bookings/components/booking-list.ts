import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-booking-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './booking-list.html',
  styleUrl: './booking-list.scss',
})
export class BookingListComponent {}
