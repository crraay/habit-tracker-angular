import { NgForOf, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HabitStatResponse } from '@webapi/models';
import { HabitStatisticsService } from '@webapi/services';
import { format, startOfMonth, endOfMonth, add } from 'date-fns';
import { StatHabitItemComponent } from '../stat-habit-item/stat-habit-item.component';
import { DatepickerComponent } from '../datepicker/datepicker.component';

@Component({
  selector: 'ht-statistics',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    DatepickerComponent,
    StatHabitItemComponent
  ],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsComponent implements OnInit {

  currentDate = new Date();

  startDate: Date;

  endDate: Date;

  data: HabitStatResponse[];

  constructor(
    private habitStatisticsService: HabitStatisticsService,
    private cdr: ChangeDetectorRef
  ) {
    this.startDate = startOfMonth(this.currentDate);
    this.endDate = this.currentDate;
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    const formattedStartDate = format(this.startDate, 'yyyy-MM-dd');
    const formattedEndDate = format(this.endDate, 'yyyy-MM-dd');

    this.habitStatisticsService
      .getAggregatedData({ startDate: formattedStartDate, endDate: formattedEndDate })
      .subscribe(response => {
        this.data = response;
        this.cdr.markForCheck();
      });
  }

  onPeriodChange(e: any) {
    this.startDate = e.startDate;
    this.endDate = e.endDate;
    this.refresh();
  }
}
