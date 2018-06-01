import { Component, OnInit, Input } from '@angular/core';
import { OrderItem } from '../../../../model/models';
import * as CartSelectors from '../../../../store/cart/cart.selectors';
import { Store } from '@ngrx/store';
import { StoreState } from '../../../../store/reducers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-total',
  templateUrl: './order-total.component.html',
  styleUrls: ['./order-total.component.scss'],
})
export class OrderTotalComponent implements OnInit {

  constructor(private store: Store<StoreState>, private router: Router) { }

  totalSum: number = 0;
  discountSum: number = 0;
  totalWeight: number = 0;
  totalWithoutDelivery: number = 0;
  itemsCount: number = 0;

  ngOnInit() {

    this.store.select(CartSelectors.getCartOrderItems).subscribe((items) => {
      this.totalSum = 0;
      this.discountSum = 0;
      this.totalWeight = 0;
      this.totalWithoutDelivery = 0;
      items.forEach((item) => {
        this.totalSum += item.book.price * item.count;
      });
      this.totalWithoutDelivery = this.totalSum - this.discountSum;
      this.itemsCount = items.length;
    });
  }
}
