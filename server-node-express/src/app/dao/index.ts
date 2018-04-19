import * as allBooksJson from './json/all-books.json';

export const getAll = (what: string): any => {
  switch (what) {
    case 'books': return allBooksJson;
    default: return undefined;
  }
};

export const findById = (what: string, id: string) => {
  const data = getAll(what);
  return (data && data.find) ? data.find(e => String(e.id) === id) : undefined;
};
