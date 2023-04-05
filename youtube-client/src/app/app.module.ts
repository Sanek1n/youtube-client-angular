import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import AppComponent from './app.component';
import AppRoutingModule from './app-routing.module';
import YoutubeModule from './youtube/youtube.module';
import CoreModule from './core/core.module';
import AuthModule from './auth/auth.module';
import SharedModule from './shared/shared.module';
import AuthGuard from './auth/guards/auth.guard';
import AuthService from './auth/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    YoutubeModule,
    CoreModule,
    AuthModule,
    SharedModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent],
})
export default class AppModule { }
