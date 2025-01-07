import { NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HabitResponse } from '@webapi/models';
import { HabitMgmtService } from '@webapi/services';
import { EditHabitItemComponent } from "../edit-habit-item/edit-habit-item.component";
import { fadeHeightOutTrigger, fadeInTrigger, fadeOutTrigger } from 'src/app/animations/triggers';

@Component({
  selector: 'ht-edit-habits',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    EditHabitItemComponent
  ],
  templateUrl: './edit-habits.component.html',
  styleUrls: ['./edit-habits.component.scss'],
  animations: [
    fadeInTrigger,
    fadeHeightOutTrigger,
  ]
})
export class EditHabitsComponent implements OnInit {
  data: HabitResponse[];

  isCreatingNew = false;

  constructor(
    private habitMgmtService: HabitMgmtService
  ) { }
  
  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.habitMgmtService.getHabits()
      .subscribe(response => {
        this.data = response;
      });
  }

  enterCreateMode(): void {
    this.isCreatingNew = true;
  }

  cancelCreateMode(): void {
    this.isCreatingNew = false;
  }
  
  handleCreate(habit: HabitResponse): void {
    this.habitMgmtService.createHabit({ body: habit })
      .subscribe(response => {
        this.isCreatingNew = false;
        this.refresh();
      });
  }

  handleUpdate(habit: HabitResponse): void {
    this.habitMgmtService.updateHabit({ id: habit.id, body: habit })
      .subscribe(response => {
        this.refresh();
      });
  }

  handleDelete(habit: HabitResponse): void {
    this.habitMgmtService.deleteHabit({ id: habit.id })
      .subscribe(response => {
        this.refresh();
      });
  }

  trackByHabitId(index: number, habit: HabitResponse): number {
    return habit.id;
  }
}
