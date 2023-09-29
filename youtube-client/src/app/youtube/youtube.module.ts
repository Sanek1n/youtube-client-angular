import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import SharedModule from '@app/shared/shared.module';
import CreateCardComponent from './components/create-card/create-card.component';
import SearchItemComponent from './components/search-item/search-item.component';
import SearchResultsComponent from './components/search-results/search-results.component';
import DetailPageComponent from './pages/detail-page/detail-page.component';
import MainPageComponent from './pages/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'detail/:id', component: DetailPageComponent },
];

@NgModule({
  declarations: [
    CreateCardComponent,
    SearchItemComponent,
    SearchResultsComponent,
    DetailPageComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatInputModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
  bootstrap: [MainPageComponent],
})
export default class YoutubeModule { }
