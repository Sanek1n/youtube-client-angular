import { Component, OnInit } from '@angular/core';
import DataService from 'src/app/data.service';
import ISearchItem from '../search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  providers: [DataService],
})
export default class SearchResultsComponent implements OnInit {
  items: Array<ISearchItem> | undefined = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.items = this.dataService.getItems();
  }
}
