import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HabitTrackRequest, HabitTrackResponse } from '@webapi/models';
import { HabitTrackService } from '@webapi/services';
import { TrackHabitItemComponent } from '../track-habit-item/track-habit-item.component';
import { DatePipe, NgForOf } from '@angular/common';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ht-track-habits',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe,
    FormsModule,
    TrackHabitItemComponent
  ],
  templateUrl: './track-habits.component.html',
  styleUrls: ['./track-habits.component.scss']
})
export class TrackHabitsComponent implements OnInit {

  @ViewChild('datepicker') datepicker: ElementRef;

  currentDate: string;

  selectedDate: string;

  data: HabitTrackResponse[];

  constructor(
    private habitTrackService: HabitTrackService
  ) {
    this.currentDate = (new Date()).toISOString().split('T')[0];
    this.selectedDate = this.currentDate;
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.habitTrackService.getTrackingList({ date: this.selectedDate }).subscribe(response => {
      this.data = response;
    });
  }

  handleStatusChange(updatedHabit: HabitTrackResponse): void {
    const request: HabitTrackRequest = {
      date: this.selectedDate,
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

  onSelectedDateChange(date: Date): void {
    this.refresh();
  }

  openDatepicker(): void {
    this.datepicker.nativeElement.showPicker();
  }

  trackByHabitId(index: number, habit: HabitTrackResponse): number {
    return habit.habitId;
  }
}
