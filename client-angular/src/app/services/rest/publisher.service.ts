import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Publisher } from '../../model/publisher';

@Injectable()
export class PublisherService {
  private publisherUrl = 'api/publishers';

  constructor(private http: HttpClient) { }

  get(): Observable<Publisher[]> {
    return this.http.get<Publisher[]>(this.publisherUrl);
  }

  getById(id: number): Observable<Publisher> {
    return this.http.get<Publisher>(this.publisherUrl + '/' + id);
  }
}
