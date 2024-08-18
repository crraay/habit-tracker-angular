import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHabitItemComponent } from './edit-habit-item.component';

describe('EditHabitItemComponent', () => {
  let component: EditHabitItemComponent;
  let fixture: ComponentFixture<EditHabitItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditHabitItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHabitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
