import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackHabitItemComponent } from './track-habit-item.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
