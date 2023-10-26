import { Component, inject, OnInit } from '@angular/core';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { MqttService } from 'src/app/pages/services/mqtt.service';



@Component({
  selector: 'app-casa-uno',
  templateUrl: './casa-uno.component.html',
  styleUrls: ['./casa-uno.component.css']
})
export class CasaUnoComponent implements OnInit{

  ngOnInit() {
    this.mqttService.action("1", "STATE", "0").subscribe((resp: any)=>{
      console.log("Respuesta: " + resp.msg)
      if (resp.msg=="1")
        this.turnedOff= false;
      if (resp.msg=="0")
        this.turnedOff = true;
    })
  }

  public faSun=faSun;
  activeTab: string = 'comedor';
  SwitchOnOff: boolean = true;
  backgroundColor: string = '#F8F8F8'; // Color de fondo predeterminado
  private mqttService = inject(MqttService);
  turnedOff: boolean = false;
  tempP: boolean = false;

  toggleSwitch() {
    if (this.turnedOff){
      this.mqttService.action("1", "ACTION", "1").subscribe((resp: any)=>{
        console.log("Respuesta: " + resp.msg)
        this.turnedOff = false;
      })
    } else {
      this.mqttService.action("1", "ACTION", "0").subscribe((resp: any)=>{
        console.log("Respuesta: " + resp.msg)
        this.turnedOff = true;
      })
    }
  }
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  tempPage(){
    this.tempP = true;
  }
}
