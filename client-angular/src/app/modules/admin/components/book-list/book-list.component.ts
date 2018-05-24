import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../../services/rest/book.service';
import { Observable } from 'rxjs/Observable';
import { Book } from '../../../../model/book';
import { NameService } from '../../../../services/common/name.service';
import { Author } from '../../../../model/author';
import { NotificationsService } from '../../../../services/common/notification.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(private bookService: BookService,
              private nameService: NameService,
              private notificationService: NotificationsService) { }

  ngOnInit() {
    this.books$ = this.bookService.get();
  }

  getAuthorsAsString(authors: Author[]): string {
    return this.nameService.getAuthorsAsString(authors);
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(
      (success) => {
        this.books$ = this.bookService.get();
        this.notificationService.notify('success', '', 'Книга успешно удалена');
      },
      (error) => {
        this.notificationService.notify('error', '', 'Произошла ошибка во время удаления книги');
      });
  }
}
