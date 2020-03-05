import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class PostInterceptor implements HttpInterceptor {

  constructor(private cookieSerive: CookieService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.method.toUpperCase() == 'POST') {
      let csrf = this.cookieSerive.get('csrftoken');
      let sessionId = this.cookieSerive.get('sessionid');
      request = request.clone({
        // setHeaders: {
        //   'X-CSRFToken': csrf,
        //   'credentials': 'include',
        //   'mode': 'same-origin',
        // }
      });
    }
    return next.handle(request);
  }
}
