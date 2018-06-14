import { Book } from '../entity/book';
import { EventSubscriber, getRepository, Repository } from 'typeorm';
import { ElasticsearchSubscriber } from './elasticsearch.subscriber';
import { Indexer } from '../../elasticsearch/indexer';
import { bookIndexer } from '../../elasticsearch/book.indexer';

@EventSubscriber()
export class BookElasticsearchSubscriber extends ElasticsearchSubscriber<Book> {

  listenTo() {
    return Book;
  }

  protected getIndexer(): Indexer<Book> {
    return bookIndexer;
  }

  protected getRepository(): Repository<Book> {
    return getRepository(Book);
  }
}
