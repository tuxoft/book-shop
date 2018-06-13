import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../../services/rest/user.service';
import { Observable } from 'rxjs';
import { Order } from '../../../../model/order';
import { ActivatedRoute } from '@angular/router';
import { NameService } from '../../../../services/common/name.service';
import { Author } from '../../../../model/author';
import { CheckoutService } from '../../../../services/rest/checkout.service';

@Component({
  selector: 'app-profile-order-detail',
  templateUrl: './profile-order-detail.component.html',
  styleUrls: ['./profile-order-detail.component.scss'],
})
export class ProfileOrderDetailComponent implements OnInit {
  orderId: number;

  order$: Observable<Order>;

  order: Order = {};

  constructor(private userService: UserService,
              private acivatedRoute: ActivatedRoute,
              private nameService: NameService,
              private checkoutService: CheckoutService) {
    this.orderId = this.acivatedRoute.snapshot.params['id'];
    this.order$ = this.userService.getOrderById(this.orderId);
    this.order$.subscribe((order) => {
      this.order = order;
    });
  }

  ngOnInit() {
  }

  getFullname(author: Author) {
    return this.nameService.getFullname(author);
  }

  createPayment() {
    let result: any;
    this.checkoutService.createPayment(this.orderId).subscribe((res) => {
      result = res;
    });
  }
}
