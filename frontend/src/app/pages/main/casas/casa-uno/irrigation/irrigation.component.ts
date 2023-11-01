import { Component } from '@angular/core';

@Component({
  selector: 'app-irrigation',
  templateUrl: './irrigation.component.html',
  styleUrls: ['./irrigation.component.css']
})
export class IrrigationComponent {
  public indiceUV:string="uv4";
  activeTab: string = 'patio';
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  public SwitchOnOff: boolean = true;
; // Color de fondo predeterminado

  public turnedOff: boolean = false;
  public turnedOff2: boolean = false



  ngOnInit() {

  }


  toggleSwitch() {
    this.turnedOff=!this.turnedOff;
  }
  toggleSwitch2() {
    this.turnedOff2=!this.turnedOff2;
  }


}
