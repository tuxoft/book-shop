import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Book } from '../../../../model/book';
import { BookService } from '../../../../services/rest/book.service';

@Component({
  selector: 'catalog-books',
  templateUrl: './catalog-books.component.html',
  styleUrls: ['./catalog-books.component.scss'],
})
export class CatalogBooksComponent implements OnInit {
  books$: Observable<Book[]>;
  booksBestsellers$: Observable<Book[]>;
  booksBestsellers: Book[];
  booksLatests$: Observable<Book[]>;
  booksLatests: Book[];

  constructor(private booksService: BookService) {
  }

  ngOnInit(): void {
    // this.books$ = this.booksService.get();
    this.booksBestsellers$ = this.booksService.getBestsellers();
    this.booksBestsellers$.subscribe(books => this.booksBestsellers = books);
    this.booksLatests$ = this.booksService.getLatests();
    this.booksLatests$.subscribe(books => this.booksLatests = books);
  }
}
