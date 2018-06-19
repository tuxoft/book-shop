import { EventSubscriber, getRepository, Repository } from 'typeorm';
import { ElasticsearchSubscriber } from './elasticsearch.subscriber';
import { Indexer } from '../../elasticsearch/indexer';
import { Category } from '../entity/category';
import { categoryIndexer } from '../../elasticsearch/category.indexer';

@EventSubscriber()
export class CategoryElasticsearchSubscriber extends ElasticsearchSubscriber<Category> {

  listenTo() {
    return Category;
  }

  protected getIndexer(): Indexer<Category> {
    return categoryIndexer;
  }

  protected getRepository(): Repository<Category> {
    return getRepository(Category);
  }
}
