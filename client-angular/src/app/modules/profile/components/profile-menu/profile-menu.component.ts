import { Component, OnInit, Input } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
})
export class ProfileMenuComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  private _activePath: string;

  get activePath(): string {
    return this._activePath;
  }

  @Input()
  set activePath(activePath: string) {
    this._activePath = activePath;
  }

  constructor(private keycloakService: KeycloakService) { }

  ngOnInit() {
  }

  isActiveOrders() {
    return this._activePath === 'orders';
  }

  isActiveInfo() {
    return this._activePath === 'info';
  }

  logout() {
    this.keycloakService.logout(window.location.origin);
  }
}
