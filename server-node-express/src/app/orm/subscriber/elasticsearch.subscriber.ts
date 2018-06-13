import {
  EntitySubscriberInterface,
  InsertEvent,
  RemoveEvent,
  Repository,
  UpdateEvent,
} from 'typeorm';
import { Indexer } from '../../elasticsearch/indexer';

export abstract class ElasticsearchSubscriber<T> implements EntitySubscriberInterface<T> {

  protected abstract getIndexer(): Indexer<T>;

  protected abstract getRepository(): Repository<T>;

  afterInsert(event: InsertEvent<T>): Promise<any> | void {
    return this.index(event.entity);
  }

  afterUpdate(event: UpdateEvent<T>): Promise<any> | void {
    return this.index(event.entity);
  }

  beforeRemove(event: RemoveEvent<T>): Promise<any> | void {
    return this.delete(event.entity);
  }

  private index(document: T): Promise<any> | void {
    if (this.getIndexer().isIndexReady()) {
      return this.getRepository()
      // Из-за того, что в entity может прийти "полная" сущность и т.к. в elasticsearch
      // храним "краткие" данные, то необходимо по-новой получить "краткую" сущность
        .findOneOrFail(document['id'])
        .then(this.getIndexer().indexDocument);
    }
  }

  private delete(document: T): Promise<any> | void {
    if (this.getIndexer().isIndexReady()) {
      return this.getIndexer().deleteDocument(document);
    }
  }
}
