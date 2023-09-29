import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import DataService from '@app/core/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ISearchItem } from '@app/youtube/models/search-item.model';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export default class DetailPageComponent implements OnInit {
  constructor(
    private location: Location,
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  selectedId = '';

  card!: ISearchItem;

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
    this.selectedId = this.route.snapshot.url[1].path;
    this.dataService.getVideo([this.selectedId])
      .subscribe((result) => { [this.card] = result.items; });
  }
}
