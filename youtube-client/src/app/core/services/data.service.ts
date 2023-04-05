import { Injectable } from '@angular/core';
import { ISearchResponse } from '@app/youtube/models/search-response.model';
// import mockData from '@app/shared/mock-data/response.json';
import { ISearchItem } from '@app/youtube/models/search-item.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export default class DataService {
  constructor(private http: HttpClient) {}

  // private data: ISearchResponse = mockData;

  public resultItems: Array<ISearchItem> = [];

  getItems(): Observable<ISearchResponse> {
    return this.http.get<ISearchResponse>('https://www.googleapis.com/youtube/v3/search?key=AIzaSyB8SCq2oQnKRSQb0WiAR-VmfMCWgJVRMho&type=video&part=snippet&maxResults=15&q=js');
  }

  getVideo(videoId: string[]): Observable<ISearchResponse> {
    return this.http.get<ISearchResponse>(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyB8SCq2oQnKRSQb0WiAR-VmfMCWgJVRMho&id=${videoId.join(',')}&part=snippet,statistics`);
  }

  sortDate(direction: string):void {
    // if (direction === 'ASC') {
    //   this.resultItems = this.data.items.sort(
    //     (a, b) => Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt),
    //   );
    // } else {
    //   this.resultItems = this.data.items.sort(
    //     (a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt),
    //   );
    // }
  }

  sortView(direction: string):void {
    // if (direction === 'ASC') {
    //   this.resultItems = this.data.items.sort(
    //     (a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount),
    //   );
    // } else {
    //   this.resultItems = this.data.items.sort(
    //     (a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount),
    //   );
    // }
  }

  sortWord(searchWord: string): void {
    // if (searchWord) {
    //   this.resultItems = this.data.items.filter(
    //     (value) => value.snippet.title.toLowerCase().indexOf(searchWord.toLowerCase()) >= 0,
    //   );
    // } else {
    //   this.resultItems = this.data.items;
    // }
  }

  getCard(id: string): void {
    // return this.data.items.filter((value) => value.id === id)[0];
  }
}
