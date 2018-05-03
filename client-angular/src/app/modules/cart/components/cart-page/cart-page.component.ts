import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { StoreState } from '../../../../store/reducers';
import * as CartSelectors from '../../../../store/cart/cart.selectors';
import { OrderItem } from '../../../../model/models';
import { List } from 'immutable';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {

  constructor(private store: Store<StoreState>) { }

  itemsCount$: Observable<number>;
  cartItems$: Observable<OrderItem[]>;

  ngOnInit() {
    this.itemsCount$ = this.store.select(CartSelectors.getCartOrderItemCount);
    this.cartItems$ = this.store.select(CartSelectors.getCartOrderItems);
  }

}