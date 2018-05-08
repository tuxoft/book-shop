import { OrderItem } from './order-item';

/**
 * Корзина
 */
export interface Cart {
  /**
   * уникальный идентификатор корзины
   */
  id?: string;

  /**
   * элементы корзины
   */
  items?: OrderItem[];
}
