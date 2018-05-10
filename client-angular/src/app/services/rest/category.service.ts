import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Category } from '../../model/category';
import { BOOKS } from '../../model/mock';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { OrderItem } from '../../model/order-item';

@Injectable()
export class CategoryService {
  private cartUrl = 'api/cart';
  private cartItemUrl = 'api/cart/item';

  constructor(private http: HttpClient) { }

  get(): Observable<Category[]> {
    return this.http.get<Category[]>(this.cartUrl);
    // return of(BOOKS.ca)
  }
}
