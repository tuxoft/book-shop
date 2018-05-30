import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { BookSeries } from '../../model/book-series';

@Injectable()
export class BookSeriesService {
  private bookSeriesUrl = 'api/bookSeries';

  constructor(private http: HttpClient) { }

  get(): Observable<BookSeries[]> {
    return this.http.get<BookSeries[]>(this.bookSeriesUrl);
  }

  getById(id: number): Observable<BookSeries> {
    return this.http.get<BookSeries>(this.bookSeriesUrl + '/' + id);
  }

  updateBookSeries(bookSeries: BookSeries): Observable<any> {
    return this.http.post(this.bookSeriesUrl, bookSeries);
  }

  deleteBookSeries(id: number): Observable<any> {
    return this.http.delete(this.bookSeriesUrl + '/' + id);
  }
}
