import * as client from './client';
import { Indexer } from './indexer';
import { IndexParams, IndexParamsBody } from './index.params';
import { Author } from '../orm/entity/author';
import { getRepository } from 'typeorm';

class AuthorForSuggestCompletion extends Author {
  suggestCompletion1: string;
  suggestCompletion2: string;

  constructor(author: Author) {
    super();
    this.id = author.id;
    this.name = author.name;

    this.suggestCompletion1 = (
      (this.name.last || '')
      + ' ' + (this.name.first || '')
      + ' ' + (this.name.middle || '')
    ).trim().replace(/\s\s+/g, ' ');

    this.suggestCompletion2 = (
      (this.name.first || '')
      + ' ' + (this.name.middle || '')
      + ' ' + (this.name.last || '')
    ).trim().replace(/\s\s+/g, ' ');
  }
}

class AuthorIndexer extends Indexer<Author> {

  public indexDocument = (author: Author) => {
    const authorForSuggestCompletion = new AuthorForSuggestCompletion(author);
    return client.indexDocument(this.indexParams, authorForSuggestCompletion);
  }

  public indexDocuments = (authors: Author[]) => {
    const authorsForSuggestCompletion = authors.map(author =>
      new AuthorForSuggestCompletion(author));

    return client.indexDocuments(this.indexParams, authorsForSuggestCompletion);
  }

  getDocumentsForIndexing(): Promise<Author[]> {
    return getRepository(Author).find();
  }
}

const getQuery = searchText => ({
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
});

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
        suggestCompletion1: {
          type: 'keyword',
          index: false,
          copy_to: 'suggestCompletionAll',
        },
        suggestCompletion2: {
          type: 'keyword',
          index: false,
          copy_to: 'suggestCompletionAll',
        },
        suggestCompletionAll: {
          type: 'completion',
        },
      },
    },
  }),

  getSearchBody: (searchText: string): IndexParamsBody => ({
    body: {
      _source: ['id', 'name'],
      query: getQuery(searchText),
    },
  }),

  getSuggestBody: (searchText: string): IndexParamsBody => ({
    body: {
      _source: ['id', 'name'],
      query: getQuery(searchText),
      suggest: {
        completion: {
          prefix: searchText,
          completion: {
            field: 'suggestCompletionAll',
            size: 10,
          },
        },
      },
    },
  }),
});

export const authorIndexer = new AuthorIndexer(authorIndexParams);
