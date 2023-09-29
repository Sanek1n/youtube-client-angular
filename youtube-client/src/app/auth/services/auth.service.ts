import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export default class AuthService {
  public isLogin: boolean;

  constructor() {
    this.isLogin = !!this.getToken();
  }

  setToken(): void {
    localStorage.setItem('token', '123');
    this.isLogin = true;
  }

  // eslint-disable-next-line class-methods-use-this
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // eslint-disable-next-line class-methods-use-this
  delToken(): void {
    localStorage.removeItem('token');
  }
}
