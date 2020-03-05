import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  checkDuplicate(key: string, value: string): Observable<boolean> {
    return this.http.get(`${environment.host}/user/${key}/${value}/duplicate`) as Observable<boolean>
  }
}
