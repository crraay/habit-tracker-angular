import { Routes } from '@angular/router';
import { EditHabitsComponent } from './components/edit-habits/edit-habits.component';
import { TrackHabitsComponent } from './components/edit-habit-item/track-habits/track-habits.component';

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
