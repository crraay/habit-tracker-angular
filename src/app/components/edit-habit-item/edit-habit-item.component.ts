import { JsonPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HabitIconDto, HabitDto } from '@webapi/models';
import { CounterComponent } from "../counter/counter.component";
import { IconPickerComponent } from '../icon-picker/icon-picker.component';

@Component({
  selector: 'ht-edit-habit-item',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    CounterComponent,
    IconPickerComponent
  ],
  templateUrl: './edit-habit-item.component.html',
  styleUrls: ['./edit-habit-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditHabitItemComponent implements OnInit {
  @Output()
  onSave = new EventEmitter<HabitDto>();

  @Output()
  onDelete = new EventEmitter<HabitDto>();

  @Output()
  onEditEnter = new EventEmitter<void>();

  @Output()
  onEditCancel = new EventEmitter<void>();

  @Input()
  data: HabitDto;

  @Input()
  isEditMode = false;

  @Input()
  icons: HabitIconDto[];

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {  }

  ngOnInit(): void {
    // debugger;
    this.form = this.fb.group({
      id: [this.data?.id],
      iconId: [this.data?.iconId],
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
