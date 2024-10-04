import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthStore } from 'src/app/store/auth.store';

@Component({
  selector: 'ht-app-container',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './app-container.component.html',
  styleUrl: './app-container.component.scss'
})
export class AppContainerComponent {

  constructor(
    private router: Router,
    private authStore: AuthStore
  ) { }

  logout() {
    this.authStore.clear();
    this.router.navigate(['login']);
  }
}
