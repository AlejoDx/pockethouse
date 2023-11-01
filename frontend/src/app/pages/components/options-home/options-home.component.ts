import { Component, Input, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-options-home',
  templateUrl: './options-home.component.html',
  styleUrls: ['./options-home.component.css']
})
export class OptionsHomeComponent {
  @Input()activeOption:string="home";
  private  authService=inject(AuthService);
  logout(){
    this.authService.logOut();
  }
}
