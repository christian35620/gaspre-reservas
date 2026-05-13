import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  output,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { ReservationRequest } from '../models';

@Component({
  selector: 'app-booking-reservation-form',
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './booking-reservation-form.html',
  styleUrl: './booking-reservation-form.scss',
})
export class BookingReservationFormComponent {
  private readonly fb = inject(FormBuilder);

  readonly bookingId = input.required<number>();
  readonly submitting = input(false);
  readonly reservationSubmitted = output<ReservationRequest>();

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
  });

  protected submitReservation(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid || this.submitting()) {
      return;
    }

    const formValue = this.form.getRawValue();

    this.reservationSubmitted.emit({
      bookingId: this.bookingId(),
      name: formValue.name,
      email: formValue.email,
    });
  }

  protected get nameInvalid(): boolean {
    const control = this.form.controls.name;

    return control.invalid && (control.touched || control.dirty);
  }

  protected get emailInvalid(): boolean {
    const control = this.form.controls.email;

    return control.invalid && (control.touched || control.dirty);
  }
}
