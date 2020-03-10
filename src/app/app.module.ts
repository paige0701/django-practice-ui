import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {PostInterceptor} from './helpers/post.interceptor';
import {FooterComponent} from './common/footer/footer.component';
import {HeaderComponent} from './common/header/header.component';
import {TokenInterceptor} from './helpers/token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,

  ],
  providers:
    [
      {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
      CookieService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
