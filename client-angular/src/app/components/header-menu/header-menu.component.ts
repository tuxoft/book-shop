import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent implements OnInit {

  constructor(private router: Router, private keycloakService: KeycloakService) { }

  ngOnInit() {
  }

  isAdminPanel(): boolean {
    return this.router.url.indexOf('/admin') === 0;
  }

  redirectToAdminPanel() {
    this.router.navigate(['/admin']);
  }
  redirectToMain() {
    this.router.navigate(['/']);
  }

  logout() {
    this.keycloakService.logout();
  }
}
