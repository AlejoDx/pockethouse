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
import { CasaUnoComponent } from './main/casas/casa-uno/casa-uno.component';
import { CasaDosComponent } from './main/casas/casa-dos/casa-dos.component';
import { FormsModule } from '@angular/forms';
import { TempComponent } from './main/temp/temp.component';
import { OptionsMenuHouseComponent } from './components/options-menu-house/options-menu-house.component';
import { HeaderComponent } from './components/header/header.component';
import { TabsComponent } from './components/tabs/tabs.component';


@NgModule({
  declarations: [

    MainComponent,
    HomeComponent,
    MainAdminComponent,
    HomeAdminComponent,
    ProfileComponent,
    CasaUnoComponent,
    CasaDosComponent,
    TempComponent,
    OptionsMenuHouseComponent,
    HeaderComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
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
