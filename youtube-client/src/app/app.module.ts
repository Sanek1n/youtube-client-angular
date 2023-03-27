import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import AppComponent from './app.component';
import HeaderComponent from './core/pages/header/header.component';
import SearchSettingsComponent from './core/components/search-settings/search-settings.component';
import SearchResultsComponent from './youtube/components/search-results/search-results.component';
import SearchItemComponent from './youtube/components/search-item/search-item.component';
import RegistrationComponent from './auth/components/registration/registration.component';
import CreateCardComponent from './youtube/components/create-card/create-card.component';
import MarkDirective from './shared/directives/mark.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchSettingsComponent,
    SearchResultsComponent,
    SearchItemComponent,
    RegistrationComponent,
    CreateCardComponent,
    MarkDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
