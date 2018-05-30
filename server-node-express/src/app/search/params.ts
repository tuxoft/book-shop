import { Book } from '../orm/entity/book';
import { Author } from '../orm/entity/author';

const indexName = 'bookshop';

enum DocumentType {
  Book = 'book',
  Author = 'author',
}

function getDocumentType(object): DocumentType {
  if (object instanceof Book) {
    return DocumentType.Book;
  }

  if (object instanceof Author) {
    return DocumentType.Author;
  }

  throw Error('Can not map entity to document type');
}

export function getParamsForIndex() {
  return {
    index: indexName,
  };
}

export function getParamsForIndexDocument(object) {
  return {
    index: indexName,
    type: getDocumentType(object),
    id: object.id,
    body: object,
  };
}

export function getParamsForDeleteDocument(object) {
  return {
    index: indexName,
    type: getDocumentType(object),
    id: object.id,
  };
}

export function getParamsForSettings() {
  return {
    index: indexName,
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
  };
}

export function getParamsForMappingBooks() {
  return {
    index: indexName,
    type: DocumentType.Book,
    body: {
      properties: {
        title: {
          type: 'text',
          analyzer: 'russian',
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
  };
}

export function getParamsForSearchBooks(searchText: string) {
  return {
    index: indexName,
    type: DocumentType.Book,
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
  };
}
