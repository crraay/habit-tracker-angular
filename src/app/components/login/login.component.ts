import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@webapi/services';

@Component({
  selector: 'ht-login',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  host: { class: 'd-flex flex-column justify-content-center align-items-center bg-light' }
})
export class LoginComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
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
      console.log(response)
    });
  }
}
