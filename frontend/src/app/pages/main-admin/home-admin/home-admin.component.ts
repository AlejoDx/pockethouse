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
  clients: any[] = [];
  houses: any[] = [];
  userDetails: any = "";
  devices: Number=0;
  houseDetails: any[] = [];
  loading: boolean = false;

  ngOnInit(): void {
    this.loading = true;
    this.houseService.list().subscribe((resp: any)=>{
      this.houses = resp;
    })
    this.userService.listAllClients().subscribe((resp: any)=>{
      this.clients = resp;
      this.loading = false;
    })
    this.userService.authUserDetails().subscribe((resp: any)=>{
      this.userDetails = resp;
    })
  }

  public deviceCount(casa: any){
    this.devices = 0;
    casa.environments.forEach((env:any) => {
        this.devices += env.devices.length;
      });
    return this.devices;
  }


}
