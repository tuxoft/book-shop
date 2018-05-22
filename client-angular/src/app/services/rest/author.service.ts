import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BOOKS } from '../../model/mock';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import { OrderItem } from '../../model/order-item';
import { Author } from '../../model/author';

@Injectable()
export class AuthorService {
  private authorsUrl = 'api/authors';

  constructor(private http: HttpClient) { }

  get(): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorsUrl);
  }

  getById(id: number): Observable<Author> {
    return this.http.get<Author>(this.authorsUrl + '/' + id);
  }
}
