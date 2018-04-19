import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Book } from '../../model/book';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BooksService {
  private booksUrl = 'api/books';

  constructor(private http: HttpClient) {}

  get(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  getById(id: number): Observable<Book[]> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Book[]>(url);
  }
}
