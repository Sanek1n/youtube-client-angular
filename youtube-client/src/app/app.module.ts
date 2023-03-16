import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppComponent from './app.component';
import HeaderComponent from './header/header/header.component';
import SearchSettingsComponent from './settings/search-settings/search-settings.component';
import SearchResultsComponent from './search/search-results/search-results.component';
import SearchItemComponent from './search/search-item/search-item.component';
import RegistrationComponent from './main/registration/registration.component';
import CreateCardComponent from './main/create-card/create-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchSettingsComponent,
    SearchResultsComponent,
    SearchItemComponent,
    RegistrationComponent,
    CreateCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
