import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import LoginComponent from './components/login/login.component';
import RegistrationComponent from './components/registration/registration.component';
import LoginPageComponent from './pages/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
];

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
  bootstrap: [LoginPageComponent],
})

export default class AuthModule { }
