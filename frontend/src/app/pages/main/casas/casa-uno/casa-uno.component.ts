import { Component, inject, OnInit } from '@angular/core';

import { MqttService } from 'src/app/pages/services/mqtt.service';



@Component({
  selector: 'app-casa-uno',
  templateUrl: './casa-uno.component.html',
  styleUrls: ['./casa-uno.component.css']
})
export class CasaUnoComponent implements OnInit{





  public SwitchOnOff: boolean = true;
  public backgroundColor: string = '#F8F8F8'; // Color de fondo predeterminado

  public turnedOff: boolean = false;
  public tempP: boolean = false;
  public loading: boolean = false;
  private mqttService = inject(MqttService);
  ngOnInit() {
    this.changeStateSwitch();
  }
  changeStateSwitch(){
    this.loading = true;
    this.mqttService.action("1", "STATE", "0").subscribe((resp: any)=>{
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
      this.mqttService.action("1", "ACTION", "1").subscribe((resp: any)=>{
        console.log("Respuesta: " + resp.msg)
        this.turnedOff = false;
        this.loading = false;
      })
    } else {
      this.mqttService.action("1", "ACTION", "0").subscribe((resp: any)=>{
        console.log("Respuesta: " + resp.msg)
        this.turnedOff = true;
        this.loading = false;
      })
    }
  }


  tempPage(){
    this.tempP = true;
  }
}
