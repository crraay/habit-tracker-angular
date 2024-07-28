import { Routes } from '@angular/router';
import { EditHabitsComponent } from './pages/edit-habits/edit-habits.component';
import { TrackHabitsComponent } from './pages/track-habits/track-habits.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'track',
		pathMatch: "full"
	},
	{
		path: 'track',
		component: TrackHabitsComponent
	},
	{
		path: 'edit',
		component: EditHabitsComponent
	}
];
