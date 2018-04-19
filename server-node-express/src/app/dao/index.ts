import * as allBooksJson from './json/all-books.json';

export const getAll = (what: string): any => {
  switch (what) {
    case 'books': return allBooksJson;
    default: return [];
  }
};

export const findById = (what: string, id) => getAll(what).filter(e => String(e.id) === id);
