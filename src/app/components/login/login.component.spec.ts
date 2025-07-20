import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { LoginComponent } from './login.component';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from '@webapi/services';
import { AuthStore } from 'src/app/store/auth.store';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let mockAuthStore: jasmine.SpyObj<AuthStore>;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockAuthService = jasmine.createSpyObj('AuthService', ['login']);
    mockAuthStore = jasmine.createSpyObj('AuthStore', ['setData']);

    await TestBed.configureTestingModule({
      imports: [LoginComponent, ReactiveFormsModule],
      providers: [
        FormBuilder,
        { provide: Router, useValue: mockRouter },
        { provide: AuthService, useValue: mockAuthService },
        { provide: AuthStore, useValue: mockAuthStore }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
