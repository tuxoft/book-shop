import { Component, OnInit, Input } from '@angular/core';
import { OrderItem } from '../../../../model/models';

@Component({
  selector: 'app-order-total',
  templateUrl: './order-total.component.html',
  styleUrls: ['./order-total.component.scss'],
})
export class OrderTotalComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  private _orderItems: OrderItem[];

  @Input()
  set orderItems(orderItems: OrderItem[]) {
    this.totalSum = 0;
    this.discountSum = 0;
    this.totalWeight = 0;
    this.totalWithoutDelivery = 0;
    orderItems.forEach((item) => {
      this.totalSum += item.book.price * item.count;
    });
    this.totalWithoutDelivery = this.totalSum - this.discountSum;
    this.itemsCount = orderItems.length;
    this._orderItems = orderItems;
  }

  constructor() { }

  totalSum: number = 0;
  discountSum: number = 0;
  totalWeight: number = 0;
  totalWithoutDelivery: number = 0;
  itemsCount: number = 0;

  ngOnInit() {
  }
}
