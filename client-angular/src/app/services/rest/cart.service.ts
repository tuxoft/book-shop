import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Cart } from '../../model/cart';
import { HttpClient } from '@angular/common/http';
import { OrderItem } from '../../model/order-item';

@Injectable()
export class CartService {
  private cartUrl = 'api/cart';
  private cartItemUrl = 'api/cart/items';

  constructor(private http: HttpClient) { }

  get(): Observable<Cart> {
    return this.http.get<Cart>(this.cartUrl);
  }

  addToCart(order): Observable<OrderItem> {
    return this.http.post<OrderItem>(this.cartItemUrl, order);
  }

  deleteItem(order): Observable<any> {
    return this.http.request('delete', this.cartItemUrl, { body: order });
  }
}
