import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Book } from '../../model/book';

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

  ngOnInit(): void {
    const book1: Book = {
      id: 1234567890,
      title: 'Огонь и ярость',
      authors: 'Вольф М.К.',
      price: '626 р.',
      coverUrl: '/public/images/covers/34873331c7e3ce02d73256cd557b2e3a.jpg',
    };
    this.books$ = Observable.of([book1]);
  }
}
