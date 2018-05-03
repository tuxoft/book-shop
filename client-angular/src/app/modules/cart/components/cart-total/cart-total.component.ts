import { Component, OnInit, Input } from '@angular/core';
import { OrderItem } from '../../../../model/models';
import * as CartSelectors from '../../../../store/cart/cart.selectors';
import { Store } from '@ngrx/store';
import { StoreState } from '../../../../store/reducers';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss'],
})
export class CartTotalComponent implements OnInit {

  constructor(private store: Store<StoreState>) { }

  @Input()
  items: OrderItem[];

  totalSum: number = 0;
  discountSum: number = 0;
  totalWeight: number = 0;
  totalWithoutDelivery: number = 0;

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
    });
  }

  purchase() {
    console.log('purchased!');
  }
}
