import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-booking-detail-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<p>booking-detail-page works!</p>',
})
export class BookingDetailPageComponent {}
