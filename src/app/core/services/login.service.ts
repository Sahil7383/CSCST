import { endPointConstant } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  CustomerLogin(data: any) {
    return this.http.post(endPointConstant + '/Customer/login', data);
  }
}
