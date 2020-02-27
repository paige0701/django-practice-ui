import { Component, OnInit } from '@angular/core';
import {QuestionsService} from './questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.questionsService.getQuestions().subscribe((result) => {
      console.info('result -- ', result)
    })
  }

}
