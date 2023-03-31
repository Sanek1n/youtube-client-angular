import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import AuthModule from '@app/auth/auth.module';
import SearchSettingsComponent from './components/search-settings/search-settings.component';
import ErrorPageComponent from './pages/error-page/error-page.component';
import HeaderComponent from './pages/header/header.component';

@NgModule({
  declarations: [
    SearchSettingsComponent,
    ErrorPageComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    AuthModule,
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [],
  bootstrap: [],
})

export default class CoreModule { }
