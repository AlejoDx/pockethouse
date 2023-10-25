import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
// import { HomeComponent } from '../pages/main/home/home.component';


@NgModule({
  declarations: [
    LoginComponent,
    HomePageComponent,
    // HomeComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
     ReactiveFormsModule,SharedModule
  ]
})
export class AuthModule { }
