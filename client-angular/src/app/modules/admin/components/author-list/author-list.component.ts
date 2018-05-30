import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Author } from '../../../../model/author';
import { AuthorService } from '../../../../services/rest/author.service';
import { NotificationsService } from '../../../../services/common/notification.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss'],
})
export class AuthorListComponent implements OnInit {

  authors$: Observable<Author[]>;

  constructor(private authorService: AuthorService,
              private notificationService: NotificationsService) { }

  ngOnInit() {
    this.authors$ = this.authorService.get();
  }

  deleteAuthor(id: number) {
    this.authorService.deleteAuthor(id).subscribe(
      (success) => {
        this.authors$ = this.authorService.get();
        this.notificationService.notify('success', '', 'Книга успешно удалена');
      },
      (error) => {
        this.notificationService.notify('error', '', 'Произошла ошибка во время удаления книги');
      });
  }
}
