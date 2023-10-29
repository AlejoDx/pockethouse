import {  Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from './security.component';
import { YardComponent } from './places/yard/yard.component';
import { DiningRoomComponent } from './places/dining-room/dining-room.component';

const routes: Routes = [
  {path:'',component:SecurityComponent
  ,children:[
    {
      path:'',component:DiningRoomComponent
    },
    {
      path:"yard",component:YardComponent
    }
  ]
},
{
  path: '**',
  redirectTo: 'dinning-room',
  pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
