import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  { path: 'dashboard',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule) },
  { path: 'login',
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule) },
  { path: 'questions',
    loadChildren: () => import('./questions/questions.module').then(mod => mod.QuestionsModule) },
  { path: 'language',
    loadChildren: () => import('./language/language.module').then(mod => mod.LanguageModule) },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
