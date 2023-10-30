import { Component, OnInit, inject } from '@angular/core';
import { HouseService } from 'src/app/pages/services/house.service'
import { UserService } from 'src/app/pages/services/user.service'

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit{

  private houseService = inject(HouseService);
  private userService = inject(UserService);
  casas: any[] = [];
  userDetails: any = "";
  linkImagen: String="";

  ngOnInit(): void {
    this.houseService.list().subscribe((resp: any)=>{
      console.log("Respuesta: " + resp[0].address)
      this.casas = resp;
    })
    this.userService.authUserDetails().subscribe((resp: any)=>{
      console.log("Respuesta: " + resp)
      this.userDetails = resp;
      this.linkImagen = "https://w7.pngwing.com/pngs/415/765/png-transparent-user-profile-linkedin-netwerk-money-order-fulfillment-round-face-saving-expert-moustache.png";
    })
  }

  users : String[] = ["hola", "chau"];



}
