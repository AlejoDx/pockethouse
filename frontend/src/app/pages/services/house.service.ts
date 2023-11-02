import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';
import { Observable, catchError, tap } from 'rxjs';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class HouseService  {

  public base_url = BASE_URL;
  public user!: User;
  private http = inject(HttpClient);
 
  public list() {

    const url = `${this.base_url}/api/v1/house/getAll`;

    return this.http.get<any>(url).pipe(
      tap((resp: any) => {
        console.log(resp);
      }
      ),
      );
  }

}
