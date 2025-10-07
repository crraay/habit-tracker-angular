import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { HabitStatRequest } from '@webapi/models';
import { CounterComponent } from "../counter/counter.component";

interface HabitAggregateLike {
  totalCheckIns?: number | null;
  bestStreak?: number | null;
  currentStreak?: number | null;
}

@Component({
  selector: 'ht-stat-habit-item',
  standalone: true,
  imports: [NgIf, CounterComponent],
  templateUrl: './stat-habit-item.component.html',
  styleUrl: './stat-habit-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatHabitItemComponent {

  @Input()
  data: HabitStatRequest;

  get aggregate(): HabitAggregateLike | null {
    return (this.data as any)?.aggregate ?? null;
  }
}
