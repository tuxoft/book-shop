import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../../../services/rest/author.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationsService } from '../../../../services/common/notification.service';
import { Author } from '../../../../model/author';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.scss'],
})
export class AuthorCreateComponent implements OnInit {

  author: Author = {};
  authorForm: FormGroup;

  constructor(private authorService: AuthorService,
              private fb: FormBuilder,
              private notificationService: NotificationsService) {

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
