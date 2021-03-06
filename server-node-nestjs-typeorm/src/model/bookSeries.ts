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


/**
 * серия книг
 */
export interface BookSeries {
  /**
   * уникальный идентификатор серии
   */
  id?: number;
  /**
   * признак удаления
   */
  deleted?: boolean;
  /**
   * название серии книг
   */
  name?: string;
  /**
   * описание серии книг
   */
  description?: string;
}
