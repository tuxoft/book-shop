import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../../../services/rest/book.service';
import { Observable } from 'rxjs/Observable';
import { Book } from '../../../../model/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {

  bookId: number;
  book$: Observable<Book>;

  constructor(route: ActivatedRoute, private bookService: BookService) {
    this.bookId = route.snapshot.params['id'];
    this.book$ = this.bookService.getFullBook(this.bookId);
    console.log('book-detail activated');
  }

  ngOnInit() {
  }

}
