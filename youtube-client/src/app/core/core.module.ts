import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import SharedModule from '@app/shared/shared.module';
import AuthModule from '@app/auth/auth.module';
import SearchSettingsComponent from './components/search-settings/search-settings.component';
import ErrorPageComponent from './pages/error-page/error-page.component';
import HeaderComponent from './pages/header/header.component';
import DataService from './services/data.service';

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
    SharedModule,
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [DataService],
  bootstrap: [],
})

export default class CoreModule { }
