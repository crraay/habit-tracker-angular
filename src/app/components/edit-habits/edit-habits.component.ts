import { NgForOf, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HabitResponse } from '@webapi/models';
import { HabitMgmtService } from '@webapi/services';
import { EditHabitItemComponent } from "../edit-habit-item/edit-habit-item.component";
import { fadeHeightOutTrigger, fadeInTrigger, fadeOutTrigger } from 'src/app/animations/triggers';
import { DialogService } from 'src/app/services/dialog.service';
import { filter, switchMap } from 'rxjs';

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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditHabitsComponent implements OnInit {
  data: HabitResponse[];

  isCreatingNew = false;

  constructor(
    private habitMgmtService: HabitMgmtService,
    private cdr: ChangeDetectorRef,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.habitMgmtService.getHabits()
      .subscribe(response => {
        this.data = response;
        this.cdr.markForCheck();
      });
  }

  enterCreateMode(): void {
    this.isCreatingNew = true;
    this.cdr.markForCheck();
  }

  cancelCreateMode(): void {
    this.isCreatingNew = false;
    this.cdr.markForCheck();
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
    this.dialogService
      .confirm('Are you sure you want to delete this habit?', 'Delete Habit')
      .afterClosed$
      .pipe(
        filter(result => result === true),
        switchMap(() => this.habitMgmtService.deleteHabit({ id: habit.id })),
      ).subscribe(response => {
        this.refresh();
      });
  }

  trackByHabitId(index: number, habit: HabitResponse): number {
    return habit.id;
  }
}
