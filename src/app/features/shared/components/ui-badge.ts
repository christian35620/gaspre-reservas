import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-ui-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span
      class="ui-badge"
      [class.ui-badge--success]="variant() === 'success'"
      [class.ui-badge--warning]="variant() === 'warning'"
      [class.ui-badge--danger]="variant() === 'danger'"
    >
      <ng-content />
    </span>
  `,
  styles: [`
    :host {
      display: inline-flex;
      max-width: 100%;
    }

    .ui-badge {
      --ui-badge-bg: rgba(108, 77, 255, 0.12);
      --ui-badge-border: rgba(108, 77, 255, 0.18);
      --ui-badge-color: #4f44d8;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 2rem;
      max-width: 100%;
      padding: 0.375rem 0.75rem;
      border: 1px solid var(--ui-badge-border);
      border-radius: 999px;
      background: var(--ui-badge-bg);
      color: var(--ui-badge-color);
      font: inherit;
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 1.2;
      text-align: center;
      white-space: nowrap;
    }

    .ui-badge--success {
      --ui-badge-bg: rgba(18, 138, 91, 0.12);
      --ui-badge-border: rgba(18, 138, 91, 0.18);
      --ui-badge-color: #0e7c52;
    }

    .ui-badge--warning {
      --ui-badge-bg: rgba(184, 108, 18, 0.12);
      --ui-badge-border: rgba(184, 108, 18, 0.18);
      --ui-badge-color: #9a5a08;
    }

    .ui-badge--danger {
      --ui-badge-bg: rgba(191, 55, 86, 0.12);
      --ui-badge-border: rgba(191, 55, 86, 0.18);
      --ui-badge-color: #a72c48;
    }
  `],
})
export class UiBadgeComponent {
  readonly variant = input<'neutral' | 'success' | 'warning' | 'danger'>('neutral');
}
