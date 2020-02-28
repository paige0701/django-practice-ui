import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionsService} from '../questions.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {

  question;

  constructor(private activatedRoute: ActivatedRoute,
              private questionsService: QuestionsService) {

    this.activatedRoute.params.subscribe((result) => {
      console.info('result ===', result['id'])
        this.questionsService.getQuestionDetail(result['id']).subscribe((result) => {
          this.question = result
        })
    })
  }

  ngOnInit(): void {
  }

}
