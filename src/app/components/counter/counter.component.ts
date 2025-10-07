import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ht-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {

  @Input() value: number | null = null;
  @Input() label: string | null = null;
  @Input() icon: string = 'fa-solid fa-circle';
  @Input() colorClass: string | null = null; // e.g. 'text-primary'
  @Input() colorStyle: string | null = null; // e.g. '#6f42c1'

}
