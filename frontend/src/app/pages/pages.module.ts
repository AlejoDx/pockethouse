import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';

import { HomeAdminComponent } from './main-admin/home-admin/home-admin.component';
import { HomeComponent } from './main/home/home.component';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileComponent } from './main-admin/profile/profile.component';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    MainAdminComponent,
    HomeAdminComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    SharedModule,
    FontAwesomeModule
  ],
  providers: [

    /*  */
  ]
})
export class PagesModule { }
