import { Component, EventEmitter, Output } from '@angular/core';
import { ISortSetting } from 'src/app/youtube/models/sort-settings.model';

@Component({
  selector: 'app-search-settings',
  templateUrl: './search-settings.component.html',
  styleUrls: ['./search-settings.component.scss'],
})
export default class SearchSettingsComponent {
  sortSettings: ISortSetting;

  @Output() sortDate = new EventEmitter<string>();

  @Output() sortView = new EventEmitter<string>();

  @Output() sortWord = new EventEmitter<string>();

  constructor() {
    this.sortSettings = { date: 'ASC', view: 'ASC' };
  }

  sortByDate():void {
    if (this.sortSettings.date === 'ASC') {
      this.sortDate.emit('ASC');
      this.sortSettings.date = 'DESC';
    } else {
      this.sortDate.emit('DESC');
      this.sortSettings.date = 'ASC';
    }
  }

  sortByView():void {
    if (this.sortSettings.view === 'ASC') {
      this.sortView.emit('ASC');
      this.sortSettings.view = 'DESC';
    } else {
      this.sortView.emit('DESC');
      this.sortSettings.view = 'ASC';
    }
  }

  sortByWord(word: string):void {
    this.sortWord.emit(word);
  }
}
