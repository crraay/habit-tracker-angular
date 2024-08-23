import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

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

  constructor() { }

  logout() {
    // TODO: Implement logout
  }
}
