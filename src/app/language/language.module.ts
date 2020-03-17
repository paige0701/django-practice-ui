import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from './language.component';
import {RouterModule, Routes} from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { NewRecordComponent } from './new-record/new-record.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';



const languageRoutes: Routes = [
  { path: '', component: LanguageComponent },
  { path: 'record/:id', component: CategoryComponent },
  { path: 'create', component: NewRecordComponent },
];
@NgModule({
  declarations: [LanguageComponent, CategoryComponent, NewRecordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(languageRoutes),
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatInputModule
  ]
})
export class LanguageModule { }
