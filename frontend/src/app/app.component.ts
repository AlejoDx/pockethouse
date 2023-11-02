import { Component, DoCheck, OnInit, inject } from '@angular/core';
import { AuthService } from './pages/services/auth.service';
import { MqttService } from './pages/services/mqtt.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck,OnInit {


  private authService=inject(AuthService);

  public loading=false;

  ngOnInit(): void {
    this.loading=false;
  }
ngDoCheck(): void {
  this.loading=this.authService.loading;
}
}
