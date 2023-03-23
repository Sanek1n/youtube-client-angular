import { Component } from '@angular/core';
import DataService from 'src/app/data.service';
import ISearchItem from './models/search-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService],
})
export default class AppComponent {
  title = 'youtube-client';

  dataItems: Array<ISearchItem> = [];

  constructor(private dataService: DataService) {
  }

  addItem(newItem: ISearchItem[]): void {
    this.dataItems = newItem;
  }
}
