import { EventSubscriber, Repository } from 'typeorm';
import { Author } from '../entity/author';
import { ElasticsearchSubscriber } from './elasticsearch.subscriber';
import { Indexer } from '../../elasticsearch/indexer';
import { authorIndexer } from '../../elasticsearch/author.indexer';
import { getAuthorRepository } from '../repository/index';

@EventSubscriber()
export class AuthorElasticsearchSubscriber extends ElasticsearchSubscriber<Author> {

  listenTo() {
    return Author;
  }

  protected getIndexer(): Indexer<Author> {
    return authorIndexer;
  }

  protected getRepository(): Repository<Author> {
    return getAuthorRepository();
  }
}
