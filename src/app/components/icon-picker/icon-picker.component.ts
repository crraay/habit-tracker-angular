import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { HabitIconDto } from '@webapi/models';

@Component({
  selector: 'ht-icon-picker',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './icon-picker.component.html',
  styleUrl: './icon-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IconPickerComponent),
      multi: true
    }
  ]
})
export class IconPickerComponent implements ControlValueAccessor {

  @Input()
  icons: HabitIconDto[];

  value: number | null = null;
  disabled = false;

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  selectIcon(selectedId: string): void {
    if (this.disabled) return;

    const id = selectedId === '' ? null : Number(selectedId);
    this.value = id;
    this.onChange(id);
    this.onTouched();
    this.cdr.markForCheck();
  }

  writeValue(value: number | null): void {
    this.value = value;
    this.cdr.markForCheck();
  }

  registerOnChange(fn: (value: number | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  private onChange: (value: number | null) => void = () => {};
  private onTouched: () => void = () => {};
}
