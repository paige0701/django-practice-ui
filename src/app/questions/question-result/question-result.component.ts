import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionsService} from '../questions.service';
import {iQuestion} from '../question-detail/question-detail.component';
import {Location} from '@angular/common';

@Component({
  selector: 'app-question-result',
  templateUrl: './question-result.component.html',
  styleUrls: ['./question-result.component.css']
})
export class QuestionResultComponent implements OnInit {

  question : iQuestion;
  questionId: number;

  constructor(private activatedRoute: ActivatedRoute,
              private questionsService: QuestionsService,
              private location: Location) {

    this.activatedRoute.params.subscribe((result) => {
      try {
        this.questionId = result['id'];
        this.questionsService.getQuestionResult(this.questionId).subscribe((result) => {
          this.question = result
        })
      } catch (e) {
        console.error('fetch id error');
      }

    })
  }

  ngOnInit(): void {
  }

  onClickBack() {
    this.location.back()
  }


}
