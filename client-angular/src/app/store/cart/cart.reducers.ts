import * as CartActions from './cart.actions';
import { CartState, CART_STATE_RECORD } from './cart.state';
import { Map, Record, List } from 'immutable';
import { OrderItem } from '../../model/order-item';

export const initialState: CartState = new CART_STATE_RECORD() as CartState;

export function cartStateReducer(state = initialState, { type, payload }: any): CartState {
  let payloadOrderItemId;
  let payloadOrderItemIds;
  let payloadOrderItem;
  let payloadBookId;
  let payloadOrderItems;

  switch (type) {
    case CartActions.ADD_TO_CART:
      return state;

    case CartActions.CHANGE_ITEM_COUNT:
      payloadOrderItemId = payload.id;

      payloadOrderItem = { [payloadOrderItemId]: payload };

      return state.merge({
        orderItemIds: state.orderItemIds,
        orderItems: state.orderItems.merge(payloadOrderItem),
      }) as CartState;

    case CartActions.REMOVE_ITEM:
      return state;

    case CartActions.INIT_CART_SUCCESS:
      if (!payload.items) {
        return;
      }

      payloadOrderItemIds = payload.items.map(item => item.id);
      payloadOrderItems = {};
      payload.items.forEach((item) => {
        payloadOrderItems = Object.assign(payloadOrderItems, {
          [item.id]: item,
        });
      });

      return state.merge({
        id: payload.id,
        orderItemIds: payloadOrderItemIds,
        orderItems: payloadOrderItems,
      }) as CartState;

    case CartActions.ADD_TO_CART_SUCCESS:
      payloadOrderItemId = payload.id;
      payloadBookId = payload.book.id;
      payloadOrderItems = state.orderItems.toJS();

      const bookIds = state.orderItemIds
        .map(orderItemId => payloadOrderItems[orderItemId].book.id);

      if (bookIds.includes(payloadBookId)) {
        return state;
      }

      payloadOrderItemIds = state.orderItemIds.push(payloadOrderItemId);

      payloadOrderItem = { [payloadOrderItemId]: payload };

      return state.merge({
        orderItems: state.orderItems.merge(payloadOrderItem),
        orderItemIds: payloadOrderItemIds,
      }) as CartState;

    case CartActions.INIT_CART:
      return state;
  }
}
