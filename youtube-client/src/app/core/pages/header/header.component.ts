import {
  Component, OnInit,
} from '@angular/core';
import AuthService from '@app/auth/services/auth.service';
import { Router } from '@angular/router';
import DataService from '@app/core/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router,
    private dataService: DataService,
  ) {}

  searchSettings = false;

  isAuth = false;

  userName = '';

  ngOnInit(): void {
    this.getAuth();
    this.userName = this.auth.getUserNme();
  }

  getAuth() {
    // eslint-disable-next-line no-return-assign
    this.auth.loginSubject$.subscribe((value) => this.isAuth = value);
    // eslint-disable-next-line no-return-assign
    this.auth.userSubject$.subscribe((value) => this.userName = value);
  }

  toggleSettings():void {
    this.searchSettings = !this.searchSettings;
  }

  logout() {
    if (this.isAuth) {
      this.auth.delToken();
      this.router.navigateByUrl('auth');
    }
  }

  getData(): void {
    this.dataService.getItems();
    this.router.navigateByUrl('');
  }

  sortDate(direction: string):void {
    this.dataService.sortDate(direction);
  }

  sortView(direction: string):void {
    this.dataService.sortView(direction);
  }

  sortWord(searchWord: string): void {
    this.dataService.sortWord(searchWord);
  }
}
