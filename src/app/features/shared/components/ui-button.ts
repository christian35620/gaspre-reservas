import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      class="ui-button"
      [class.ui-button--primary]="variant() === 'primary'"
      [class.ui-button--secondary]="variant() === 'secondary'"
      [class.ui-button--ghost]="variant() === 'ghost'"
      [class.ui-button--full]="fullWidth()"
      [type]="type()"
      [disabled]="disabled()"
    >
      <ng-content />
    </button>
  `,
  styles: [`
    :host {
      display: inline-flex;
      max-width: 100%;
    }

    .ui-button {
      --ui-button-bg: linear-gradient(135deg, #6c4dff 0%, #4c63ff 100%);
      --ui-button-border: transparent;
      --ui-button-color: #ffffff;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.625rem;
      min-height: 3rem;
      width: auto;
      max-width: 100%;
      padding: 0.875rem 1.25rem;
      border: 1px solid var(--ui-button-border);
      border-radius: 1.25rem;
      background: var(--ui-button-bg);
      box-shadow: 0 0.75rem 1.5rem rgba(76, 99, 255, 0.18);
      color: var(--ui-button-color);
      font: inherit;
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.2;
      text-align: center;
      cursor: pointer;
      transition:
        transform 160ms ease,
        box-shadow 160ms ease,
        background-color 160ms ease,
        border-color 160ms ease,
        color 160ms ease;
      -webkit-tap-highlight-color: transparent;
    }

    .ui-button:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 1rem 2rem rgba(76, 99, 255, 0.22);
    }

    .ui-button:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: 0 0.5rem 1.25rem rgba(76, 99, 255, 0.2);
    }

    .ui-button:focus-visible {
      outline: 3px solid rgba(76, 99, 255, 0.28);
      outline-offset: 3px;
    }

    .ui-button:disabled {
      opacity: 0.55;
      cursor: not-allowed;
      box-shadow: none;
    }

    .ui-button--primary {
      --ui-button-bg: linear-gradient(135deg, #6c4dff 0%, #4c63ff 100%);
      --ui-button-border: transparent;
      --ui-button-color: #ffffff;
    }

    .ui-button--secondary {
      --ui-button-bg: #ffffff;
      --ui-button-border: rgba(92, 76, 214, 0.75);
      --ui-button-color: #4a3fc9;
      box-shadow: 0 0.75rem 1.5rem rgba(31, 35, 77, 0.08);
    }

    .ui-button--ghost {
      --ui-button-bg: rgba(108, 77, 255, 0.08);
      --ui-button-border: transparent;
      --ui-button-color: #3d36a6;
      box-shadow: none;
    }

    .ui-button--full {
      width: 100%;
    }

    :host:has(.ui-button--full) {
      display: flex;
      width: 100%;
    }

    @media (min-width: 768px) {
      .ui-button {
        min-height: 3.25rem;
        padding-inline: 1.5rem;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .ui-button {
        transition: none;
      }

      .ui-button:hover:not(:disabled),
      .ui-button:active:not(:disabled) {
        transform: none;
      }
    }
  `],
})
export class UiButtonComponent {
  readonly variant = input<'primary' | 'secondary' | 'ghost'>('primary');
  readonly type = input<'button' | 'submit' | 'reset'>('button');
  readonly disabled = input(false);
  readonly fullWidth = input(false);
}
