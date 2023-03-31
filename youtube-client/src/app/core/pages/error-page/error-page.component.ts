import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
})
export default class ErrorPageComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
