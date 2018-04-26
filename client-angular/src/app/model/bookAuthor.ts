import { Book } from './book';
import { Person } from './person';

/**
 * автор книги
 */
export interface BookAuthor {
  /**
   * позиция в списке авторов
   */
  posititon?: number;
  /**
   * автор
   */
  person?: Person;
  /**
   * книга
   */
  book?: Book;
}
