import { Component } from '@angular/core';
import { Router } from '@angular/router';
import AuthService from '@app/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}

  loginForm = {
    login: '',
    password: '',
  };

  setIsSubmit() {
    if (this.loginForm.login && this.loginForm.password) {
      this.auth.setToken();
      this.router.navigateByUrl('');
    }
  }
}
