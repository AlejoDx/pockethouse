import { Component, OnInit, inject } from '@angular/core';
import { MqttService } from 'src/app/pages/services/mqtt.service';


@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit{

  private mqttService = inject(MqttService);
  activeTab: string = 'comedor';
  tempNow: string = "22 grados";
  loading: boolean = false;

  ngOnInit() {
    this.loading = true;
    this.mqttService.action("9", "LIVE", "1").subscribe((resp: any)=>{
      console.log("Respuesta: " + resp.msg)
      this.tempNow = resp.msg;
      this.loading = false;
      this.changeStateSwitch();
    })
  }




  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  // botones de aire y calefaccion
  public SwitchOnOff: boolean = true;
  public backgroundColor: string = '#F8F8F8'; // Color de fondo predeterminado

  public turnedOff: boolean = false;
  public tempP: boolean = false;


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
