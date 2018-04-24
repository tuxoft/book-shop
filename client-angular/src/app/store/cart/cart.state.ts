import * as CartActions from './cart.actions';
import { Map, Record, List } from 'immutable';
import { OrderItem } from '../../model/orderItem';

export interface CartState extends Map<string, any> {
  orderItems: List<OrderItem>;
  orderItemIds: List<number>;
}

export const CART_STATE_RECORD = Record({
  orderItems: List([]),
  orderItemIds: List([]),
});
