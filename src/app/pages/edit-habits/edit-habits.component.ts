import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HabitResponse } from '@webapi/models';
import { HabitService } from '@webapi/services';
import { EditHabitItemComponent } from "../../components/edit-habit-item/edit-habit-item.component";

@Component({
  selector: 'app-edit-habits',
  standalone: true,
  imports: [
    NgForOf,
    EditHabitItemComponent
  ],
  templateUrl: './edit-habits.component.html',
  styleUrls: ['./edit-habits.component.scss']
})
export class EditHabitsComponent implements OnInit {
  data: HabitResponse[];

  constructor(
    private habitService: HabitService
  ) { }
  
  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.habitService.getHabits()
      .subscribe(response => {
        this.data = response;
      });
  }

  handleSave(habit: HabitResponse): void {
    // TODO add "create" case

    this.habitService.updateHabit({ id: habit.id, body: habit })
      .subscribe(response => {
        this.refresh();
      });
  }

  handleDelete(habit: HabitResponse): void {
    this.habitService.deleteHabit({ id: habit.id })
      .subscribe(response => {
        this.refresh();
      });
  }
}
