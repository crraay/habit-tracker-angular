import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HabitResponse } from '@webapi/models';

@Component({
  selector: 'ht-edit-habit-item',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './edit-habit-item.component.html',
  styleUrls: ['./edit-habit-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
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
    this.cdr.markForCheck();
  }

  deleteItem() {
    this.onDelete.emit(this.data);
  }

  enterEdit() {
    this.isEditMode = true;
    this.onEditEnter.emit();
    this.cdr.markForCheck();
  }

  cancelEdit() {
    this.isEditMode = false;
    this.onEditCancel.emit();
    this.cdr.markForCheck();
  }
}
