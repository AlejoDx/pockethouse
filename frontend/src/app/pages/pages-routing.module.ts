import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';

import { HomeAdminComponent } from './main-admin/home-admin/home-admin.component';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { AdminRoleGuard } from '../guards/admin-role.guard';
import { USerRoleGuard } from '../guards/user-role.guard';
import { ProfileComponent } from './main-admin/profile/profile.component';
import { CasaDosComponent } from './main/casas/casa-dos/casa-dos.component';
import { CasaUnoComponent } from './main/casas/casa-uno/casa-uno.component';

import { SecurityComponent } from './main/casas/casa-uno/security/security.component';
import { TempComponent } from './main/casas/casa-uno/temp/temp.component';
import { IrrigationComponent } from './main/casas/casa-uno/irrigation/irrigation.component';
import { AlarmComponent } from './main/casas/casa-uno/alarm/alarm.component';
import { RegisterCustomerComponent } from './main-admin/register-customer/register-customer.component';
import { ProfileUserComponent } from './main/profile-user/profile-user.component';
import { MetricaComponent } from './main/casas/casa-uno/metrica/metrica.component';
import { CustomersComponent } from './main-admin/customers/customers.component';
import { DevicesComponent } from './main-admin/devices/devices.component';



// Rutas para los componentes del main
const routes: Routes = [
  {
    path:'',component:MainComponent,
    canActivate:[USerRoleGuard],
    children:[
      {path:'home',component:HomeComponent},
      {
        path:'profile',component:ProfileUserComponent
      },
      {path:'casa1',component:CasaUnoComponent},
      {
        path: 'temperatura',
        component: TempComponent

      },
      {
        path: 'security',
        loadChildren : () => import('./main/casas/casa-uno/security/security.module').then(m=> m.SecurityModule)

      },
      {
        path:'riego',
        component:IrrigationComponent
      },
      {
        path:'alarma',
        component:AlarmComponent
      }
      ,{
        path: 'metrica',
        component: MetricaComponent
      }

    ]
  },

  {
    path:'admin',component:MainAdminComponent,
    canActivate:[AdminRoleGuard],

    children:[
      {path:'',component:HomeAdminComponent,
      },
      {
        path:'profile',component:ProfileComponent
      },
      {
        path:'customers',component:CustomersComponent
      },
      {
        path:'registerCustomer',component:RegisterCustomerComponent
      }
      ,
      {
        path:'devices',component:DevicesComponent
      }
      ,
      {
        path:'installs',component:DevicesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
