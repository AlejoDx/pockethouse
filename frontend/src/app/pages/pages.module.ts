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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OptionsMenuHouseComponent } from './components/options-menu-house/options-menu-house.component';
import { HeaderComponent } from './components/header/header.component';
import { TabsComponent } from './components/tabs/tabs.component';

import { SecurityComponent } from './main/casas/casa-uno/security/security.component';
import { TempComponent } from './main/casas/casa-uno/temp/temp.component';
import { SecurityModule } from './main/casas/casa-uno/security/security.module';
import { IrrigationComponent } from './main/casas/casa-uno/irrigation/irrigation.component';
import { AlarmComponent } from './main/casas/casa-uno/alarm/alarm.component';
import { MetricaComponent } from './main/casas/casa-uno/metrica/metrica.component';
import { RegisterCustomerComponent } from './main-admin/register-customer/register-customer.component';
import { ProfileUserComponent } from './main/profile-user/profile-user.component';
import { OptionsHomeComponent } from './components/options-home/options-home.component';
import { CustomersComponent } from './main-admin/customers/customers.component';
import { DevicesComponent } from './main-admin/devices/devices.component';
import { InstallsComponent } from './main-admin/installs/installs.component';


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
    TabsComponent,
    IrrigationComponent,
    AlarmComponent,
    MetricaComponent,
    RegisterCustomerComponent,
    ProfileUserComponent,
    OptionsHomeComponent,
    CustomersComponent,
    DevicesComponent,
    InstallsComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,

    FontAwesomeModule
  ],
  exports:[
    OptionsMenuHouseComponent,
    HeaderComponent,
    TabsComponent
  ],
  providers: [

    /*  */
  ]
})
export class PagesModule { }
