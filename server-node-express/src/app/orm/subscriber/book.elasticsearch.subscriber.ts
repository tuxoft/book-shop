import { Book } from '../entity/book';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
  UpdateEvent,
} from 'typeorm';
import * as es from '../../search/elastic.search';
import { getBookRepository } from '../repository/index';

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

  afterRemove(event: RemoveEvent<Book>): Promise<any> | void {
    return null;
  }

  private index(entity: Book): Promise<any> | void {
    if (es.isIndexReady()) {
      return getBookRepository()
      // Из-за того, что в entity может прийти "полная" сущность и т.к. в elasticsearch
      // храним "краткие" данные, то необходимо получить "краткую" сущность
        .findOneOrFail(entity.id)
        .then(es.indexDocument);
    }
  }

  private delete(entity: Book): Promise<any> | void {
    if (es.isIndexReady()) {
      return es.deleteDocument(entity);
    }
  }
}
