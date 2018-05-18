import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../../../model/book';
import * as CartActions from '../../../../store/cart/cart.actions';
import * as CartSelectors from '../../../../store/cart/cart.selectors';
import { Store } from '@ngrx/store';
import { StoreState } from '../../../../store/reducers';
import { OrderItem } from '../../../../model/order-item';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { NameService } from '../../../../services/common/name.service';
import { Author } from '../../../../model/author';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() book: Book;

  $inCart: Observable<boolean>;

  constructor(private store: Store<StoreState>,
              private router: Router,
              private nameService: NameService) {
  }

  ngOnInit(): void {
    this.$inCart = this.store.select(CartSelectors.isBookInCart(this.book.id));
  }

  addToCart() {
    this.store.dispatch(new CartActions.AddToCart({
      book: this.book,
      count: 1,
    }));
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getSurnameAndInitials(author: Author): string {
    return this.nameService.getSurnameAndInitials(author);
  }

  redirectToCart() {
    this.router.navigate(['/cart']);
  }
}
