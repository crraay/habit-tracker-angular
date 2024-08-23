import { NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HabitResponse } from '@webapi/models';
import { HabitService } from '@webapi/services';
import { EditHabitItemComponent } from "../../components/edit-habit-item/edit-habit-item.component";
import { trigger, style, transition, animate, sequence } from '@angular/animations';

@Component({
  selector: 'app-edit-habits',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    EditHabitItemComponent
  ],
  templateUrl: './edit-habits.component.html',
  styleUrls: ['./edit-habits.component.scss'],
  animations: [
    trigger('fadeOut', [
      transition(':leave', [
        sequence([
          animate('200ms ease-in-out', style({
            opacity: 0
          })),
          animate('500ms ease-in-out', style({
            height: 0
          })),
        ])
      ])
    ])
  ]
})
export class EditHabitsComponent implements OnInit {
  data: HabitResponse[];

  isCreatingNew = false;

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

  enterCreateMode(): void {
    this.isCreatingNew = true;
  }

  cancelCreateMode(): void {
    this.isCreatingNew = false;
  }
  
  handleCreate(habit: HabitResponse): void {
    this.habitService.createHabit({ body: habit })
      .subscribe(response => {
        this.isCreatingNew = false;
        this.refresh();
      });
  }

  handleUpdate(habit: HabitResponse): void {
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

  trackByHabitId(index: number, habit: HabitResponse): number {
    return habit.id;
  }
}
