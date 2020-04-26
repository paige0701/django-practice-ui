import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from './language.component';
import {RouterModule, Routes} from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { NewRecordComponent } from './new-record/new-record.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import {DetailNavComponent} from '../common/detail-nav/detail-nav.component';
import { RecordComponent } from './record/record.component';
import { RecoredDetailComponent } from './record/recored-detail/recored-detail.component';
import {NgxPaginationModule} from 'ngx-pagination';



const languageRoutes: Routes = [
  { path: '', component: LanguageComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'categories/:id', component: CategoryDetailComponent },
  { path: 'records', component: RecordComponent },
  { path: 'records/:id', component: RecoredDetailComponent},
  { path: 'create', component: NewRecordComponent },
];
@NgModule({
  declarations: [LanguageComponent, CategoryComponent, NewRecordComponent, CategoryDetailComponent, DetailNavComponent, RecordComponent, RecoredDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(languageRoutes),
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    NgxPaginationModule
  ]
})
export class LanguageModule { }
