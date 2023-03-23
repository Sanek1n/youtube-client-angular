import { Component, Output, EventEmitter } from '@angular/core';
import DataService from 'src/app/data.service';
import ISearchItem from 'src/app/models/search-item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  @Output() newDataEvent = new EventEmitter<ISearchItem[]>();

  searchSettings = false;

  constructor(private dataService: DataService) {
  }

  toggleSettings():void {
    this.searchSettings = !this.searchSettings;
  }

  getData(): void {
    this.newDataEvent.emit(this.dataService.getItems());
  }
}
