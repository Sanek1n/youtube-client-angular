import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import SearchResultsComponent from './youtube/pages/search-results/search-results.component';
import LoginPageComponent from './auth/pages/login-page/login-page.component';
import DetailPageComponent from './youtube/pages/detail-page/detail-page.component';
import ErrorPageComponent from './core/pages/error-page/error-page.component';

const routes: Routes = [
  { path: '', component: SearchResultsComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'detail/:id', component: DetailPageComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export default class AppRoutingModule {

}
