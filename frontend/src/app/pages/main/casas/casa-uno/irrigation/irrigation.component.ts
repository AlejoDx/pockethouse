import { Component, inject } from '@angular/core';
import { WeatherService } from 'src/app/pages/services/weather.service';

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

  private weatherService = inject(WeatherService);
  public turnedOff: boolean = false;
  public turnedOff2: boolean = false
  temp: String ="";

  ngOnInit() {
    this.weatherService.realtime().subscribe((resp: any)=>{
      console.log("Respuesta: " + resp.msg)
      this.temp = resp.data[0].app_temp;
    })
  }


  toggleSwitch() {
    this.turnedOff=!this.turnedOff;
  }
  toggleSwitch2() {
    this.turnedOff2=!this.turnedOff2;
  }


}
