import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export default class AuthService {
  private isLogin: boolean;

  private userName: string;

  public loginSubject$: BehaviorSubject<boolean>;

  public userSubject$: BehaviorSubject<string>;

  constructor() {
    this.isLogin = !!this.getToken();
    this.userName = '';
    this.loginSubject$ = new BehaviorSubject<boolean>(this.isLogin);
    this.userSubject$ = new BehaviorSubject<string>(this.userName);
  }

  setToken(): void {
    localStorage.setItem('token', '123');
    this.isLogin = true;
    this.loginSubject$.next(this.isLogin);
  }

  setUserName(name: string): void {
    this.userName = name;
    this.userSubject$.next(this.userName);
  }

  getUserNme(): string {
    return this.userName;
  }

  // eslint-disable-next-line class-methods-use-this
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  delToken(): void {
    localStorage.removeItem('token');
    this.isLogin = false;
    this.loginSubject$.next(this.isLogin);
    this.setUserName('');
  }
}
