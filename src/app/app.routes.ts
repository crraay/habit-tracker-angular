import { Routes } from '@angular/router';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { EditHabitsComponent } from './components/edit-habits/edit-habits.component';
import { TrackHabitsComponent } from './components/track-habits/track-habits.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {
	path: 'login',
	component: LoginComponent
  },
  {
	path: '',
	component: AppContainerComponent,
	children: [
	  {
		path: '',
		redirectTo: 'track',
		pathMatch: 'full'
	  },
	  {
		path: 'track',
		component: TrackHabitsComponent
	  },
	  {
		path: 'edit',
		component: EditHabitsComponent
	  }
	]
  }
];
