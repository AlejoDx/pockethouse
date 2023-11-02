import { Component, DoCheck, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'options-menu-house',
  templateUrl: './options-menu-house.component.html',
  styleUrls: ['./options-menu-house.component.css']
})
export class OptionsMenuHouseComponent {

  @Input() activeOption!: string ;
  newOption!:string;
  private router = inject(Router);



}
