import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatHabitItemComponent } from './stat-habit-item.component';
import { HabitStat } from '@webapi/models';

describe('StatHabitItemComponent', () => {
  let component: StatHabitItemComponent;
  let fixture: ComponentFixture<StatHabitItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatHabitItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatHabitItemComponent);
    component = fixture.componentInstance;

    // Set up mock input data
    component.data = {
      habitId: 1,
      habitName: 'Test Habit',
      totalDays: 10,
      trackedDays: 5,
      percentage: 50
    } as HabitStat;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
