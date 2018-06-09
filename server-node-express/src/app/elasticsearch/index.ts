import { bookIndexer } from './book.indexer';
import * as client from './client';

export function init(): Promise<any> {
  return client.isAvailable(10, true)
    .catch(() => console.log('Can not connect to elasticsearch server'))
    .then(bookIndexer.init)
    .then(() => console.log('Search index of elasticsearch server created successfully'))
    .catch((err) => {
      console.log('Error occured while creating search index for elasticsearch server');
      console.log(err);
    });
}
