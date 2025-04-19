import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatHabitItemComponent } from './stat-habit-item.component';

describe('StatHabitItemComponent', () => {
  let component: StatHabitItemComponent;
  let fixture: ComponentFixture<StatHabitItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatHabitItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatHabitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
