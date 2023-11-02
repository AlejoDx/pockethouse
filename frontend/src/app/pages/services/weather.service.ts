import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';
import { tap } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class WeatherService  {

  public base_url = BASE_URL;
  public user!: User;
  private http = inject(HttpClient);
 
  public realtime() {

    const url ='https://api.weatherbit.io/v2.0/current?key=95b4709b7a0a49b18b3fbe701df86ab4&lat=-38.018473&lon=-57.563040';

    return this.http.get<any>(url).pipe(
      tap((resp: any) => {
        console.log("Clima: " + resp.data[0]);
      }
      ),
      );
  }

}
