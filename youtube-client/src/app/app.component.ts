import { Component } from '@angular/core';
import { ISearchItem } from './youtube/models/search-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  title = 'youtube-client';

  dataItems: Array<ISearchItem> = [];

  addItem(newItem: ISearchItem[]): void {
    this.dataItems = newItem;
  }
}
