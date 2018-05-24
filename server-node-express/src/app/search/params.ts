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
  } else if (object instanceof Author) {
    return DocumentType.Author;
  }

  throw Error('Can not map entity to document type');
}

export function getParamsForIndex() {
  return {
    index: indexName
  }
}

export function getParamsForAddDocument(object) {
  return {
    index: indexName,
    type: getDocumentType(object),
    id: object.id,
    body: object
  }
}

export function getParamsForMappingBooks() {
  return {
    index: indexName,
    type: DocumentType.Book,
    body: {
      properties: {
        title: {
          type: 'text',
          analyzer: 'russian'
        },
        price: {
          'type': 'scaled_float',
          'scaling_factor': 100
        },
        authors: { type: 'nested' },
      }
    }
  }
}

export function getParamsForSearchBooks(text: string) {
  return {
    index: indexName,
    type: DocumentType.Book,
    body: {
      query: {
        bool: {
          should: [{
            match: {
              title: text
            }
          }, {
            nested: {
              path: 'authors',
              score_mode: 'sum',
              query: {
                multi_match: {
                  query: text,
                  type: 'cross_fields',
                  boost: 0.3,
                  fields: [
                    'authors.name.last^3',
                    'authors.name.first^2',
                    'authors.name.middle^1.5']
                }
              }
            }
          }]
        },
      }
    }
  }
}
