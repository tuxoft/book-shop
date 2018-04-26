import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.state';

export const getCartState = createFeatureSelector<CartState>('cartState');

export const getCartOrderItems = createSelector(
  getCartState, (state: CartState) => state.orderItemIds
    .map(id => state.orderItems[id]),
);

export const getCartOrderItemCount = createSelector(
  getCartState,
  (state: CartState) => {
    if (state && state.orderItemIds) {
      return state.orderItemIds.count();
    }

    return 0;
  },
);
