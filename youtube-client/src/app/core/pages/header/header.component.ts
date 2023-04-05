import {
  Component, OnInit,
} from '@angular/core';
import AuthService from '@app/auth/services/auth.service';
import { Router } from '@angular/router';
import DataService from '@app/core/services/data.service';
import {
  Subject, debounceTime, distinctUntilChanged, filter,
} from 'rxjs';

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

  private searchTerms = new Subject<string>();

  ngOnInit(): void {
    this.getAuth();
    this.userName = this.auth.getUserNme();
    this.searchTerms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter((res) => res.length > 2),
    ).subscribe((terms) => this.dataService.setSearch(terms));
  }

  getAuth(): void {
    this.auth.loginSubject$.subscribe((value) => { this.isAuth = value; });
    this.auth.userSubject$.subscribe((value) => { this.userName = value; });
  }

  toggleSettings():void {
    this.searchSettings = !this.searchSettings;
  }

  logout(): void {
    if (this.isAuth) {
      this.auth.delToken();
      this.router.navigateByUrl('auth');
    }
  }

  inputSearch(searchData: string) {
    this.searchTerms.next(searchData);
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
