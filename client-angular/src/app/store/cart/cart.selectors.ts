import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.state';

export const getCartState = createFeatureSelector<CartState>('cartState');

export const getCartOrderItems = createSelector(
  getCartState, (state: CartState) => {
    if (state && state.orderItemIds) {
      const ids = state.orderItemIds.toJS();
      const orderItems = state.orderItems.toJS();
      return ids.map(id => orderItems[id]);
    }

    return [];
  });

export const getCartOrderItemCount = createSelector(
  getCartState,
  (state: CartState) => {
    if (state && state.orderItemIds) {
      return state.orderItemIds.count();
    }

    return 0;
  },
);

export const getCartId = createSelector(
  getCartState,
  (state: CartState) => {
    if (state) {
      return state.id;
    }

    return null;
  },
);

export const isBookInCart = (searchBookId: number) => createSelector(
  getCartState,
  (state: CartState) => {

    if (state && state.orderItemIds) {
      const orderItems = state.orderItems.toJS();

      const bookIds = state.orderItemIds
        .map(orderItemId => orderItems[orderItemId].book.id);

      return bookIds.contains(searchBookId);
    }

    return false;
  },
);
