import { Component, Input } from '@angular/core';
import { BookOld } from '../../model/book-old';
import * as CartActions from '../../store/cart/cart.actions';
import { Store } from '@ngrx/store';
import { StoreState } from '../../store/reducers';
import { OrderItem } from '../../model/orderItem';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent {
  @Input() book: BookOld;

  constructor(private store: Store<StoreState>) {
  }

  addToCart() {
    console.log('added to cart');
    this.store.dispatch(new CartActions.AddToCart({
      book: {
        id: this.book.id,
      },
      count: 4,
    }));
  }
}
