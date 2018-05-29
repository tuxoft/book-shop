import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent implements OnInit {

  constructor(private router: Router, private keycloakService: KeycloakService) { }

  // isLogged: boolean = false;
  isLogged: Observable<boolean>;

  ngOnInit() {
    this.isLogged = Observable.fromPromise(this.keycloakService.isLoggedIn()
      .then(result => result));
  }

  isAdminPanel(): boolean {
    return this.router.url.indexOf('/admin') === 0;
  }

  isAvailableAdminPanel() {
    try {
      if (this.keycloakService.getUserRoles()
        .find((value, index, obj) =>
        { return value === 'Content manager'; })) {
        return !this.isAdminPanel();
      }

      return false;
    } catch (e) {
      return false;
    }
  }

  redirectToAdminPanel() {
    this.router.navigate(['/admin']);
  }

  redirectToMain() {
    this.router.navigate(['/']);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLogged;
  }

  getUserName(): string {
    return this.keycloakService.getUsername();
  }

  logout() {
    this.keycloakService.logout();
  }

  login() {
    this.keycloakService.login();
  }
}
