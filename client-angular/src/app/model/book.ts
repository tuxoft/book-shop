import { BookAuthor } from './bookAuthor';
import { BookSeries } from './bookSeries';
import { Category } from './category';
import { City } from './city';
import { Language } from './language';
import { Publisher } from './publisher';

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
  ISBN?: string;
  /**
   * индекс Универсальной десятичной классификации.
   */
  UDC?: string;
  /**
   * индекс Библиотечно - библиографической классификации.
   */
  BBK?: string;
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
  authors?: BookAuthor[];
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

  /**
   * авторы книги в виде строки.
   */
  authorsString?: string[];
}
