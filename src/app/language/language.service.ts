import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http: HttpClient) { }

  getWordsByCategory(catetory: number): Observable<any> {
    return this.http.get(`${environment.host}/lang/${catetory}/`) as Observable<any>
  }

  getCategories(): Observable<any> {
    return this.http.get(`${environment.host}/lang/categories/`) as Observable<any>
  }

  getRecords(): Observable<any> {
    return this.http.get(`${environment.host}/lang/records/`) as Observable<any>
  }

}
