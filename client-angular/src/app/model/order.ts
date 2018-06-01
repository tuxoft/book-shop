import { Name } from './name';
import { Address } from './address';
import { OrderItem } from './order-item';

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
   * имя получателя заказа
   */
  addresseeName?: Name;

  /**
   * email получателя заказа
   */
  email?: string;

  /**
   * телефон получателя заказа
   */
  phoneNumber?: string;

  /**
   * адрес получателя заказа
   */
  shippingAddress?: Address;

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
