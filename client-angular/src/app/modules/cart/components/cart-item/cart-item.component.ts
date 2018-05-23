import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderItem } from '../../../../model/models';
import { Validators } from '@angular/forms';
import * as CartActions from '../../../../store/cart/cart.actions';
import { Store } from '@ngrx/store';
import { StoreState } from '../../../../store/reducers';
import { NameService } from '../../../../services/common/name.service';
import { Author } from '../../../../model/author';
import { Router } from '@angular/router';

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

  constructor(private store: Store<StoreState>,
              private nameService: NameService,
              private router: Router) { }

  ngOnInit() {
    this.countItem = this.item.count;
    if (this.countItem === this.item.book.inStock) {
      this.validationShow = true;
    }
  }

  getAuthorsAsString(authors: Author[]): string {
    return this.nameService.getAuthorsAsString(authors);
  }

  decrementCount() {
    if (this.countItem > 1) {
      this.countItem = this.countItem - 1;
      const newItem = this.item;
      newItem.count = this.countItem;
      this.store.dispatch(new CartActions.ChangeItemCount(newItem));
      this.validationShow = false;
    }
  }

  incrementCount() {
    if (this.countItem < this.item.book.inStock) {
      this.countItem = this.countItem + 1;
      const newItem = this.item;
      newItem.count = this.countItem;
      this.store.dispatch(new CartActions.ChangeItemCount(newItem));
      this.validationShow = false;
    } else {
      this.validationShow = true;
    }
  }

  changeCountItem($event) {
    const value = $event.target.value;
    if (value < 1) {
      $event.target.value = 1;
    }
    if (value > this.item.book.inStock) {
      $event.target.value = this.item.book.inStock;
      this.validationShow = true;
    } else {
      this.validationShow = false;
    }
    this.countItem = $event.target.value;
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

  redirectToBookDetail(id: number) {
    this.router.navigate(['/catalog/book/' + id]);
  }
}
