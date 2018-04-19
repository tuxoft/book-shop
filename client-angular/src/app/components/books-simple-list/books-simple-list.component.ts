import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Book } from '../../model/book';
import { BooksService } from '../../services/rest/books.service';

@Component({
  selector: 'books-simple-list',
  template: `
    <ul>
      <li *ngFor="let book of books$ | async">
        <book-simple-view [book]="book"></book-simple-view>
      </li>
    </ul>
  `,
})
export class BooksSimpleListComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.books$ = this.booksService.get();
  }
}
