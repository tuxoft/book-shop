import { Book } from '../entity/book';
import { EventSubscriber, Repository } from 'typeorm';
import { ElasticsearchSubscriber } from './elasticsearch.subscriber';
import { Indexer } from '../../elasticsearch/indexer';
import { bookIndexer } from '../../elasticsearch/book.indexer';
import { getBookRepository } from '../repository/index';

@EventSubscriber()
export class BookElasticsearchSubscriber extends ElasticsearchSubscriber<Book> {

  listenTo() {
    return Book;
  }

  protected getIndexer(): Indexer<Book> {
    return bookIndexer;
  }

  protected getRepository(): Repository<Book> {
    return getBookRepository();
  }
}
