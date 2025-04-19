import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import AirDatepicker from 'air-datepicker';
import localeEn from 'air-datepicker/locale/en';

@Component({
  selector: 'ht-datepicker',
  standalone: true,
  imports: [],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss'
})
export class DatepickerComponent implements OnInit {

  @ViewChild('datepicker', { static: true })
  inputElement: ElementRef;

  @Input()
  value: Date;

  @Output()
  valueChange = new EventEmitter<Date>();

  @Input()
  maxDate: Date;

  @Input()
  minDate: Date;

  @Input()
  isMobile: boolean;

  @Input()
  isInputHidden: boolean;

  private _airDatepicker: any;

  ngOnInit() {
    this._airDatepicker = new AirDatepicker(this.inputElement.nativeElement,
      {
        locale: localeEn,
        firstDay: 1,
        multipleDates: false,
        selectedDates: [this.value],
        autoClose: true,
        // turn on mobile view if input is hidden
        isMobile: this.isMobile,
        toggleSelected: false,
        maxDate: this.maxDate,
        minDate: this.minDate,
        onSelect: (e) => {
          this.value = e.date as Date;

          this.valueChange.emit(this.value);
        },
      }
    );
  }

  show() {
    this._airDatepicker.show();
  }

  hide() {
    this._airDatepicker.hide();
  }

}
