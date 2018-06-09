import { Book } from '../entity/book';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
  UpdateEvent,
} from 'typeorm';
import { getBookRepository } from '../repository/index';
import { bookIndexer } from '../../elasticsearch/book.indexer';

@EventSubscriber()
export class BookElasticsearchSubscriber implements EntitySubscriberInterface<Book> {

  listenTo() {
    return Book;
  }

  afterInsert(event: InsertEvent<Book>): Promise<any> | void {
    return this.index(event.entity);
  }

  afterUpdate(event: UpdateEvent<Book>): Promise<any> | void {
    return this.index(event.entity);
  }

  beforeRemove(event: RemoveEvent<Book>): Promise<any> | void {
    return this.delete(event.entity);
  }

  private index(book: Book): Promise<any> | void {
    if (bookIndexer.isIndexReady()) {
      return getBookRepository()
      // Из-за того, что в entity может прийти "полная" сущность и т.к. в elasticsearch
      // храним "краткие" данные, то необходимо по-новой получить "краткую" сущность
        .findOneOrFail(book.id)
        .then(bookIndexer.indexDocument);
    }
  }

  private delete(book: Book): Promise<any> | void {
    if (bookIndexer.isIndexReady()) {
      return bookIndexer.deleteDocument(book);
    }
  }
}
