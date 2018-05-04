import { Book } from './book';

/**
 * Элемент корзины или заказа (одна позиция в корзине или заказе)
 */
export interface OrderItem {
  /**
  * уникальный идентификатор элемента корзины
  */
  id?: number;
  /**
   * Книга
   */
  book?: Book;
  /**
   * Количество
   */
  count?: number;
}
