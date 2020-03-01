import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionsService} from '../questions.service';
import {iQuestion} from '../question-detail/question-detail.component';

@Component({
  selector: 'app-question-result',
  templateUrl: './question-result.component.html',
  styleUrls: ['./question-result.component.css']
})
export class QuestionResultComponent implements OnInit {

  question : iQuestion;

  constructor(private activatedRoute: ActivatedRoute,
              private questionsService: QuestionsService) {

    this.activatedRoute.params.subscribe((result) => {
      try {
        this.questionsService.getQuestionResult(result['id']).subscribe((result) => {
          this.question = result
        })
      } catch (e) {
        console.error('fetch id error');
      }

    })
  }

  ngOnInit(): void {
  }

}
