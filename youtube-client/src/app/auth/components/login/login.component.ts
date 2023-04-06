import { Component } from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup, ValidationErrors, Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import AuthService from '@app/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder,
  ) { this.createForm(); }

  authForm!: FormGroup;

  loginForm = {
    login: '',
    password: '',
  };

  createForm(): void {
    this.authForm = this.fb.group({
      login: [this.loginForm.login, [Validators.required, Validators.email]],
      password: [this.loginForm.password, [Validators.required, this.customValidator]],
    });
  }

  get getLogin() {
    return this.authForm.get('login');
  }

  get getPassword() {
    return this.authForm.get('password');
  }

  // eslint-disable-next-line class-methods-use-this
  private customValidator(control: FormControl): ValidationErrors | null {
    const { value } = control;
    const hasNumberLetter = /[0-9a-z]/.test(value);
    const hasCapitalSmallLetter = /[A-Za-z]/.test(value);
    const isLengthValid = value ? value.length > 7 : false;
    const isSpecialSigns = /[!@#$%^&*]/.test(value);
    const error = "Your password isn't strong enough";

    let result: { invalidPassword: string } | null = null;

    if (!hasNumberLetter) {
      result = { invalidPassword: `${error} a mixture of letters and numbers` };
    }
    if (!hasCapitalSmallLetter) {
      result = { invalidPassword: `${error} a mixture of both uppercase and lowercase letters` };
    }
    if (!isLengthValid) {
      result = { invalidPassword: `${error} at least 8 characters` };
    }
    if (!isSpecialSigns) {
      result = { invalidPassword: `${error} inclusion of at least one special character, e.g., ! @ # ? ]` };
    }
    return result;
  }

  setIsSubmit() {
    if (this.loginForm.login && this.loginForm.password) {
      this.auth.setToken();
      this.auth.setUserName(this.loginForm.login);
      this.router.navigateByUrl('');
    }
  }
}
