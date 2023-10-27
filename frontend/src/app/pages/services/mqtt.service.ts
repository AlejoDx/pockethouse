import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';
import { Observable, catchError, tap } from 'rxjs';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class MqttService  {

  public base_url = BASE_URL;
  public user!: User;
  private http = inject(HttpClient);
  private loading: boolean = false;
  authService = inject(AuthService);
  
  public action(deviceId: any, action: any, value: any):Observable<any> {

    // this.authService.loading = true;
    const url = `${this.base_url}/api/v1/client/mqtt?deviceId=${deviceId}&action=${action}&value=${value}`;

    return this.http.post<any>(url, "").pipe(
      tap((resp: any) => {
        const { algo } = resp;
        console.log(resp);
        // this.authService.loading = false;
      }
      ),
      catchError(this.handleError()

      ));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      this.authService.loading = false;
      console.error("JEB Error:" + error); // log to console instead
      return new Observable;
    };
  }
}
