import { Component, OnInit } from '@angular/core';
import DataService from '@app/core/services/data.service';
import { ISearchItem } from 'src/app/youtube/models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent implements OnInit {
  items: Array<ISearchItem> = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.resultSubject$.subscribe((result) => { this.items = result; });
  }
}
