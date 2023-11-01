import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';
import { tap } from 'rxjs';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class UserService  {

  public base_url = BASE_URL;
  public user!: User;
  private http = inject(HttpClient);


  public authUserDetails() {

    const url = `${this.base_url}/api/v1/client`;

    return this.http.get<any>(url).pipe(
      tap((resp: any) => {
        console.log(resp);
      }
      ),
      );
  }

  public listAllClients() {

    const url = `${this.base_url}/api/v1/client/list`;

    return this.http.get<any>(url).pipe(
      tap((resp: any) => {
        console.log(resp);
      }
      ),
      );
  }


}


