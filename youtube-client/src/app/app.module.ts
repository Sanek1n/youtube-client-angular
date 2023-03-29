import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import AppComponent from './app.component';
import AppRoutingModule from './app-routing.module';
import YoutubeModule from './youtube/youtube.module';
import CoreModule from './core/core.module';
import AuthModule from './auth/auth.module';
import SharedModule from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    YoutubeModule,
    CoreModule,
    AuthModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
