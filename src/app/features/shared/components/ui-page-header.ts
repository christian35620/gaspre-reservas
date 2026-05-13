import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-ui-page-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="ui-page-header">
      @if (eyebrow()) {
        <p class="ui-page-header__eyebrow">{{ eyebrow() }}</p>
      }

      <h1>{{ title() }}</h1>

      @if (description()) {
        <p class="ui-page-header__description">{{ description() }}</p>
      }

      <ng-content />
    </header>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .ui-page-header {
      width: 100%;
      padding-block: 0.25rem 0.5rem;
    }

    .ui-page-header__eyebrow {
      margin: 0 0 0.5rem;
      color: #5b4cff;
      font-size: 0.8125rem;
      line-height: 1.3;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .ui-page-header h1 {
      margin: 0;
      color: #171c4d;
      font-size: 1.75rem;
      line-height: 1.1;
      font-weight: 900;
      text-wrap: balance;
    }

    .ui-page-header__description {
      max-width: 42rem;
      margin: 0.75rem 0 0;
      color: #4d5379;
      font-size: 1rem;
      line-height: 1.6;
      text-wrap: pretty;
    }

    .ui-page-header > :last-child {
      margin-bottom: 0;
    }

    @media (min-width: 768px) {
      .ui-page-header {
        padding-block-end: 0.75rem;
      }

      .ui-page-header h1 {
        font-size: 2.25rem;
      }

      .ui-page-header__description {
        font-size: 1.0625rem;
      }
    }
  `],
})
export class UiPageHeaderComponent {
  readonly eyebrow = input<string>('');
  readonly title = input.required<string>();
  readonly description = input<string>('');
}
