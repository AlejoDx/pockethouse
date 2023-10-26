import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject, OnInit } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { AuthResponse } from '../interfaces/auth-response.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService  {

  public base_url = BASE_URL;
  public user!: User;
  public loading!: boolean;
  private http = inject(HttpClient);
  private router = inject(Router);
  get token() {
    return localStorage.getItem('token') || '';
  }



  public login(credenciales: Auth) {

    const url = `${this.base_url}/auth/login`;

    return this.http.post<AuthResponse>(url, credenciales).pipe(
      tap((resp: any) => {

        const { token } = resp;

        localStorage.setItem('token', token);
      }

      ));

  }

  public action(deviceId: any, action: any, value: any) {

    const url = `${this.base_url}/api/v1/client/mqtt?deviceId=${deviceId}&action=${action}&value=${value}`;

    console.log("Paso por aca");

    return this.http.post<any>(url, "").pipe(
      tap((resp: any) => {
        const { algo } = resp;
        console.log(resp);
      }

      ));


//    fetch(url, {method: 'POST'})
//      .then((response) => {return response.json()})
  }



  public validateToken():Observable<boolean>{

    const url = `${this.base_url}/auth/refresh-token`;
    const token = localStorage.getItem('token');
    if ( !token ) {

      return of(false);
    }
    const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${ token }`);
    return  this.http.get(url,{headers}).pipe(
      map((resp:any)=>{
        this.loading=false;
        console.log(resp);
        const { token, username, } = resp;
        console.log(username);

        const authority = resp.rol.authority;
        console.log(authority);

        this.user = new User(token, "bearer", username, authority);
        localStorage.setItem('token',token);
        console.log( this.user);

        return true
    }),

    catchError(error=>of(false))
    );

  }
  logOut(){
    localStorage.removeItem("token");
    this.router.navigateByUrl("/auth/login")

  }

}
