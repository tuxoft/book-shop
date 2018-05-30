import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from '../../../../services/rest/author.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationsService } from '../../../../services/common/notification.service';
import { Author } from '../../../../model/author';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.scss'],
})
export class AuthorEditComponent implements OnInit {

  authorId: number;
  author$: Observable<Author>;
  author: Author = {};
  authorForm: FormGroup;

  constructor(route: ActivatedRoute,
              private authorService: AuthorService,
              private fb: FormBuilder,
              private notificationService: NotificationsService) {
    this.authorId = route.snapshot.params['id'];

    this.author$ = this.authorService.getById(this.authorId);
    this.author$.subscribe((author) => {
      this.author = author;
      this.rebuildForm();
    });

    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.authorForm = this.fb.group({
      lastName: '',
      firstName: '',
      middleName: '',
    });
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  rebuildForm() {
    this.authorForm.reset({
      lastName: this.author.name.last,
      firstName: this.author.name.first,
      middleName: this.author.name.middle,
    });
  }

  onSubmit() {
    this.author = this.prepareSaveAuthor();
    this.authorService.updateAuthor(this.author).subscribe(
      (success) => {
        this.notificationService.notify('success', '', 'Автор успешно сохранен');
      },
      (error) => {
        let errorMsg = '';
        if (error && error.error && error.status === 422) {
          errorMsg = error.error.reduce(
            (prevValue, curValue) => {
              return prevValue + Object.values(curValue.constraints)
                .reduce(
                  (constrAccum, curConstr) => {
                    return (constrAccum as string) + (curConstr as string) + '\n';
                  },
                  '');
            },
            '');
        }

        if (error && error.error && error.status === 500) {
          errorMsg = error.error;
        }
        this.notificationService.notify('error', '',
                                        'Произошла ошибка при сохранении автора:' + errorMsg);
      },
    );
    this.rebuildForm();
  }

  prepareSaveAuthor(): Author {
    const formModel = this.authorForm.value;

    const saveAuthor: Author = {
      ...this.author,
      name: {
        first: formModel.firstName,
        last: formModel.lastName,
        middle: formModel.middleName,
      },
    };

    return saveAuthor;
  }

  revert() {
    this.rebuildForm();
  }
}
