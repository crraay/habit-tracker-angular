import { Component, OnInit, ViewChild } from '@angular/core';
import { HabitTrackRequest, HabitTrackResponse } from '@webapi/models';
import { HabitTrackService } from '@webapi/services';
import { TrackHabitItemComponent } from '../track-habit-item/track-habit-item.component';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { DatepickerComponent } from "../datepicker/datepicker.component";
import { format } from 'date-fns';
import { SeparatorComponent } from "../separator/separator.component";
import { fadeHeightInTrigger, fadeHeightOutTrigger } from 'src/app/animations/triggers';

@Component({
  selector: 'ht-track-habits',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    DatePipe,
    FormsModule,
    TrackHabitItemComponent,
    DatepickerComponent,
    SeparatorComponent
  ],
  templateUrl: './track-habits.component.html',
  styleUrls: ['./track-habits.component.scss'],
  animations: [
    fadeHeightInTrigger,
    fadeHeightOutTrigger
  ]
})
export class TrackHabitsComponent implements OnInit {

  @ViewChild('datepicker') datepicker: DatepickerComponent;

  currentDate: Date;

  selectedDate: Date;

  data: HabitTrackResponse[];

  constructor(
    private habitTrackService: HabitTrackService
  ) {
    this.currentDate = new Date();
    this.selectedDate = this.currentDate;
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    const formattedDate = format(this.selectedDate, 'yyyy-MM-dd');

    this.habitTrackService.getTrackingList({ date: formattedDate }).subscribe(response => {
      this.data = response;
    });
  }

  handleStatusChange(updatedHabit: HabitTrackResponse): void {
    const formattedDate = format(this.selectedDate, 'yyyy-MM-dd');

    const request: HabitTrackRequest = {
      date: formattedDate,
      habitId: updatedHabit.habitId
    };

    let observable: Observable<void>;
    if (updatedHabit.status) {
      observable = this.habitTrackService.trackHabit({body: request});
    } else {
      observable = this.habitTrackService.untrackHabit({ body: request })
    }

    observable.subscribe(() => {
      this.refresh();
    });
  }

  openDatepicker(): void {
    this.datepicker.show();
  }

  trackByHabitId(index: number, habit: HabitTrackResponse): number {
    return habit.habitId;
  }

  // TODO rework into a pipe
  applyFilterByStatus(status): HabitTrackResponse[] {
    return this.data?.filter(habit => habit.status === status);
  }
}
