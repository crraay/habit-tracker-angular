import { Component, OnInit } from '@angular/core';
import { HabitTrackResponse } from '@webapi/models';
import { HabitTrackService } from '@webapi/services';
import { TrackHabitItemComponent } from '../track-habit-item/track-habit-item.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'ht-track-habits',
  standalone: true,
  imports: [NgForOf, TrackHabitItemComponent],
  templateUrl: './track-habits.component.html',
  styleUrls: ['./track-habits.component.scss']
})
export class TrackHabitsComponent implements OnInit {
  data: HabitTrackResponse[];

  constructor(
    private habitTrackService: HabitTrackService
  ) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    // TODO implement date selection
    this.habitTrackService.getTrackingList({ date: '2024-09-07' }).subscribe(response => {
      this.data = response;
    });
  }

  handleStatusChange(updatedHabit: HabitTrackResponse): void {
    // TODO implement track/untrack calls
  }

  trackByHabitId(index: number, habit: HabitTrackResponse): number {
    return habit.habitId;
  }
}
