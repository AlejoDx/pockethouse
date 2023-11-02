import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';
import { tap } from 'rxjs';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class EnvService  {

  public base_url = BASE_URL;
  public user!: User;
  private http = inject(HttpClient);


  public addEnv(body: any) {

    const url = `${this.base_url}/api/v1/enviroment`;

    return this.http.post<any>(url, body).pipe(
      tap((resp: any) => {
        console.log(resp);
      }
      ));
  }
}


