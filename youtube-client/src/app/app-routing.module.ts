import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import ErrorPageComponent from './core/pages/error-page/error-page.component';
import AuthGuard from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then((AuthModule) => AuthModule),
  },
  {
    path: '',
    loadChildren: () => import('./youtube/youtube.module')
      .then((YoutubeModule) => YoutubeModule),
    canActivate: [AuthGuard],
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
