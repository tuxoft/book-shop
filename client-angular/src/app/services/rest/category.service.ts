import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Category } from '../../model/category';
import { BOOKS } from '../../model/mock';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { OrderItem } from '../../model/order-item';

@Injectable()
export class CategoryService {
  private categoriesUrl = 'api/categories';
  private categoriesRootUrl = '/api/categories/roots';

  constructor(private http: HttpClient) { }

  get(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl);
    // return of(BOOKS.ca)
  }

  getById(id: number): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl + '/' + id + '/books');
    // return of(BOOKS.ca)
  }

  getRoot(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesRootUrl);
    // return of(BOOKS.ca)
  }

  getPathForCategory(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.categoriesUrl + '/' + id + '/ancestors');
    // return of(BOOKS.ca)
  }
}
