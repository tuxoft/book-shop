import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
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

  deleteAuthor(id: number): Observable<any> {
    return this.http.delete(this.authorsUrl + '/' + id);
  }
}
