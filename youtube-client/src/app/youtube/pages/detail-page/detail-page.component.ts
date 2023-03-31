import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export default class DetailPageComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
