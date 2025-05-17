import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';

@Component({
  selector: 'ht-confirm-dialog',
  standalone: true,
  imports: [],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmDialogComponent {

  title: string;
  message: string;

  constructor(
    private dialogRef: DialogRef
  ) {
    // console.log(this.dialogRef.data);
    //  this.dialogRef.data
    this.title = this.dialogRef.data?.title;
    this.message = this.dialogRef.data?.message;
  }

  close(result: boolean) {
    this.dialogRef.close(result);
  }

}
