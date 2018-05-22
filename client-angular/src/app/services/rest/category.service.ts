import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Category } from '../../model/category';
import { HttpClient } from '@angular/common/http';
import { OrderItem } from '../../model/order-item';

@Injectable()
export class CategoryService {
  private categoriesUrl = 'api/categories';
  private categoriesRootUrl = '/api/categories/roots';

  constructor(private http: HttpClient) { }

  get(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl);
  }

  getById(id: number): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl + '/' + id + '/books');
  }

  getRoot(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesRootUrl);
  }

  getPathForCategory(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.categoriesUrl + '/' + id + '/ancestors');
  }
}
