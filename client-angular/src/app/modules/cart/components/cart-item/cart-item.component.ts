import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderItem } from '../../../../model/models';
import { Validators } from '@angular/forms';
import * as CartActions from '../../../../store/cart/cart.actions';
import { Store } from '@ngrx/store';
import { StoreState } from '../../../../store/reducers';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {

  @Input()
  item: OrderItem;

  @Output()
  checkedChange = new EventEmitter();

  @Input()
  checked: boolean;

  countItem: number;

  validationShow: boolean;

  constructor(private store: Store<StoreState>) { }

  ngOnInit() {
    this.countItem = this.item.count;
    if (this.countItem === this.item.book.stock) {
      this.validationShow = true;
    }
  }

  getAuthorsAsString(authors: string[]): string {
    return authors
      .reduce(
        (total, author) => total === ''
          ? author
          : total.concat(', ', author),
        '');
  }

  decrementCount() {
    if (this.countItem > 1) {
      this.countItem = this.countItem - 1;
      const newItem = this.item;
      newItem.count = this.countItem;
      this.store.dispatch(new CartActions.ChangeItemCount(newItem));
    }
  }

  incrementCount() {
    if (this.countItem < this.item.book.stock) {
      this.countItem = this.countItem + 1;
      const newItem = this.item;
      newItem.count = this.countItem;
      this.store.dispatch(new CartActions.ChangeItemCount(newItem));
    } else {
      this.validationShow = true;
    }
  }

  changeCountItem($event) {
    const value = $event.target.value;
    if (value < 1) {
      $event.target.value = 1;
    }
    if (value > this.item.book.stock) {
      $event.target.value = this.item.book.stock;
      this.validationShow = true;
    }
    const newItem = this.item;
    newItem.count = +$event.target.value;
    this.store.dispatch(new CartActions.ChangeItemCount(newItem));
  }

  checkItem() {
    this.checkedChange.emit({
      item: this.item,
      checked: this.checked,
    });
  }
}
