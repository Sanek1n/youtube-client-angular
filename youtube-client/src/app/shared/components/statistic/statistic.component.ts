import { Component, Input } from '@angular/core';
import { IStatistics } from '@app/youtube/models/search-item.model';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export default class StatisticComponent {
  @Input()
    statData!: IStatistics;
}
