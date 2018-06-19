import { Indexer } from './indexer';
import { Book } from '../orm/entity/book';
import { IndexParams, IndexParamsBody } from './index.params';
import { getRepository } from 'typeorm';

class BookIndexer extends Indexer<Book> {

  getDocumentsForIndexing(): Promise<Book[]> {
    return getRepository(Book).find();
  }
}

const bookIndexParams: IndexParams<Book> = new IndexParams(Book, {
  getSettingsBody: (): IndexParamsBody => ({
    body: {
      analysis: {
        char_filter: {
          remove_whitespace: {
            type: 'pattern_replace',
            pattern: ' ',
            replacement: '',
          },
          remove_dash: {
            type: 'pattern_replace',
            pattern: '-',
            replacement: '',
          },
        },
        normalizer: {
          ignore_case: {
            type: 'custom',
            char_filter: [],
            filter: ['lowercase', 'asciifolding'],
          },
          isbn: {
            type: 'custom',
            char_filter: ['remove_whitespace', 'remove_dash'],
            filter: [],
          },
        },
      },
    },
  }),

  getMappingBody: (): IndexParamsBody => ({
    body: {
      properties: {
        title: {
          type: 'text',
          analyzer: 'russian',
          fields: {
            completion: {
              type: 'completion',
              analyzer: 'standard',
            },
          },
        },
        isbn: {
          type: 'keyword',
          normalizer: 'isbn',
        },
        price: {
          type: 'scaled_float',
          scaling_factor: 100,
        },
        authors: {
          type: 'nested',
          properties: {
            name: {
              properties: {
                first: {
                  type: 'keyword',
                  normalizer: 'ignore_case',
                },
                last: {
                  type: 'keyword',
                  normalizer: 'ignore_case',
                },
                middle: {
                  type: 'keyword',
                  normalizer: 'ignore_case',
                },
              },
            },
          },
        },
      },
    },
  }),

  getSearchBody: (searchText: string): IndexParamsBody => ({
    body: {
      query: {
        bool: {
          should: [{
            match: {
              title: searchText,
            },
          }, {
            match: {
              isbn: searchText,
            },
          }, {
            nested: {
              path: 'authors',
              score_mode: 'sum',
              query: {
                multi_match: {
                  query: searchText,
                  type: 'cross_fields',
                  boost: 0.3,
                  fields: [
                    'authors.name.last^3',
                    'authors.name.first^2',
                    'authors.name.middle^1.5'],
                },
              },
            },
          }],
        },
      },
    },
  }),

  getSuggestBody: (searchText: string): IndexParamsBody => ({
    body: {
      _source: ['id', 'title', 'authors'],
      size: 10,
      query: {
        match: {
          title: searchText,
        },
      },
      suggest: {
        completion: {
          prefix: searchText,
          completion: {
            field: 'title.completion',
            size: 10,
          },
        },
      },
    },
  }),
});

export const bookIndexer = new BookIndexer(bookIndexParams);
