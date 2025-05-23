import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@webapi/services';
import { AuthStore } from 'src/app/store/auth.store';

@Component({
  selector: 'ht-login',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  host: { class: 'd-flex flex-column justify-content-center align-items-center bg-light' },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private authStore: AuthStore
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    this.authService.login({
      body: {
        username: this.form.value.username,
        password: this.form.value.password
      }
    }).subscribe(response => {
      this.authStore.setData(response);
      this.router.navigate(['']);
    });
  }
}
