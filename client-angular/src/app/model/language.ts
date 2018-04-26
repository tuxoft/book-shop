/**
 * язык книги
 */
export interface Language {
  /**
   * уникальный идентификатор языка
   */
  id?: number;
  deleted?: boolean;
  /**
   * название языка
   */
  name?: string;
  /**
   * код языка
   */
  codeName?: string;
}
