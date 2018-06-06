import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BookSeries } from '../../../../model/book-series';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookSeriesService } from '../../../../services/rest/book-series.service';
import { NotificationsService } from '../../../../services/common/notification.service';
import { Publisher } from '../../../../model/publisher';
import { Observable } from 'rxjs';
import { PublisherService } from '../../../../services/rest/publisher.service';

@Component({
  selector: 'app-book-series-create',
  templateUrl: './book-series-create.component.html',
  styleUrls: ['./book-series-create.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BookSeriesCreateComponent implements OnInit {

  bookSeries: BookSeries = {};
  bookSeriesForm: FormGroup;
  publisher$: Observable<Publisher[]>;
  publishers: Publisher[];
  publisherSearchResult: Publisher[];

  constructor(private bookSeriesService: BookSeriesService,
              private fb: FormBuilder,
              private notificationService: NotificationsService,
              private publisherService: PublisherService) {
    this.publisher$ = this.publisherService.get();
    this.publisher$.subscribe((publisher) => {
      this.publishers = publisher;
    });
    this.createForm();
  }

  ngOnInit() {
  }

  searchPublisher(event) {
    this.publisherSearchResult = this.publishers
      .filter(publisher => publisher.name.indexOf(event.query) > -1);
  }

  createForm() {
    this.bookSeriesForm = this.fb.group({
      name: '',
      publisher: [{}, Validators.required],
    });
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  rebuildForm() {
    this.bookSeriesForm.reset({
      name: this.bookSeries.name,
      publisher: this.bookSeries.publisher,
    });
  }

  onSubmit() {
    this.bookSeries = this.prepareSaveBookSeries();
    this.bookSeriesService.updateBookSeries(this.bookSeries).subscribe(
      (success) => {
        this.notificationService.notify('success', '', 'Книжная серия успешно сохранена');
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
                                        'Произошла ошибка при сохранении книжной серии:'
                                        + errorMsg);
      },
    );
    this.rebuildForm();
  }

  prepareSaveBookSeries(): BookSeries {
    const formModel = this.bookSeriesForm.value;

    const saveBookSeries: BookSeries = {
      ...this.bookSeries,
      name: formModel.name,
      publisher: formModel.publisher,
    };

    return saveBookSeries;
  }

  revert() {
    this.rebuildForm();
  }
}
