import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import AuthService from '../services/auth.service';

@Injectable()
export default class AuthGuard {
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  canActivate(): boolean {
    if (!this.auth.loginSubject$.getValue()) {
      this.router.navigateByUrl('/auth');
    }
    return this.auth.loginSubject$.getValue();
  }
}
