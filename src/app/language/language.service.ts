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

  getWordOfTheDay(): Observable<any> {
    return this.http.get(`${this.api}word/`) as Observable<any>
  }

  getWordsByCategory(category: number): Observable<any> {
    return this.http.get(`${this.api}${category}/`) as Observable<any>
  }

  getCategories(page_size=5, page: number=1, search_text?:string): Observable<any> {

    let api = `${this.api}categories/?page_size=${page_size}`;

    if (page !== 1) {
      api += `&page=${page}`;
    }

    if (search_text) {
      api += `&search_text=${search_text}`;
    }

    return this.http.get(api) as Observable<any>
  }

  getRecords(page_size=5, search_text?:string): Observable<any> {

    let api = `${this.api}records/?page_size=${page_size}`;

    if (search_text) {
      api += `&search_text=${search_text}`;
    }

    return this.http.get(api) as Observable<any>
  }

  createRecord(data): Observable<any> {
    return this.http.post(`${this.api}records/`, {records: data}) as Observable<any>
  }

}
