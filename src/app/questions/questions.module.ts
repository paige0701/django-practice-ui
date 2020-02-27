import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {QuestionsComponent} from './questions.component';
import {QuestionsService} from './questions.service';
import {HttpClientModule} from '@angular/common/http';


const questionsRoutes: Routes = [
  { path: '', component: QuestionsComponent },
];
@NgModule({
  declarations: [QuestionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(questionsRoutes)
  ],
  providers: [QuestionsService]
})
export class QuestionsModule { }
