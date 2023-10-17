import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';

import { HomeAdminComponent } from './main-admin/home-admin/home-admin.component';
import { HomeComponent } from './main/home/home.component';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    MainAdminComponent,
    HomeAdminComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule
  ],
  providers: [

    /*  */
  ]
})
export class PagesModule { }
