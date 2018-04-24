import * as CartActions from './cart.actions';
import { CartState, CART_STATE_RECORD } from './cart.state';
import { Map, Record, List } from 'immutable';
import { OrderItem } from '../../model/orderItem';

export const initialState: CartState = new CART_STATE_RECORD() as CartState;

export function cartStateReducer(state = initialState, { type, payload }: any): CartState {
  let payloadOrderItemId;
  let payloadOrderItemIds;

  switch (type) {
    case CartActions.ADD_TO_CART:
      payloadOrderItemId = payload.book.id;

      // return the same state if the item is already included.
      if (state.orderItemIds.includes(payloadOrderItemId)) {
        return state;
      }

      payloadOrderItemIds = state.orderItemIds.push(payloadOrderItemId);

      return state.merge({
        orderItems: state.orderItems.push(payload),
        orderItemIds: payloadOrderItemIds,
      }) as CartState;
  }
}
