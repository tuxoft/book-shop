import { BookAuthor } from './book-author';
import { BookSeries } from './book-series';
import { Category } from './category';
import { City } from './city';
import { Language } from './language';
import { Publisher } from './publisher';
import { Author } from './author';

/**
 * Описывает интерфейс с полными данными о книге.
 */
export interface Book {
  /**
   * уникальный идентификатор книги.
   */
  id?: number;
  /**
   * название книги.
   */
  title?: string;
  subtitle?: string;
  /**
   * номер издания.
   */
  edition?: number;
  /**
   * международный стандартный книжный номер.
   */
  isbn?: string;
  /**
   * индекс Универсальной десятичной классификации.
   */
  udc?: string;
  /**
   * индекс Библиотечно - библиографической классификации.
   */
  bbk?: string;
  /**
   * авторский знак.
   */
  cutterCode?: string;
  /**
   * год издания.
   */
  publicationYear?: Date;
  /**
   * тираж.
   */
  circulation?: number;
  /**
   * цена.
   */
  price?: number;

  /**
   * тип обложки.
   */
  coverType?: string;
  /**
   * формат.
   */
  dimensions?: string;
  /**
   * число страниц.
   */
  pageCount?: number;
  /**
   * вес.
   */
  weight?: number;
  /**
   * Артикул.
   */
  articul?: string;
  /**
   * Возрастное ограничение.
   */
  ageLimit?: string;
  /**
   * в наличии.
   */
  inStock?: number;
  /**
   * издательство.
   */
  publisher?: Publisher;
  /**
   * авторы книги.
   */
  authors?: Author[];
  /**
   * город издания.
   */
  city?: City;
  /**
   * язык издания.
   */
  language?: Language;
  /**
   * серия книг.
   */
  bookSeries?: BookSeries;
  /**
   * категории(жанр) книги.
   */
  categories?: Category[];
  /**
   * URL обложки книги.
   */
  coverUrl?: string;
}
