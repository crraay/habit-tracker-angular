import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackHabitsComponent } from './track-habits.component';

describe('TrackHabitsComponent', () => {
  let component: TrackHabitsComponent;
  let fixture: ComponentFixture<TrackHabitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackHabitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackHabitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
