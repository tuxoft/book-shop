import * as allBooksJson from './json/all-books.json';
import * as bestSellersJson from './json/best-sellers.json';
import * as latestBooksJson from './json/latest-books.json';

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

export const getLatestsBooks = () => {
  const books = getAll('books');
  return (<any>latestBooksJson || []).map(id => books.find(b => b.id === id));
};

export const getBestSellers = () => {
  const books = getAll('books');
  return (<any>bestSellersJson || []).map(id => books.find(b => b.id === id));
};
