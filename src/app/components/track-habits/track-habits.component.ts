import { Component, OnInit, ViewChild } from '@angular/core';
import { HabitTrackRequest, HabitTrackResponse } from '@webapi/models';
import { HabitTrackService } from '@webapi/services';
import { TrackHabitItemComponent } from '../track-habit-item/track-habit-item.component';
import { DatePipe, NgForOf } from '@angular/common';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { DatepickerComponent } from "../datepicker/datepicker.component";

@Component({
  selector: 'ht-track-habits',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe,
    FormsModule,
    TrackHabitItemComponent,
    DatepickerComponent
],
  templateUrl: './track-habits.component.html',
  styleUrls: ['./track-habits.component.scss']
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
    const formattedDate = this.formatDate(this.selectedDate);

    this.habitTrackService.getTrackingList({ date: formattedDate }).subscribe(response => {
      this.data = response;
    });
  }

  // TODO replace with date-fns library
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  handleStatusChange(updatedHabit: HabitTrackResponse): void {
    const formattedDate = this.formatDate(this.selectedDate);

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
}
