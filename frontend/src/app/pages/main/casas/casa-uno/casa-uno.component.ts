import { Component, inject, OnInit } from '@angular/core';

import { MqttService } from 'src/app/pages/services/mqtt.service';

import { TabsComponent } from 'src/app/pages/components/tabs/tabs.component';

@Component({
  selector: 'app-casa-uno',
  templateUrl: './casa-uno.component.html',
  styleUrls: ['./casa-uno.component.css']
})
export class CasaUnoComponent implements OnInit{

  public SwitchOnOff: boolean = true;
  public backgroundColor: string = '#F8F8F8'; // Color de fondo predeterminado
  activeTab: string = 'comedor';
  public turnedOff: boolean = false;
  public tempP: boolean = false;
  public loading: boolean = false;
  private mqttService = inject(MqttService);
  private activeDevice: string = "";

  ngOnInit() {
    this.changeStateSwitch();
  }

  changeStateSwitch(){
    this.loading = true;
    if (this.activeTab=="comedor"){this.activeDevice="1"}
    if (this.activeTab=="cochera"){this.activeDevice="8"}
    this.mqttService.action(this.activeDevice, "STATE", "0").subscribe((resp: any)=>{
      console.log("Respuesta: " + resp.msg)
      if (resp.msg=="1")
        this.turnedOff= false;
        this.loading = false;
        if (resp.msg=="0")
        this.turnedOff = true;
        this.loading = false;
      })
  }
  toggleSwitch() {
    this.loading = true;
    if (this.turnedOff){
      this.mqttService.action(this.activeDevice, "ACTION", "1").subscribe((resp: any)=>{
        console.log("Respuesta: " + resp.msg)
        this.turnedOff = false;
        this.loading = false;
      })
    } else {
      this.mqttService.action(this.activeDevice, "ACTION", "0").subscribe((resp: any)=>{
        console.log("Respuesta: " + resp.msg)
        this.turnedOff = true;
        this.loading = false;
      })
    }
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.ngOnInit();
  }
}
