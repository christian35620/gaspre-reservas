import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { UiBadgeComponent } from '../../shared/components/ui-badge';
import { UiCardComponent } from '../../shared/components/ui-card';
import { Booking } from '../models';

@Component({
  selector: 'app-booking-card',
  imports: [NgOptimizedImage, RouterLink, UiBadgeComponent, UiCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './booking-card.html',
  styleUrl: './booking-card.scss',
})
export class BookingCardComponent {
  readonly booking = input.required<Booking>();

  protected readonly hasAvailableSpots = computed(
    () => this.booking().availableSpots > 0,
  );

  protected readonly availabilityLabel = computed(() =>
    this.hasAvailableSpots()
      ? `${this.booking().availableSpots} cupos`
      : 'Sin cupos',
  );

  protected readonly availabilityVariant = computed<'success' | 'danger'>(() =>
    this.hasAvailableSpots() ? 'success' : 'danger',
  );
}
