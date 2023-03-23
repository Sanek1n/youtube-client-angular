import { Component, Output, EventEmitter } from '@angular/core';
import ISearchItem from 'src/app/models/search-item.model';
import { ISearchResponse } from '../../models/search-response.model';
import mockData from '../../mock-data/response.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  @Output() newDataEvent = new EventEmitter<ISearchItem[]>();

  searchSettings = false;

  private data: ISearchResponse = mockData;

  toggleSettings():void {
    this.searchSettings = !this.searchSettings;
  }

  getData(): void {
    this.newDataEvent.emit(this.data.items);
  }
}
