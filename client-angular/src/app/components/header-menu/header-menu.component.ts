import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth-service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent implements OnInit {

  constructor(private router: Router,
              private keycloakService: KeycloakService,
              private authService: AuthService) { }

  isLogged: Observable<boolean>;

  @ViewChild('op')
  overlayPanel;

  ngOnInit() {
    this.isLogged = this.authService.isAuthorized$;
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
    this.router.navigate(['/admin/books']);
  }

  redirectToMain() {
    this.router.navigate(['/']);
  }

  redirectToProfile() {
    this.router.navigate(['/profile/info']);
    this.overlayPanel.hide();
  }

  redirectToOrders() {
    this.router.navigate(['/profile/orders']);
    this.overlayPanel.hide();
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
