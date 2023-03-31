import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import LoginComponent from './components/login/login.component';
import RegistrationComponent from './components/registration/registration.component';
import AuthGuard from './guards/auth.guard';
import LoginPageComponent from './pages/login-page/login-page.component';
import AuthService from './services/auth.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
  ],
  exports: [],
  providers: [AuthService, AuthGuard],
  bootstrap: [],
})

export default class AuthModule { }
