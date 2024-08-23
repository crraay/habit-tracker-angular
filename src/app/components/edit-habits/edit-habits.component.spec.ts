import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHabitsComponent } from './edit-habits.component';

describe('EditHabitsComponent', () => {
  let component: EditHabitsComponent;
  let fixture: ComponentFixture<EditHabitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditHabitsComponent]
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
