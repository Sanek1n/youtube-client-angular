import {
  Component, Output, EventEmitter, Inject,
} from '@angular/core';
import { ISearchItem } from 'src/app/youtube/models/search-item.model';
import mockData from '@app/shared/mock-data/response.json';
import { ISearchResponse } from '@app/youtube/models/search-response.model';
import AuthService from '@app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  constructor(
    @Inject(AuthService) private auth: AuthService,
    private router: Router,
  ) {}

  @Output() newDataEvent = new EventEmitter<Array<ISearchItem>>();

  searchSettings = false;

  private data: ISearchResponse = mockData;

  private resultItems: Array<ISearchItem> = this.data.items;

  toggleSettings():void {
    this.searchSettings = !this.searchSettings;
  }

  logout() {
    this.auth.delToken();
    this.router.navigateByUrl('auth');
  }

  getData(): void {
    this.newDataEvent.emit(this.resultItems);
  }

  sortDate(direction: string):void {
    if (direction === 'ASC') {
      this.resultItems = this.data.items.sort(
        (a, b) => Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt),
      );
    } else {
      this.resultItems = this.data.items.sort(
        (a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt),
      );
    }
    this.getData();
  }

  sortView(direction: string):void {
    if (direction === 'ASC') {
      this.resultItems = this.data.items.sort(
        (a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount),
      );
    } else {
      this.resultItems = this.data.items.sort(
        (a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount),
      );
    }
    this.getData();
  }

  sortWord(searchWord: string): void {
    if (searchWord) {
      this.resultItems = Array.from(this.data.items.filter(
        (value) => value.snippet.title.toLowerCase().indexOf(searchWord.toLowerCase()) >= 0,
      ));
    } else {
      this.resultItems = this.data.items;
    }
    this.getData();
  }
}
