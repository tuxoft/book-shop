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
  let orderItems;

  switch (type) {
    case CartActions.ADD_TO_CART:
      payloadOrderItemId = payload.id;
      payloadBookId = payload.book.id;
      orderItems = state.orderItems.toJS();

      const bookIds = state.orderItemIds
        .map(orderItemId => orderItems[orderItemId].book.id);

      if (bookIds.includes(payloadBookId)) {
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

      payloadOrderItem = { [payloadOrderItemId]: payload };

      return state.merge({
        orderItemIds: state.orderItemIds,
        orderItems: state.orderItems.merge(payloadOrderItem),
      }) as CartState;

    case CartActions.REMOVE_ITEM:
      payloadOrderItemId = payload.id;

      payloadOrderItemIds = payload.map(orderItem => orderItem.id);

      const newOrderItemIds = payloadOrderItemIds.reduce(
        (tempOrderItemIds, itemId) => {
          const index = tempOrderItemIds.indexOf(itemId);

          return tempOrderItemIds.splice(index, 1);
        },
        state.orderItemIds);

      const newOrderItems = payloadOrderItemIds.reduce(
        (tempOrderItems, itemId) => tempOrderItems.delete(itemId.toString()),
        state.orderItems);

      return state.merge({
        orderItemIds: newOrderItemIds,
        orderItems: newOrderItems,
      }) as CartState;

    case CartActions.INIT_CART_SUCCESS:
      payloadOrderItemIds = payload.items.map(item => item.id);

      return state.merge({
        id: payload.id,
        orderItemIds: payloadOrderItemIds,
        orderItems: payload.items,
      }) as CartState;
  }
}
