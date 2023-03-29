import { Component, Input } from '@angular/core';
import { ISearchItem } from 'src/app/youtube/models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent {
  @Input()
    items: Array<ISearchItem> = [];
}
