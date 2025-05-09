import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ht-separator',
  standalone: true,
  imports: [],
  templateUrl: './separator.component.html',
  styleUrl: './separator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeparatorComponent {

  @Input()
  text: string;

}
