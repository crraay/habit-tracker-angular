import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ht-streak',
  standalone: true,
  imports: [
    NgIf,
  ],
  templateUrl: './streak.component.html',
  styleUrl: './streak.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StreakComponent {

  @Input()
  value: number;

  @Input()
  status: boolean;

}
