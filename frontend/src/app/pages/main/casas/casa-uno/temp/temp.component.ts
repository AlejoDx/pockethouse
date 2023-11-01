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
  activeDevice: string = "";
  tempDisp:number = 19;

  ngOnInit() {
    this.loading = true;
    if (this.activeTab=="comedor"){this.activeDevice="9"}
    if (this.activeTab=="habitacion"){this.activeDevice="6"}
    this.mqttService.action(this.activeDevice, "LIVE", "1").subscribe((resp: any)=>{
      console.log("Respuesta: " + resp.msg)
      this.tempNow = resp.msg;
      this.loading = false;
    })
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.ngOnInit();
  }

  tempSum(){
    console.log("Sumando")
    this.tempDisp += 1;
  }

  tempRes(){
    console.log("Sumando")
    this.tempDisp -= 1;
  }

  // botones de aire y calefaccion
  public SwitchOnOff: boolean = true;
  public backgroundColor: string = '#F8F8F8'; // Color de fondo predeterminado

  public turnedOff: boolean = false;
  public tempP: boolean = false;
}
