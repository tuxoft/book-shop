import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BookOld } from '../../model/book-old';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BooksService {
  private booksUrl = 'api/books';

  constructor(private http: HttpClient) { }

  get(): Observable<BookOld[]> {
    return this.http.get<BookOld[]>(this.booksUrl);
  }

  getById(id: number): Observable<BookOld[]> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<BookOld[]>(url);
  }

  getBestSellers(): Observable<BookOld[]> {
    const url = `${this.booksUrl}/best-sellers`;
    return this.http.get<BookOld[]>(url);
  }

  getLatests(): Observable<BookOld[]> {
    const url = `${this.booksUrl}/latests`;
    return this.http.get<BookOld[]>(url);
  }
}
