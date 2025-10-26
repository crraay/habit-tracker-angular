/* tslint:disable */
/* eslint-disable */
import { HabitAggregateResponse } from '../models/habit-aggregate-response';
export interface HabitStatResponse {
  aggregate?: HabitAggregateResponse;
  done?: number;
  habitId?: number;
  habitName?: string;
  iconUrl?: string;
  of?: number;
}
