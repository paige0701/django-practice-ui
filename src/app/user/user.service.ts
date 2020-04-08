import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  api: string = `${environment.host}/api/`;

  checkDuplicate(key: string, value: string): Observable<boolean> {
    return this.http.get(`${this.api}user/${key}/${value}/duplicate`) as Observable<boolean>
  }

  loginUser(email: string, password: string): Observable<any> {
    return this.http.post(`${this.api}account/login/`, {email, password}) as Observable<any>
  }

  createUser(email: string, password: string, fullname: string): Observable<any> {
    return this.http.post(`${this.api}account/create/`, {email, password, fullname}) as Observable<any>
  }
}
