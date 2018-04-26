/**
 * город издания
 */
export interface City {
  /**
   * уникальный идентификатор города
   */
  id?: number;
  deleted?: boolean;
  /**
   * название города
   */
  name?: string;
  /**
   * код города
   */
  codeName?: string;
}
