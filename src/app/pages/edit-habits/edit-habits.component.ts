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
    this.habitService.getHabits()
      .subscribe(response => {
        this.data = response;
      });
  }

  handleEdit(habit: HabitResponse): void {
    console.log('Edit habit:', habit);
    // Implement edit logic here
    
  }

  handleSave(habit: HabitResponse): void {
    console.log('Save habit:', habit);
    // Implement save logic here
  }

  handleDelete(habit: HabitResponse): void {
    console.log('Delete habit:', habit);
    // Implement delete logic here
  }
}
