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
import { TempComponent } from './main/temp/temp.component';


// Rutas para los componentes del main
const routes: Routes = [
  {
    path:'',component:MainComponent,
    canActivate:[USerRoleGuard],
    children:[
      {path:'home',component:HomeComponent},
      {path:'casa1',component:CasaUnoComponent}
    ]
  },
  {
    path: 'temperatura',
    component: TempComponent

  },
  {
    path:'admin',component:MainAdminComponent,
    canActivate:[AdminRoleGuard],

    children:[
      {path:'',component:HomeAdminComponent,
      },
      {
        path:'profile',component:ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
