import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { of } from 'rxjs';

import { StatisticsComponent } from './statistics.component';
import { HabitStatisticsService } from '@webapi/services';

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;
  let mockHabitStatisticsService: jasmine.SpyObj<HabitStatisticsService>;
  let mockChangeDetectorRef: jasmine.SpyObj<ChangeDetectorRef>;

  beforeEach(async () => {
    mockHabitStatisticsService = jasmine.createSpyObj('HabitStatisticsService', ['getAggregatedData']);
    mockChangeDetectorRef = jasmine.createSpyObj('ChangeDetectorRef', ['markForCheck']);

    // Setup default return values
    mockHabitStatisticsService.getAggregatedData.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [StatisticsComponent],
      providers: [
        provideHttpClient,
        { provide: HabitStatisticsService, useValue: mockHabitStatisticsService },
        { provide: ChangeDetectorRef, useValue: mockChangeDetectorRef }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
