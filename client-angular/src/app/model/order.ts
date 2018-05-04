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
  firstName?: string;
  /**
   * фамилия получателя заказа
   */
  lastName?: string;
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
  shippingAddress?: string;
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
