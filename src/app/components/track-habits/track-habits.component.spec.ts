import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { TrackHabitsComponent } from './track-habits.component';
import { HabitTrackService } from '@webapi/services';

describe('TrackHabitsComponent', () => {
  let component: TrackHabitsComponent;
  let fixture: ComponentFixture<TrackHabitsComponent>;
  let mockHabitTrackService: jasmine.SpyObj<HabitTrackService>;
  let mockChangeDetectorRef: jasmine.SpyObj<ChangeDetectorRef>;

  beforeEach(async () => {
    mockHabitTrackService = jasmine.createSpyObj('HabitTrackService', ['getTrackingList', 'trackHabit', 'untrackHabit']);
    mockChangeDetectorRef = jasmine.createSpyObj('ChangeDetectorRef', ['markForCheck']);

    // Setup default return values
    mockHabitTrackService.getTrackingList.and.returnValue(of([]));
    mockHabitTrackService.trackHabit.and.returnValue(of(void 0));
    mockHabitTrackService.untrackHabit.and.returnValue(of(void 0));

    await TestBed.configureTestingModule({
      imports: [TrackHabitsComponent],
      providers: [
        provideHttpClient,
        { provide: ActivatedRoute, useValue: { params: of({}) } },
        { provide: HabitTrackService, useValue: mockHabitTrackService },
        { provide: ChangeDetectorRef, useValue: mockChangeDetectorRef }
      ]
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
