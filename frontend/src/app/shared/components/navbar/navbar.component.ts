import { Component, inject } from '@angular/core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/pages/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
public faHouse=faHouse;
private authService= inject(AuthService);
logout(){
this.authService.logOut();
}

}
