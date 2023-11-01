import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BASE_URL } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public base_url = BASE_URL;

  public user!: User;
  private http = inject(HttpClient);

  constructor() { }
  public list() {

    const url = `${this.base_url}/api/v1/client/list`;

    return this.http.get<any>(url);
  }
}
