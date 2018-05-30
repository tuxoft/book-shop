import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NotificationsService } from '../../../../services/common/notification.service';
import { PublisherService } from '../../../../services/rest/publisher.service';
import { Publisher } from '../../../../model/models';

@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrls: ['./publisher-list.component.scss'],
})
export class PublisherListComponent implements OnInit {

  publishers$: Observable<Publisher[]>;

  constructor(private publisherService: PublisherService,
              private notificationService: NotificationsService) { }

  ngOnInit() {
    this.publishers$ = this.publisherService.get();
  }

  deletePublisher(id: number) {
    this.publisherService.deletePublisher(id).subscribe(
      (success) => {
        this.publishers$ = this.publisherService.get();
        this.notificationService.notify('success', '', 'Издательство успешно удалено');
      },
      (error) => {
        this.notificationService.notify('error', '',
                                        'Произошла ошибка во время удаления издательства');
      });
  }
}
