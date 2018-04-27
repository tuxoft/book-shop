import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.state';

export const getCartState = createFeatureSelector<CartState>('cartState');

export const getCartOrderItems = createSelector(
  getCartState, (state: CartState) => {
    const ids = state.orderItemIds.toJS();
    const orderItems = state.orderItems.toJS();
    return ids.map(id => orderItems[id]);
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
