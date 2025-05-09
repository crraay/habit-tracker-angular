import { Component, Input } from '@angular/core';
import { HabitStat } from '@webapi/models';

@Component({
  selector: 'ht-stat-habit-item',
  standalone: true,
  imports: [],
  templateUrl: './stat-habit-item.component.html',
  styleUrl: './stat-habit-item.component.scss'
})
export class StatHabitItemComponent {

  @Input()
  data: HabitStat;

}
