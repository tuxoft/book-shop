import { Component, OnInit, Input } from '@angular/core';
import { OrderItem } from '../../../../model/models';
import { Store } from '@ngrx/store';
import { StoreState } from '../../../../store/reducers';
import * as CartActions from '../../../../store/cart/cart.actions';

@Component({
  selector: 'app-cart-footer-controls',
  templateUrl: './cart-footer-controls.component.html',
  styleUrls: ['./cart-footer-controls.component.scss'],
})
export class CartFooterControlsComponent implements OnInit {

  @Input()
  selectedItems: Set<OrderItem>;

  constructor(private store: Store<StoreState>) { }

  ngOnInit() {
  }

  deleteItems() {
    this.store.dispatch(new CartActions.RemoveItem(Array.from(this.selectedItems)));
  }

}
