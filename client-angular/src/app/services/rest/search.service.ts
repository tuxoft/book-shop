import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Book } from '../../model/book';

@Injectable()
export class SearchService {
  private searchUrl = 'api/search/books';

  constructor(private http: HttpClient) { }

  search(query: string): Observable<Book[]> {
    // const headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json; charset=utf-8');
    // const params = new HttpParams();
    // params.append('q', query);
    return this.http.get<Book[]>(this.searchUrl + '?q=' + query);// , { headers, params });
  }
}
