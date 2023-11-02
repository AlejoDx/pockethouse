import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { YardComponent } from './places/yard/yard.component';
import { SecurityComponent } from './security.component';
import { PagesModule } from 'src/app/pages/pages.module';
import { RouterModule } from '@angular/router';
import { DiningRoomComponent } from './places/dining-room/dining-room.component';


@NgModule({
  declarations: [
    YardComponent
    ,SecurityComponent, DiningRoomComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    PagesModule

  ],
  exports:[
    YardComponent,
    SecurityComponent
  ]
})
export class SecurityModule { }
