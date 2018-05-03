import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderItem } from '../../../../model/models';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {

  @Input()
  item: OrderItem;

  @Output()
  count: EventEmitter<number>;

  countItem: number;

  constructor() { }

  getAuthorsAsString(authors: string[]): string {
    return authors
      .reduce(
        (total, author) => total === ''
          ? author
          : total.concat(', ', author),
        '');
  }

  ngOnInit() {
    this.countItem = this.item.count;
  }

  decrementCount() {
    if (this.countItem > 1) {
      this.countItem = this.countItem - 1;
    }
  }

  incrementCount() {
    if (this.countItem < this.item.book.inStock) {
      this.countItem = this.countItem + 1;
    }
  }
}
