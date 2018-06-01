import { Name } from './name';
import { Address } from './address';

/**
 * Адресат.
 */
export interface Recipient {
  /**
   * Имя адресата
   */
  name?: Name;

  /**
   * Адрес адресата
   */
  address?: Address;

  /**
   * Адрес электронной почты
   */
  email?: string;

  /**
   * Телефон
   */
  phoneNumber?: string;
}
