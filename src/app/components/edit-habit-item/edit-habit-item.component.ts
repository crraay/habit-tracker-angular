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

  @Output()
  onEditEnter = new EventEmitter<void>();

  @Output()
  onEditCancel = new EventEmitter<void>();

  @Input()
  data: HabitResponse;

  @Input()
  isEditMode = false;

  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {  }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.data?.id],
      // TODO add length validation
      name: [this.data?.name, Validators.required]
    });
  }

  saveChanges() {
    if (!this.form.valid) {
      return;
    }
    
    this.isEditMode = false;
    this.onSave.emit(this.form.value);
  }

  deleteItem() {
    this.onDelete.emit(this.data);
  }

  enterEdit() {
    this.isEditMode = true;
    this.onEditEnter.emit();
  }

  cancelEdit() {
    this.isEditMode = false;
    this.onEditCancel.emit();
  }
}
