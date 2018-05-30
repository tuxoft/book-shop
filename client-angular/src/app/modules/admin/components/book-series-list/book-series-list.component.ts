import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BookSeries } from '../../../../model/book-series';
import { BookSeriesService } from '../../../../services/rest/book-series.service';
import { NotificationsService } from '../../../../services/common/notification.service';

@Component({
  selector: 'app-book-series-list',
  templateUrl: './book-series-list.component.html',
  styleUrls: ['./book-series-list.component.scss'],
})
export class BookSeriesListComponent implements OnInit {

  bookSeries$: Observable<BookSeries[]>;

  constructor(private bookSeriesService: BookSeriesService,
              private notificationService: NotificationsService) { }

  ngOnInit() {
    this.bookSeries$ = this.bookSeriesService.get();
  }

  deleteBookSeries(id: number) {
    this.bookSeriesService.deleteBookSeries(id).subscribe(
      (success) => {
        this.bookSeries$ = this.bookSeriesService.get();
        this.notificationService.notify('success', '', 'Книжная серия успешно удалена');
      },
      (error) => {
        this.notificationService.notify('error', '',
                                        'Произошла ошибка во время удаления книжной серии');
      });
  }
}
