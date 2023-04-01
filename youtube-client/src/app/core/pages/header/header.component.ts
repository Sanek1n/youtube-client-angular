import {
  Component, Inject,
} from '@angular/core';
// import { ISearchItem } from 'src/app/youtube/models/search-item.model';
// import mockData from '@app/shared/mock-data/response.json';
// import { ISearchResponse } from '@app/youtube/models/search-response.model';
import AuthService from '@app/auth/services/auth.service';
import { Router } from '@angular/router';
import DataService from '@app/core/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  constructor(
    @Inject(AuthService) private auth: AuthService,
    private router: Router,
    private dataService: DataService,
  ) {}

  // @Output() newDataEvent = new EventEmitter<Array<ISearchItem>>();

  searchSettings = false;

  // private data: ISearchResponse = mockData;

  // private resultItems: Array<ISearchItem> = this.data.items;

  toggleSettings():void {
    this.searchSettings = !this.searchSettings;
  }

  logout() {
    this.auth.delToken();
    this.router.navigateByUrl('auth');
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
