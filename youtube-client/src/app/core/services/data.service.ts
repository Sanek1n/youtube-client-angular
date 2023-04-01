import { Injectable } from '@angular/core';
import { ISearchResponse } from '@app/youtube/models/search-response.model';
import mockData from '@app/shared/mock-data/response.json';
import { ISearchItem } from '@app/youtube/models/search-item.model';

@Injectable({ providedIn: 'root' })
export default class DataService {
  private data: ISearchResponse = mockData;

  public resultItems: Array<ISearchItem> = this.data.items;

  getItems(): void {
    this.resultItems = this.data.items;
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
  }

  sortWord(searchWord: string): void {
    if (searchWord) {
      this.resultItems = this.data.items.filter(
        (value) => value.snippet.title.toLowerCase().indexOf(searchWord.toLowerCase()) >= 0,
      );
    } else {
      this.resultItems = this.data.items;
    }
  }
}
