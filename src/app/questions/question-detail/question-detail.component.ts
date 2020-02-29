import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionsService} from '../questions.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {

  question: iQuestion;
  questionId: number;
  selectedChoiceId: number;

  constructor(private activatedRoute: ActivatedRoute,
              private questionsService: QuestionsService) {

    this.activatedRoute.params.subscribe((result) => {
      try {
        this.questionId = result['id'];
        this.questionsService.getQuestionDetail(this.questionId).subscribe((result) => {
          this.question = result
        })
      } catch (e) {
        console.error('fetch id error');
      }

    })
  }

  ngOnInit(): void {
  }

  onChangeRadio(data) {
    this.selectedChoiceId = data.id;
  }

  onClickSubmit() {
    if (!this.selectedChoiceId) {
      return;
    }

    // vote
    this.questionsService.voteQuestion(this.questionId, this.selectedChoiceId).subscribe((result) => {
      console.info(result)
    })

  }

}

interface iQuestion {
  question : string
  choices: {id: string, choice_text: string}[]
}
