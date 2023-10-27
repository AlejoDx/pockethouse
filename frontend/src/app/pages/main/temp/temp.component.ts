import { Component, OnInit, inject } from '@angular/core';
import { MqttService } from 'src/app/pages/services/mqtt.service';


@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit{
  
  private mqttService = inject(MqttService);

  ngOnInit() {
    this.loading = true;
    this.mqttService.action("6", "LIVE", "1").subscribe((resp: any)=>{
      console.log("Respuesta: " + resp.msg)
      this.tempNow = resp.msg;
      this.loading = false;
    })
  }

  
  activeTab: string = 'comedor';
  tempNow: string = "22 grados";
  loading: boolean = false;


  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

}
