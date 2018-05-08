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
