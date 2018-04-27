import { Component, Input } from '@angular/core';
import { Book } from '../../../../model/book';
import * as CartActions from '../../../../store/cart/cart.actions';
import { Store } from '@ngrx/store';
import { StoreState } from '../../../../store/reducers';
import { OrderItem } from '../../../../model/orderItem';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent {
  @Input() book: Book;

  constructor(private store: Store<StoreState>) {
  }

  addToCart() {
    console.log('added to cart');
    this.store.dispatch(new CartActions.AddToCart({
      id: this.randomInt(0, 100000),
      book: this.book,
      count: 4,
    }));
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getAuthorsAsString(authors: string[]): string {
    return authors
      .reduce(
        (total, author) => total === ''
          ? author
          : total.concat(', ', author),
        '');
  }
}
