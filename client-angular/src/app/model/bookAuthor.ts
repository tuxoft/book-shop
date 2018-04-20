/**
 * Книжный магазин
 * Сервер книжного магазина
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
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
