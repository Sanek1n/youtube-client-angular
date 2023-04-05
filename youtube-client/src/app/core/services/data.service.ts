import { Injectable } from '@angular/core';
import { ISearchResponse } from '@app/youtube/models/search-response.model';
import { ISearchItem } from '@app/youtube/models/search-item.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export default class DataService {
  private data: ISearchResponse = {
    kind: '',
    etag: '',
    pageInfo: {
      totalResults: 0,
      resultsPerPage: 0,
    },
    items: [],
  };

  private resultItems: Array<ISearchItem>;

  public resultSubject$: BehaviorSubject<ISearchItem[]>;

  private searchString = '';

  constructor(private http: HttpClient) {
    this.resultItems = [];
    this.resultSubject$ = new BehaviorSubject<ISearchItem[]>(this.resultItems);
  }

  getItems(text: string): Observable<ISearchResponse> {
    return this.http.get<ISearchResponse>(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyB8SCq2oQnKRSQb0WiAR-VmfMCWgJVRMho&type=video&part=snippet&maxResults=15&q=${text}`);
  }

  getVideo(videoId: string[]): Observable<ISearchResponse> {
    return this.http.get<ISearchResponse>(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyB8SCq2oQnKRSQb0WiAR-VmfMCWgJVRMho&id=${videoId.join(',')}&part=snippet,statistics`);
  }

  setSearch(searchText: string): void {
    this.getItems(searchText)
      .subscribe((data) => this.getVideo((data.items.map((item) => item.id.videoId)))
        .subscribe((result) => {
          this.data = data;
          this.resultItems = result.items;
          this.searchString = searchText;
          this.resultSubject$.next(this.resultItems);
        }));
  }

  sortDate(direction: string):void {
    if (direction === 'ASC') {
      this.resultItems = this.resultItems.sort(
        (a, b) => Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt),
      );
    } else {
      this.resultItems = this.resultItems.sort(
        (a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt),
      );
    }
  }

  sortView(direction: string):void {
    if (direction === 'ASC') {
      this.resultItems = this.resultItems.sort(
        (a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount),
      );
    } else {
      this.resultItems = this.resultItems.sort(
        (a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount),
      );
    }
  }

  sortWord(searchWord: string): void {
    if (searchWord) {
      this.resultItems = this.resultItems.filter(
        (value) => value.snippet.title.toLowerCase().indexOf(searchWord.toLowerCase()) >= 0,
      );
    } else {
      this.setSearch(this.searchString);
    }
    this.resultSubject$.next(this.resultItems);
  }
}
