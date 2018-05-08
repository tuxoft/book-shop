import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Cart } from '../../model/cart';
import { BOOKS } from '../../model/mock';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {
  private cartUrl = 'api/cart';

  constructor(private http: HttpClient) { }

  get(): Observable<Cart> {
    return this.http.get<Cart>(this.cartUrl);
  }
}
