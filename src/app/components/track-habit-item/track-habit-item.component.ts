import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HabitTrackResponse } from '@webapi/models';
import { StreakComponent } from "../streak/streak.component";

@Component({
  selector: 'ht-track-habit-item',
  standalone: true,
  imports: [
    FormsModule,
    StreakComponent
  ],
  templateUrl: './track-habit-item.component.html',
  styleUrls: ['./track-habit-item.component.scss'],
  host: { class: 'card' }
})
export class TrackHabitItemComponent implements OnInit {

  @Input()
  data: HabitTrackResponse;

  @Output()
  statusChange = new EventEmitter<HabitTrackResponse>();

  constructor() {}

  ngOnInit(): void {
  }

  onValueChange(status): void {
    this.statusChange.emit({ ...this.data, status });
  }

}
