import { Component, inject } from '@angular/core';
import { WeatherService } from 'src/app/pages/services/weather.service';

@Component({
  selector: 'app-irrigation',
  templateUrl: './irrigation.component.html',
  styleUrls: ['./irrigation.component.css']
})
export class IrrigationComponent {
  public indiceUV:string="uv3";
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
  clouds: string ="";

  ngOnInit() {
    this.weatherService.realtime().subscribe((resp: any)=>{
      console.log("Respuesta: " + resp.msg)
      this.temp = resp.data[0].app_temp;
      let uv = resp.data[0].uv;
      if (uv>3){this.indiceUV = "uv2";}
      if (uv>6){this.indiceUV = "uv3";}
      if (uv>8){this.indiceUV = "uv4";}
      if (uv>11){this.indiceUV = "uv5";}
      let cl = resp.data[0].clouds;
      if (cl<=20){this.clouds = "Despejado";}
      if (cl>20){this.clouds = "Parcialmente nublado";}
      if (cl>60){this.clouds = "Mayormente nublado";}
      if (cl>80){this.clouds = "Cielo cubierto";}
    })
  }


  toggleSwitch() {
    this.turnedOff=!this.turnedOff;
  }
  toggleSwitch2() {
    this.turnedOff2=!this.turnedOff2;
  }


}
