///<reference path="../../../node_modules/@angular/core/core.d.ts"/>
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: "root"
})
export class QuestionsService {

  constructor(private http: HttpClient) { }
  api: string = 'http://localhost:8000/api';

  getQuestions(): Observable<any> {
    return this.http.get(this.api + '/polls/') as Observable<any>
  }

  getQuestionDetail(id: number): Observable<any> {
    return this.http.get(this.api + `/polls/${id}/` ) as Observable<any>
  }

  getQuestionResult(id: number): Observable<any> {
    return this.http.get(this.api + `/polls/${id}/results/`) as Observable<any>
  }

  voteQuestion(questionId: number, choiceId: number): Observable<any> {
    return this.http.post(this.api + `/polls/${questionId}/vote/`, {'choice': choiceId} )  as Observable<any>
  }

}
