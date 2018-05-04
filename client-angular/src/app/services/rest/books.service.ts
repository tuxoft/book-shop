import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Book } from '../../model/book';
import { BOOKS } from '../../model/mock';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BooksService {
  private booksUrl = 'api/books';

  constructor(private http: HttpClient) { }

  get(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
    // return of(BOOKS);
  }

  getByIds(ids: number[]): Observable<Book[]> {
    const url = `${this.booksUrl}/${ids}`;
    return this.http.get<Book[]>(url);
  }

  getBestsellers(): Observable<Book[]> {
    const url = `${this.booksUrl}/bestsellers`;
    return this.http.get<Book[]>(url);
  }

  getLatests(): Observable<Book[]> {
    const url = `${this.booksUrl}/latests`;
    return this.http.get<Book[]>(url);
  }
}
