import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { AuthResponse } from '../interfaces/auth-response.interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public base_url = BASE_URL;
  private http = inject(HttpClient);

  public login (credenciales:Auth){

    const url=`${this.base_url}/auth/login`;


    return this.http.post<AuthResponse>(url, credenciales)

  }
}
