import { Indexer } from './indexer';
import { IndexParams, IndexParamsBody } from './index.params';
import { getRepository } from 'typeorm';
import { Category } from '../orm/entity/category';

class CategoryIndexer extends Indexer<Category> {

  getDocumentsForIndexing(): Promise<Category[]> {
    return getRepository(Category).find();
  }
}

const categoryIndexParams: IndexParams<Category> = new IndexParams(Category, {
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
          type: 'text',
          analyzer: 'russian',
          fields: {
            completion: {
              type: 'completion',
            },
          },
        },
      },
    },
  }),

  getSearchBody: (searchText: string): IndexParamsBody => ({
    body: {
      query: {
        match: {
          name: searchText,
        },
      },
    },
  }),

  getSuggestBody: (searchText: string): IndexParamsBody => ({
    body: {
      size: 10,
      query: {
        match: {
          name: searchText,
        },
      },
      suggest: {
        completion: {
          prefix: searchText,
          completion: {
            field: 'name.completion',
            size: 10,
          },
        },
      },
    },
  }),
});

export const categoryIndexer = new CategoryIndexer(categoryIndexParams);
