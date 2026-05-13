import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-ui-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article
      class="ui-card"
      [class.ui-card--highlight]="variant() === 'highlight'"
      [class.ui-card--flat]="variant() === 'flat'"
    >
      <ng-content />
    </article>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
    }

    .ui-card {
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      padding: 1rem;
      border: 1px solid rgba(108, 77, 255, 0.08);
      border-radius: 1.5rem;
      background:
        radial-gradient(circle at top right, rgba(108, 77, 255, 0.08), transparent 34%),
        #ffffff;
      box-shadow:
        0 1rem 2rem rgba(19, 26, 61, 0.08),
        0 0.125rem 0.5rem rgba(19, 26, 61, 0.05);
    }

    .ui-card--highlight {
      border-color: rgba(108, 77, 255, 0.18);
      background:
        linear-gradient(180deg, rgba(108, 77, 255, 0.09) 0%, rgba(255, 255, 255, 0.96) 32%, #ffffff 100%);
      box-shadow:
        0 1.25rem 2.5rem rgba(76, 99, 255, 0.12),
        0 0.125rem 0.5rem rgba(19, 26, 61, 0.05);
    }

    .ui-card--flat {
      border-color: rgba(31, 35, 77, 0.12);
      background: #ffffff;
      box-shadow: none;
    }

    @media (min-width: 768px) {
      .ui-card {
        padding: 1.25rem;
        border-radius: 1.75rem;
      }
    }
  `],
})
export class UiCardComponent {
  readonly variant = input<'default' | 'highlight' | 'flat'>('default');
}
