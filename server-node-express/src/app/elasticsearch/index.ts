import { bookIndexer } from './book.indexer';
import * as client from './client';
import { authorIndexer } from './author.indexer';
import { Indexer } from './indexer';

// Новые "индексы" добавляем в этот массив
const indexers: Indexer<any>[] = [
  bookIndexer,
  authorIndexer,
];

export function init(): Promise<any> {
  return client.isAvailable(10, true)
    .catch(() => console.log('Can not connect to elasticsearch server'))
    .then(() => Promise.all(indexers.map(indexer => indexer.init())))
    .then(() => console.log('Search index of elasticsearch server created successfully'))
    .catch((err) => {
      console.log('Error occured while creating search index for elasticsearch server');
      console.log(err);
    });
}
