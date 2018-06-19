import * as express from 'express';
import { bookIndexer } from '../../elasticsearch/book.indexer';
import { authorIndexer } from '../../elasticsearch/author.indexer';
import { Indexer } from '../../elasticsearch/indexer';
import { validator } from '../../utils/validation.util';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/toPromise';
import { categoryIndexer } from '../../elasticsearch/category.indexer';

const router = express.Router();

export default router;

router.get('/', async (req, res, next) => {
  try {
    const query = req.query.q || '';
    const result = await bookIndexer.search(query);
    res.send(result);

  } catch (err) {
    next(err);
  }
});

router.get('/suggest', async (req, res, next) => {
  try {
    const query = req.query.q;

    let authors = [];
    let books = [];
    let categories = [];
    let completion = [];

    if (validator.isNotEmpty(query)) {
      const authorSuggest = await authorIndexer.suggest(query);
      const bookSuggest = await bookIndexer.suggest(query);
      const categorySuggest = await categoryIndexer.suggest(query);

      completion = await Observable.of(categorySuggest, authorSuggest, bookSuggest)
        .map(e => e['suggest'])
        .switchMap(e => e['completion'])
        .switchMap(e => e['options'])
        .map(e => e['text'])
        .toArray()
        .toPromise();

      authors = await Observable.of(authorSuggest)
        .map(e => e['hits'])
        .switchMap(e => e['hits'])
        .map(e => e['_source'])
        .toArray()
        .toPromise();

      books = await Observable.of(bookSuggest)
        .map(e => e['hits'])
        .switchMap(e => e['hits'])
        .map(e => e['_source'])
        .toArray()
        .toPromise();

      categories = await Observable.of(categorySuggest)
        .map(e => e['hits'])
        .switchMap(e => e['hits'])
        .map(e => e['_source'])
        .toArray()
        .toPromise();
    }

    res.send({
      authors,
      books,
      categories,
      completion,
    });

  } catch (err) {
    next(err);
  }
});

router.get('/books', async (req, res, next) => {
  try {
    const result = await search(bookIndexer, req.query.q);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.get('/authors', async (req, res, next) => {
  try {
    const result = await search(authorIndexer, req.query.q);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

router.get('/categories', async (req, res, next) => {
  try {
    const result = await search(categoryIndexer, req.query.q);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

async function search<T>(indexer: Indexer<T>, query: string) {
  if (validator.isNotEmpty(query)) {
    return indexer.search(query)
      .then(result => result.hits.hits
        .map(e => e._source));
  } else {
    return [];
  }
}
