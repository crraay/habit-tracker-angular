/* tslint:disable */
/* eslint-disable */
import { HabitAggregateResponse } from '../models/habit-aggregate-response';
export interface HabitTrackResponse {
  aggregate?: HabitAggregateResponse;
  habitId?: number;
  habitName?: string;
  iconUrl?: string;
  status?: boolean;
}
