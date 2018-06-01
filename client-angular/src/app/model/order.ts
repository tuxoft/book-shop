import { Name } from './name';
import { Address } from './address';
import { OrderItem } from './order-item';
import { Recipient } from './recipient';

/**
 * Заказ
 */
export interface Order {
  /**
   * уникальный идентификатор заказа
   */
  id?: number;
  /**
   * признак удаления
   */
  deleted?: boolean;

  /**
   * Информация об адресате
   */
  recipient?: Recipient;

  /**
   * способ оплаты заказа
   */
  paymentMethod?: string;

  /**
   * скидка
   */
  discount?: number;

  /**
   * итоговая стоимость
   */
  totalCost?: number;

  /**
   * Статус заказа
   */
  status?: Order.StatusEnum;

  /**
   * Позиции заказа
   */
  items?: OrderItem[];
}
export namespace Order {
  export type StatusEnum = 'payd' | 'shipping' | 'delivery' | 'unpaid';
  export const statusEnum = {
    Payd: 'payd' as StatusEnum,
    Shipping: 'shipping' as StatusEnum,
    Delivery: 'delivery' as StatusEnum,
    Unpaid: 'unpaid' as StatusEnum,
  };
}
