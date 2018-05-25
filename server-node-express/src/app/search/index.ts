import * as es from './elastic.search';
import { getConnection } from 'typeorm';
import { Book } from '../orm/entity/book';

export function init() {
  es.isAvailable(10, true)
    .catch(() => console.log('Can not connect to elasticsearch server'))
    .then(reCreateIndex)
    .then(fillIndex)
    .then(() => console.log('Search index of elasticsearch server created successfully'))
    .catch((err) => {
      console.log('Error occured while creating search index for elasticsearch server');
      console.log(err);
    });
}

export async function search(text: string) {
  return await es.searchDocument(text);
}

async function reCreateIndex() {
  if (await es.indexExists()) {
    await es.deleteIndex();
  }

  await es.createIndex();

  await es.closeIndex();
  await es.indexSettings();
  await es.openIndex();

  await es.indexMapping();
}

async function fillIndex() {
  const books = await getConnection().getRepository(Book).find();

  const promises: Promise<any>[] = [];
  books.forEach((book) => {
    const indexed = es.addDocument(book);
    promises.push(indexed);
  });

  await Promise.all(promises);
}
