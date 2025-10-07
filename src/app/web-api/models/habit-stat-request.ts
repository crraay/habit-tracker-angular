/* tslint:disable */
/* eslint-disable */
import { HabitAggregateResponse } from '../models/habit-aggregate-response';
export interface HabitStatRequest {
  aggregate?: HabitAggregateResponse;
  done?: number;
  habitId?: number;
  habitName?: string;
  iconUrl?: string;
  of?: number;
}
