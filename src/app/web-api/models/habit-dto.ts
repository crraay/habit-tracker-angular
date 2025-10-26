/* tslint:disable */
/* eslint-disable */
import { HabitAggregateResponse } from '../models/habit-aggregate-response';
export interface HabitDto {
  aggregate?: HabitAggregateResponse;
  iconId?: number;
  iconUrl?: string;
  id?: number;
  name: string;
}
