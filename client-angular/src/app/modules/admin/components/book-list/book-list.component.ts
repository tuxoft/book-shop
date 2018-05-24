import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../../services/rest/book.service';
import { Observable } from 'rxjs/Observable';
import { Book } from '../../../../model/book';
import { NameService } from '../../../../services/common/name.service';
import { Author } from '../../../../model/author';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {

  books$: Observable<Book[]>;

  books: Book[];

  constructor(private bookService: BookService,
              private nameService: NameService) { }

  ngOnInit() {
    this.books$ = this.bookService.get();

    this.books$.subscribe(books => this.books = books);
  }

  getAuthorsAsString(authors: Author[]): string {
    return this.nameService.getAuthorsAsString(authors);
  }
}
