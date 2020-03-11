import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from './language.component';
import {RouterModule, Routes} from '@angular/router';
import { CategoryComponent } from './category/category.component';



const languageRoutes: Routes = [
  { path: '', component: LanguageComponent },
  { path: ':id', component: CategoryComponent },
];
@NgModule({
  declarations: [LanguageComponent, CategoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(languageRoutes)
  ]
})
export class LanguageModule { }
