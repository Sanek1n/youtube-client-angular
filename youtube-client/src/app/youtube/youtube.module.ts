import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import SharedModule from '@app/shared/shared.module';
import CreateCardComponent from './components/create-card/create-card.component';
import SearchItemComponent from './components/search-item/search-item.component';
import SearchResultsComponent from './components/search-results/search-results.component';
import DetailPageComponent from './pages/detail-page/detail-page.component';
import MainPageComponent from './pages/main-page/main-page.component';

@NgModule({
  declarations: [
    CreateCardComponent,
    SearchItemComponent,
    SearchResultsComponent,
    DetailPageComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [],
})
export default class YoutubeModule { }
