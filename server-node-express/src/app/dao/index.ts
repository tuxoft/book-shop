import * as booksAllJson from './json/books-all.json';
import * as booksBestsellersJson from './json/books-bestsellers.json';
import * as booksLatestsJson from './json/books-latests.json';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/switchMap';
import { Book } from '../model/book';
import { Id } from '../model/id';

const booksAll$: Observable<any> = Observable.from(<any>booksAllJson);
const booksBestsellers$: Observable<number> = Observable.from(<any>booksBestsellersJson);
const booksLatests$: Observable<number> = Observable.from(<any>booksLatestsJson);

export const getAll = (what: string): Observable<any> => {
  switch (what) {
    case 'books': return booksAll$;
    default: return Observable.empty();
  }
};

export const getByIds = (what: string, ids: string[], maxCount: number = 10): Observable<Id> => {
  return getByIdsInternally(
    Observable.from(ids)
      .distinct()
      .take(maxCount)
      .map(id => Number(id)),
    getAll(what));
};

export const getBooksBestsellers = (maxCount: number = 9): Observable<Book> => {
  return getByIdsInternally(booksBestsellers$.take(maxCount), booksAll$);
};

export const getBooksLatests = (maxCount: number = 9): Observable<Book> => {
  return getByIdsInternally(booksLatests$.take(maxCount), booksAll$);
};

const getByIdInternally = (id: number, source$: Observable<Id>): Observable<any> => {
  return source$.find(e => e.id === id);
};

const getByIdsInternally = (ids$: Observable<number>, source$: Observable<Id>): Observable<any> => {
  return ids$.switchMap(id => getByIdInternally(id, source$));
};
