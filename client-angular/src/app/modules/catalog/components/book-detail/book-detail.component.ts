import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../../../services/rest/book.service';
import { Observable } from 'rxjs/Observable';
import { Book } from '../../../../model/book';
import { Store } from '@ngrx/store';
import { StoreState } from '../../../../store/reducers';
import * as CartSelectors from '../../../../store/cart/cart.selectors';
import * as CartActions from '../../../../store/cart/cart.actions';
import { Author } from '../../../../model/author';
import { NameService } from '../../../../services/common/name.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {

  bookId: number;
  book$: Observable<Book>;
  book: Book = {};
  inCart$: Observable<boolean>;
  activeTab: string = 'annotation';
  categoryId: number;

  constructor(route: ActivatedRoute,
              private bookService: BookService,
              private store: Store<StoreState>,
              private router: Router,
              private nameService: NameService) {
    this.bookId = route.snapshot.params['id'];
    this.book$ = this.bookService.getFullBook(this.bookId);
    this.book$.subscribe((book) => {
      this.book = book;
      if (book.categories
        && book.categories[0]
        && book.categories[0].id) {
        this.categoryId = book.categories[0].id;
      }
    });
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

  getSurnameAndInitials(author: Author): string {
    return this.nameService.getSurnameAndInitials(author);
  }

  addToCart() {
    this.store.dispatch(new CartActions.AddToCart({
      book: this.book,
      count: 1,
    }));
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
