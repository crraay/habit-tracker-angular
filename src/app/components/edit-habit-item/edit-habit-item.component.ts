import { JsonPipe, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HabitResponse } from '@webapi/models';
import { HabitService } from '@webapi/services';

@Component({
  selector: 'ht-edit-habit-item',
  standalone: true,
  imports: [
    JsonPipe,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './edit-habit-item.component.html',
  styleUrls: ['./edit-habit-item.component.scss'],
  host: { class: 'card' }
})
export class EditHabitItemComponent implements OnInit {
  @Output()
  onSave = new EventEmitter<HabitResponse>();

  @Output()
  onDelete = new EventEmitter<HabitResponse>();

  @Input()
  data: HabitResponse;

  editMode = false;
  habitForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {  }

  ngOnInit(): void {
    this.habitForm = this.fb.group({
      id: [this.data.id || null],
      name: [this.data.name || '', Validators.required]
    });
  }

  saveChanges() {
    if (!this.habitForm.valid) {
      return;
    }
    
    this.editMode = false;
    this.onSave.emit(this.habitForm.value);
  }

  deleteItem() {
    this.onDelete.emit(this.data);
  }
}
