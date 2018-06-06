import { Publisher } from './models';

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
   * издательство
   */
  publisher?: Publisher;
  /**
   * описание серии книг
   */
  description?: string;
}
