import * as CartActions from './cart.actions';
import { CartState, CART_STATE_RECORD } from './cart.state';
import { Map, Record, List } from 'immutable';
import { OrderItem } from '../../model/orderItem';

export const initialState: CartState = new CART_STATE_RECORD() as CartState;

export function cartStateReducer(state = initialState, { type, payload }: any): CartState {
  let payloadOrderItemId;
  let payloadOrderItemIds;
  let payloadOrderItem;

  switch (type) {
    case CartActions.ADD_TO_CART:
      payloadOrderItemId = payload.id;

      // return the same state if the item is already included.
      if (state.orderItemIds.includes(payloadOrderItemId)) {
        return state;
      }

      payloadOrderItemIds = state.orderItemIds.push(payloadOrderItemId);

      payloadOrderItem = { [payloadOrderItemId]: payload };

      return state.merge({
        orderItems: state.orderItems.merge(payloadOrderItem),
        orderItemIds: payloadOrderItemIds,
      }) as CartState;

    case CartActions.CHANGE_ITEM_COUNT:
      payloadOrderItemId = payload.id;

      // return the same state if the item is already included.
      // if (state.orderItemIds.includes(payloadOrderItemId)) {
      //   return state;
      // }

      payloadOrderItem = { [payloadOrderItemId]: payload };

      return state.merge({
        orderItemIds: state.orderItemIds,
        orderItems: state.orderItems.merge(payloadOrderItem),
      }) as CartState;

    case CartActions.REMOVE_ITEM:
      payloadOrderItemId = payload.id;

      // return the same state if the item is already included.
      // if (state.orderItemIds.includes(payloadOrderItemId)) {
      //   return state;
      // }

      // payloadOrderItemIds = state.orderItemIds.push(payloadOrderItemId);
      payloadOrderItemIds = payload.map(orderItem => orderItem.id);

      let newOrderItemIds;

      payloadOrderItemIds.forEach((itemId) => {
        const index = state.orderItemIds.indexOf(itemId);
        newOrderItemIds = state.orderItemIds.splice(index, 1);
      });

      return state.merge({
        orderItemIds: newOrderItemIds,
        orderItems: state.orderItems.deleteIn(payloadOrderItemIds),
      }) as CartState;
  }
}
