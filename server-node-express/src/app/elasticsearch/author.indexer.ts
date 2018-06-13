import { Indexer } from './indexer';
import { IndexParams, IndexParamsBody } from './index.params';
import { getAuthorRepository } from '../orm/repository/index';
import { Author } from '../orm/entity/author';

class AuthorIndexer extends Indexer<Author> {

  getDocumentsForIndexing(): Promise<Author[]> {
    return getAuthorRepository().find();
  }
}

const authorIndexParams: IndexParams<Author> = new IndexParams(Author, {
  getSettingsBody: (): IndexParamsBody => ({
    body: {
      analysis: {
        normalizer: {
          ignore_case: {
            type: 'custom',
            char_filter: [],
            filter: ['lowercase', 'asciifolding'],
          },
        },
      },
    },
  }),

  getMappingBody: (): IndexParamsBody => ({
    body: {
      properties: {
        name: {
          type: 'nested',
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
  }),

  getSearchBody: (searchText: string): IndexParamsBody => ({
    body: {
      query: {
        bool: {
          should: [{
            nested: {
              path: 'name',
              score_mode: 'sum',
              boost: 5,
              query: {
                multi_match: {
                  query: searchText,
                  type: 'cross_fields',
                  boost: 0.3,
                  fields: [
                    'name.last^3',
                    'name.first^2',
                    'name.middle^1.5'],
                },
              },
            },
          }],
        },
      },
    },
  }),

  getSuggestBody: (searchText: string): IndexParamsBody => ({
    body: {},
  }),
});

export const authorIndexer = new AuthorIndexer(authorIndexParams);
