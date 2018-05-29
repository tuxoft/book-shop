import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { KeycloakService } from 'keycloak-angular';
import { AuthService } from './auth-service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public keycloakService: KeycloakService, private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.isAuthorized$.mergeMap((result) => {
      if (result) {
        return this.keycloakService
        .addTokenToHeader(request.headers)
        .mergeMap((headersWithBearer) => {
          const kcReq = request.clone({ headers: headersWithBearer });
          return next.handle(kcReq);
        });
      }

      return next.handle(request);
    });
  }
}
