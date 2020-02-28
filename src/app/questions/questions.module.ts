import { NgModule } from '@angular/core';
import {CommonModule, PathLocationStrategy} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {QuestionsComponent} from './questions.component';
import {QuestionsService} from './questions.service';
import { QuestionDetailComponent } from './question-detail/question-detail.component';


const questionsRoutes: Routes = [
  { path: '', component: QuestionsComponent },
  { path: ':id', component: QuestionDetailComponent },
];
@NgModule({
  declarations: [QuestionsComponent, QuestionDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(questionsRoutes)
  ],
  providers: [QuestionsService, PathLocationStrategy],
  exports: [RouterModule],
})
export class QuestionsModule { }
