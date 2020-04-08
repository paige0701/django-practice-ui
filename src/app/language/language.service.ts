import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http: HttpClient) { }

  api: string = `${environment.host}/api/lang/`;

  getWordsByCategory(catetory: number): Observable<any> {
    return this.http.get(`${this.api}${catetory}/`) as Observable<any>
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.api}categories/`) as Observable<any>
  }

  getRecords(): Observable<any> {
    return this.http.get(`${this.api}records/`) as Observable<any>
  }

  createRecord(data): Observable<any> {
    return this.http.post(`${this.api}records/`, {records: data}) as Observable<any>
  }

}
