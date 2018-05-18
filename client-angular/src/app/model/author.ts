import { Name } from './name';

/**
 * автор
 */
export interface Author {
  /**
   * уникальный идентификатор автора
   */
  id?: number;
  /**
   * ФИО
   */
  name?: Name;
}
