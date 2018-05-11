import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../../../services/rest/book.service';
import { Observable } from 'rxjs/Observable';
import { Book } from '../../../../model/book';
import { Store } from '@ngrx/store';
import { StoreState } from '../../../../store/reducers';
import * as CartSelectors from '../../../../store/cart/cart.selectors';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {

  bookId: number;
  book$: Observable<Book>;
  inCart$: Observable<boolean>;
  activeTab: string = 'annotation';

  constructor(route: ActivatedRoute,
              private bookService: BookService,
              private store: Store<StoreState>,
              private router: Router) {
    this.bookId = route.snapshot.params['id'];
    this.book$ = this.bookService.getFullBook(this.bookId);
    this.inCart$ = this.store.select(CartSelectors.isBookInCart(+this.bookId));
  }

  ngOnInit() {
  }

  getAuthorsAsString(authors: string[]): string {
    return authors
      .reduce(
        (total, author) => total === ''
          ? author
          : total.concat(', ', author),
        '');
  }

  addToCart() {
  }

  redirectToCart() {
    this.router.navigate(['/cart']);
  }

  showAnnotation() {
    this.activeTab = 'annotation';
  }

  showReview() {
    this.activeTab = 'review';
  }

  annotationVisible() {
    return this.activeTab === 'annotation';
  }

  reviewVisible() {
    return this.activeTab === 'review';
  }
}
