import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from './language.component';
import {RouterModule, Routes} from '@angular/router';



const languageRoutes: Routes = [
  { path: '', component: LanguageComponent },
];
@NgModule({
  declarations: [LanguageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(languageRoutes)
  ]
})
export class LanguageModule { }
