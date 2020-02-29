import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {PostInterceptor} from './helpers/post.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
  ],
  providers:
    [
      {provide: HTTP_INTERCEPTORS, useClass: PostInterceptor, multi: true},
      CookieService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
