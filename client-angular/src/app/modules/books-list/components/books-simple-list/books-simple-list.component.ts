import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Book } from '../../../../model/book';
import { BookService } from '../../../../services/rest/book.service';

@Component({
  selector: 'books-simple-list',
  templateUrl: './books-simple-list.component.html',
  styleUrls: ['./books-simple-list.component.css'],
})
export class BooksSimpleListComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private booksService: BookService) { }

  ngOnInit(): void {
    this.books$ = this.booksService.get();
  }
}
