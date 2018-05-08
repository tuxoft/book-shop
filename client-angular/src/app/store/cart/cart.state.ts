import * as CartActions from './cart.actions';
import { Map, Record, List } from 'immutable';
import { OrderItem } from '../../model/order-item';

export interface CartState extends Map<string, any> {
  id?: string;
  orderItems: Map<string, OrderItem>;
  orderItemIds: List<number>;
}

export const CART_STATE_RECORD = Record({
  id: '',
  orderItems: Map({}),
  orderItemIds: List([]),
});
