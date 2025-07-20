import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackHabitItemComponent } from './track-habit-item.component';
import { HabitTrackResponse } from '@webapi/models';

describe('TrackHabitItemComponent', () => {
  let component: TrackHabitItemComponent;
  let fixture: ComponentFixture<TrackHabitItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackHabitItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackHabitItemComponent);
    component = fixture.componentInstance;

    // Set up mock input data
    component.data = {
      habitId: 1,
      habitName: 'Test Habit',
      status: false,
      lastTrackedDate: null
    } as HabitTrackResponse;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
