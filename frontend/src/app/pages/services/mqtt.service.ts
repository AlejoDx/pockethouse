import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';
import { tap } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService  {

  public base_url = BASE_URL;
  public user!: User;
  public loading!:boolean;
  private http = inject(HttpClient);

  public action(deviceId: any, action: any, value: any) {

    const url = `${this.base_url}/api/v1/client/mqtt?deviceId=${deviceId}&action=${action}&value=${value}`;

    console.log("Paso por aca");

    return this.http.post<any>(url, "").pipe(
      tap((resp: any) => {
        const { algo } = resp;
        console.log(resp);
      }
      ));
  }
}
