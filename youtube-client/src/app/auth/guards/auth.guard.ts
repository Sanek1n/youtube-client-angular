import { Inject, Injectable } from '@angular/core';
import {
  CanActivate, Router,
} from '@angular/router';
import AuthService from '../services/auth.service';

@Injectable()
export default class AuthGuard implements CanActivate {
  constructor(
    @Inject(AuthService) private auth: AuthService,
    private router: Router,
  ) {}

  canActivate(): boolean {
    if (!this.auth.isLogin) {
      this.router.navigateByUrl('/auth');
    }
    return this.auth.isLogin;
  }
}
