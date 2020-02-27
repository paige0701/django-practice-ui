import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {QuestionsComponent} from './questions.component';


const questionsRoutes: Routes = [
  { path: '', component: QuestionsComponent },
];
@NgModule({
  declarations: [QuestionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(questionsRoutes)
  ]
})
export class QuestionsModule { }
