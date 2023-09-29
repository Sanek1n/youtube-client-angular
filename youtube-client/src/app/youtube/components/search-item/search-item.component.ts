import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ISearchItem } from '@app/youtube/models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent {
  @Input()
    cardData!: ISearchItem;

  constructor(private router: Router) {}

  loadCard(): void {
    this.router.navigate(['detail', this.cardData.id]);
  }
}
