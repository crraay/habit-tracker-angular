import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HabitResponse } from '@webapi/models';
import { HabitService } from '@webapi/services';

@Component({
  selector: 'app-edit-habits',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './edit-habits.component.html',
  styleUrl: './edit-habits.component.scss'
})
export class EditHabitsComponent implements OnInit {

  data: HabitResponse[];

  constructor(
    private habitService: HabitService
  ) { }
  
  ngOnInit(): void {
    this.habitService.getHabits()
      .subscribe(response => {
        this.data = response;
      });
  }

}
