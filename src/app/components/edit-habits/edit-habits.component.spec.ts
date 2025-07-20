import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { EditHabitsComponent } from './edit-habits.component';
import { HabitMgmtService } from '@webapi/services';
import { ChangeDetectorRef } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';

describe('EditHabitsComponent', () => {
  let component: EditHabitsComponent;
  let fixture: ComponentFixture<EditHabitsComponent>;
  let mockHabitMgmtService: jasmine.SpyObj<HabitMgmtService>;
  let mockChangeDetectorRef: jasmine.SpyObj<ChangeDetectorRef>;
  let mockDialogService: jasmine.SpyObj<DialogService>;

  beforeEach(async () => {
    mockHabitMgmtService = jasmine.createSpyObj('HabitMgmtService', ['getHabits', 'createHabit', 'updateHabit', 'deleteHabit']);
    mockChangeDetectorRef = jasmine.createSpyObj('ChangeDetectorRef', ['markForCheck']);
    mockDialogService = jasmine.createSpyObj('DialogService', ['confirm']);

    // Setup default return values
    mockHabitMgmtService.getHabits.and.returnValue(of([]));
    mockHabitMgmtService.createHabit.and.returnValue(of({}));
    mockHabitMgmtService.updateHabit.and.returnValue(of({}));
    mockHabitMgmtService.deleteHabit.and.returnValue(of(void 0));

    await TestBed.configureTestingModule({
      imports: [EditHabitsComponent],
      providers: [
        { provide: HabitMgmtService, useValue: mockHabitMgmtService },
        { provide: ChangeDetectorRef, useValue: mockChangeDetectorRef },
        { provide: DialogService, useValue: mockDialogService }
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
