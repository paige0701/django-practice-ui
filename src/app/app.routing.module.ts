import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './helpers/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  { path: 'dashboard',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule) },
  { path: 'user',
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule) },
  { path: 'questions',
    canActivate: [AuthGuard],
    loadChildren: () => import('./questions/questions.module').then(mod => mod.QuestionsModule) },
  { path: 'language',
    canActivate: [AuthGuard],
    loadChildren: () => import('./language/language.module').then(mod => mod.LanguageModule) },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
