import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import StatisticComponent from './components/statistic/statistic.component';
import MarkDirective from './directives/mark.directive';

@NgModule({
  declarations: [
    StatisticComponent,
    MarkDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    StatisticComponent,
    MarkDirective,
  ],
})

export default class SharedModule { }
