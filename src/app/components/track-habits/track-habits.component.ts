import { Component, OnInit } from '@angular/core';
import { HabitTrackRequest, HabitTrackResponse } from '@webapi/models';
import { HabitTrackService } from '@webapi/services';
import { TrackHabitItemComponent } from '../track-habit-item/track-habit-item.component';
import { NgForOf } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'ht-track-habits',
  standalone: true,
  imports: [NgForOf, TrackHabitItemComponent],
  templateUrl: './track-habits.component.html',
  styleUrls: ['./track-habits.component.scss']
})
export class TrackHabitsComponent implements OnInit {

  // TODO implement date selection
  selectedDate: string = '2024-09-07';

  data: HabitTrackResponse[];

  constructor(
    private habitTrackService: HabitTrackService
  ) {}

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

  trackByHabitId(index: number, habit: HabitTrackResponse): number {
    return habit.habitId;
  }
}
