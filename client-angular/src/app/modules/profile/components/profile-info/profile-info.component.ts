import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/rest/user.service';
import { KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs/Observable';
import { User } from '../../../../model/user';
import { Order } from '../../../../model/order';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss'],
})
export class ProfileInfoComponent implements OnInit {

  user$: Observable<User>;
  user: User = {};
  orders$: Observable<Order[]>;

  constructor(private userService: UserService, private keycloakService: KeycloakService) {
    this.user$ = this.userService.getUser();
    this.user$.subscribe((user) => {
      this.user = user;
    });
    this.orders$ = this.userService.getOrders();
  }

  ngOnInit() {
  }
}
