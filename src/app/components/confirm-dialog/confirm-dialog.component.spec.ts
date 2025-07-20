import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogComponent } from './confirm-dialog.component';
import { DialogRef } from '@ngneat/dialog';

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;
  let mockDialogRef: jasmine.SpyObj<DialogRef>;

  beforeEach(async () => {
    mockDialogRef = jasmine.createSpyObj('DialogRef', ['close'], {
      data: {
        title: 'Test Title',
        message: 'Test Message'
      }
    });

    await TestBed.configureTestingModule({
      imports: [ConfirmDialogComponent],
      providers: [
        { provide: DialogRef, useValue: mockDialogRef }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
