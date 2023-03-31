import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import LoginPageComponent from './auth/pages/login-page/login-page.component';
import DetailPageComponent from './youtube/pages/detail-page/detail-page.component';
import ErrorPageComponent from './core/pages/error-page/error-page.component';
import MainPageComponent from './youtube/pages/main-page/main-page.component';
import AuthGuard from './auth/guards/auth.guard';

const routes: Routes = [
  { path: 'auth', component: LoginPageComponent },
  {
    path: '',
    component: MainPageComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'detail/:id',
    component: DetailPageComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: '**',
    component: ErrorPageComponent,
    canActivate: [AuthGuard],
  },
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
