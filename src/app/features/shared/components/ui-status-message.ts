import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-ui-status-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      class="ui-status-message"
      [class.ui-status-message--loading]="variant() === 'loading'"
      [class.ui-status-message--error]="variant() === 'error'"
      [class.ui-status-message--empty]="variant() === 'empty'"
      [class.ui-status-message--success]="variant() === 'success'"
      [attr.role]="variant() === 'error' ? 'alert' : 'status'"
      [attr.aria-live]="variant() === 'error' ? 'assertive' : 'polite'"
      aria-atomic="true"
    >
      <h2>{{ title() }}</h2>

      @if (message()) {
        <p>{{ message() }}</p>
      }

      <ng-content />
    </section>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .ui-status-message {
      --ui-status-accent: #5b4cff;
      width: 100%;
      padding: 1.25rem 1rem;
      border: 1px solid rgba(91, 76, 255, 0.1);
      border-radius: 1.5rem;
      background:
        radial-gradient(circle at top center, rgba(91, 76, 255, 0.1), transparent 40%),
        #ffffff;
      box-shadow: 0 1rem 2rem rgba(19, 26, 61, 0.08);
      text-align: center;
    }

    .ui-status-message::before {
      content: '';
      display: block;
      width: 3rem;
      height: 0.375rem;
      margin: 0 auto 1rem;
      border-radius: 999px;
      background: var(--ui-status-accent);
    }

    .ui-status-message h2 {
      margin: 0;
      color: #171c4d;
      font-size: 1.125rem;
      line-height: 1.3;
      font-weight: 800;
    }

    .ui-status-message p {
      margin: 0.75rem 0 0;
      color: #4d5379;
      font-size: 0.975rem;
      line-height: 1.55;
    }

    .ui-status-message ng-content {
      display: contents;
    }

    .ui-status-message > :last-child {
      margin-bottom: 0;
    }

    .ui-status-message--loading {
      --ui-status-accent: #5b4cff;
    }

    .ui-status-message--error {
      --ui-status-accent: #b42344;
      border-color: rgba(180, 35, 68, 0.16);
      background:
        radial-gradient(circle at top center, rgba(180, 35, 68, 0.12), transparent 40%),
        #ffffff;
    }

    .ui-status-message--empty {
      --ui-status-accent: #6b7192;
    }

    .ui-status-message--success {
      --ui-status-accent: #0f8a59;
      border-color: rgba(15, 138, 89, 0.16);
      background:
        radial-gradient(circle at top center, rgba(15, 138, 89, 0.12), transparent 40%),
        #ffffff;
    }

    @media (min-width: 768px) {
      .ui-status-message {
        padding: 1.5rem 1.25rem;
        border-radius: 1.75rem;
      }

      .ui-status-message h2 {
        font-size: 1.25rem;
      }
    }
  `],
})
export class UiStatusMessageComponent {
  readonly variant = input.required<'loading' | 'error' | 'empty' | 'success'>();
  readonly title = input.required<string>();
  readonly message = input<string>('');
}
