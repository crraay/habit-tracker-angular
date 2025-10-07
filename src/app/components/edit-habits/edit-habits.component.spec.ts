import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { EditHabitsComponent } from './edit-habits.component';
import { HabitIconsService, HabitMgmtService } from '@webapi/services';
import { ChangeDetectorRef } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';
import { HabitResponse } from '@webapi/models';

describe('EditHabitsComponent', () => {
  let component: EditHabitsComponent;
  let fixture: ComponentFixture<EditHabitsComponent>;
  let mockChangeDetectorRef: jasmine.SpyObj<ChangeDetectorRef>;
  let mockDialogService: jasmine.SpyObj<DialogService>;
  let mockHabitMgmtService: jasmine.SpyObj<HabitMgmtService>;
  let mockHabitIconsService: jasmine.SpyObj<HabitIconsService>;

  beforeEach(async () => {
    mockChangeDetectorRef = jasmine.createSpyObj('ChangeDetectorRef', ['markForCheck']);
    mockDialogService = jasmine.createSpyObj('DialogService', ['confirm']);
    mockHabitMgmtService = jasmine.createSpyObj('HabitMgmtService', ['getHabits', 'createHabit', 'updateHabit', 'deleteHabit']);
    mockHabitIconsService = jasmine.createSpyObj('HabitIconsService', ['getAll']);

    // Setup default return values
    mockHabitMgmtService.getHabits.and.returnValue(of([]));
    mockHabitMgmtService.createHabit.and.returnValue(of({ id: 1, name: 'Test Habit' } as HabitResponse));
    mockHabitMgmtService.updateHabit.and.returnValue(of({ id: 1, name: 'Updated Habit' } as HabitResponse));
    mockHabitMgmtService.deleteHabit.and.returnValue(of(void 0));

    mockHabitIconsService.getAll.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [EditHabitsComponent],
      providers: [
        { provide: ChangeDetectorRef, useValue: mockChangeDetectorRef },
        { provide: DialogService, useValue: mockDialogService },
        { provide: HabitMgmtService, useValue: mockHabitMgmtService },
        { provide: HabitIconsService, useValue: mockHabitIconsService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHabitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
