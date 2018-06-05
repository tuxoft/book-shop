import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Order } from '../../model/order';

@Injectable()
export class UserService {
  private userUrl = 'api/user';
  private orderUrl = this.userUrl + '/orders';

  constructor(private http: HttpClient) { }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.orderUrl, order);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderUrl);
  }
}
