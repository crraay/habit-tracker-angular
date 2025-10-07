import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HabitTrackResponse } from '@webapi/models';
import { StreakComponent } from "../streak/streak.component";
import { NgIf } from '@angular/common';
import { CounterComponent } from "../counter/counter.component";

@Component({
  selector: 'ht-track-habit-item',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    StreakComponent,
    CounterComponent
  ],
  templateUrl: './track-habit-item.component.html',
  styleUrls: ['./track-habit-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackHabitItemComponent {

  @Input()
  data: HabitTrackResponse;

  @Output()
  statusChange = new EventEmitter<HabitTrackResponse>();

  onValueChange(status): void {
    this.statusChange.emit({ ...this.data, status });
  }

}
