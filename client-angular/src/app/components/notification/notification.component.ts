import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from 'primeng/components/common/message';
import { Subscription } from 'rxjs';
import { NotificationsService } from '../../services/common/notification.service';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit, OnDestroy {

  messages: Message[] = [];
  subscription: Subscription;

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit() {
    this.subscribeToNotifications();
  }

  subscribeToNotifications() {
    this.subscription = this.notificationsService.notificationChange
      .subscribe((notification) => {
        this.messages = [];
        this.messages.push(notification);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
