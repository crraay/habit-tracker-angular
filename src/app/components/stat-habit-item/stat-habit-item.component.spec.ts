import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatHabitItemComponent } from './stat-habit-item.component';
import { HabitStatResponse } from '@webapi/models';

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
      done: 5,
      of: 10
    } as HabitStatResponse;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
