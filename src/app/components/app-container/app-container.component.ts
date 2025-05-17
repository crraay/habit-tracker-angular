import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { DialogService } from 'src/app/services/dialog.service';
import { AuthStore } from 'src/app/store/auth.store';

@Component({
  selector: 'ht-app-container',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './app-container.component.html',
  styleUrl: './app-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppContainerComponent {

  constructor(
    private router: Router,
    private authStore: AuthStore,
    private dialogService: DialogService
  ) { }

  logout() {
    this.dialogService
    .confirm('Are you sure you want to logout?')
      .afterClosed$
      .pipe(
        filter(result => result === true),
      )
      .subscribe(result => {
        this.authStore.clear();
        this.router.navigate(['login']);
      });
  }
}
