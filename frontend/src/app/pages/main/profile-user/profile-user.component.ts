import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
public  userDetail:any;
public loading:boolean=true;
private userService= inject (UserService);

constructor() {

}
  ngOnInit(): void {
    this.userService.authUserDetails().subscribe(user=>{

      this.loading=false;
      this.userDetail=user;

    })
  }
}
