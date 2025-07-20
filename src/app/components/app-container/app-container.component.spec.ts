import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { AppContainerComponent } from './app-container.component';
import { AuthStore } from 'src/app/store/auth.store';
import { DialogService } from 'src/app/services/dialog.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppContainerComponent', () => {
  let component: AppContainerComponent;
  let fixture: ComponentFixture<AppContainerComponent>;
  let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;
  let mockAuthStore: jasmine.SpyObj<AuthStore>;
  let mockDialogService: jasmine.SpyObj<DialogService>;

  beforeEach(async () => {
    mockActivatedRoute = jasmine.createSpyObj('ActivatedRoute', ['params']);
    mockAuthStore = jasmine.createSpyObj('AuthStore', ['clear']);
    mockDialogService = jasmine.createSpyObj('DialogService', ['confirm']);

    await TestBed.configureTestingModule({
      imports: [AppContainerComponent],
      providers: [
        RouterTestingModule,
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: AuthStore, useValue: mockAuthStore },
        { provide: DialogService, useValue: mockDialogService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
