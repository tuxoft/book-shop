import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Order } from '../../../../model/order';
import { UserService } from '../../../../services/rest/user.service';

@Component({
  selector: 'app-profile-orders',
  templateUrl: './profile-orders.component.html',
  styleUrls: ['./profile-orders.component.scss'],
})
export class ProfileOrdersComponent implements OnInit {

  orders$: Observable<Order[]>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.orders$ = this.userService.getOrders();
  }

  cancelOrder(orderId: number) {
    return;
  }
}
