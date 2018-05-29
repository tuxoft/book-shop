import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';

@Injectable()
export class AuthService {

  isAuthorized: boolean = false;

  isAuthorized$: Observable<boolean>;

  authToken: string = '';

  authToken$: Observable<string>;

  constructor(private keycloakService: KeycloakService) {
    this.isAuthorized$ = Observable.fromPromise(this.keycloakService.isLoggedIn());
    this.isAuthorized$.subscribe(result => this.isAuthorized = result);
    // this.keycloakService.addTokenToHeader
    // this.authToken$.
  }


}
