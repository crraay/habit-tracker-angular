import { Injectable } from '@angular/core';
import { DialogCloseDirective, DialogService as NgneatDialogService } from '@ngneat/dialog';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private dialog: NgneatDialogService
  ) { }

  confirm(message: string, title: string = 'Confirm') {
    return this.dialog.open(ConfirmDialogComponent, {
      data: {
        title,
        message
      },
      size: 'sm',
      enableClose: false,
      closeButton: false
    });
  }
}
