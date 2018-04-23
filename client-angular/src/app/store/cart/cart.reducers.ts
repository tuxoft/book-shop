import * as CartActions from './cart.actions';
import { CartState, CART_STATE_RECORD } from './cart.state';
import { Map, Record, List } from 'immutable';
import { OrderItem } from '../../model/orderItem';

export const initialState: CartState = new CART_STATE_RECORD() as CartState;

export function cartStateReducer(state = initialState, { type, payload }: any): CartState {
  switch (type) {
    case CartActions.ADD_TO_CART:
      return state.merge({
        orderItems: payload,
      }) as CartState;
  }
}
