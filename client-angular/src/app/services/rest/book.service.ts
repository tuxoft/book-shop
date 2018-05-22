import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Book } from '../../model/book';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class BookService {
  private booksUrl = 'api/books';

  constructor(private http: HttpClient) { }

  get(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  getFullBook(id: number): Observable<Book> {
    return this.http.get<Book>(this.booksUrl + '/' + id);
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

  updateBook(book: Book): Observable<Book> {
    return this.http.post(this.booksUrl, book);
  }
}
