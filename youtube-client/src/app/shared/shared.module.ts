import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import StatisticComponent from './components/statistic/statistic.component';
import MarkDirective from './directives/mark.directive';

@NgModule({
  declarations: [
    StatisticComponent,
    MarkDirective,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    StatisticComponent,
    MarkDirective,
  ],
})

export default class SharedModule { }
