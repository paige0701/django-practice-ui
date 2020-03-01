import { NgModule } from '@angular/core';
import {CommonModule, PathLocationStrategy} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {QuestionsComponent} from './questions.component';
import {QuestionsService} from './questions.service';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { QuestionResultComponent } from './question-result/question-result.component';


const questionsRoutes: Routes = [
  { path: '', component: QuestionsComponent },
  { path: ':id', component: QuestionDetailComponent },
  { path: ':id/result', component: QuestionResultComponent },
];
@NgModule({
  declarations: [QuestionsComponent, QuestionDetailComponent, QuestionResultComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(questionsRoutes)
  ],
  providers: [QuestionsService, PathLocationStrategy],
  exports: [RouterModule],
})
export class QuestionsModule { }
