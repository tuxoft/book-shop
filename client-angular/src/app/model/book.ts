import { Id } from './id';

export class Book implements Id {
  id: number;
  title: string;
  authors: string;
  price: string;
  coverUrl: string;
}
