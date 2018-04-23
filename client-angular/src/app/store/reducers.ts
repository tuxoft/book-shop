import { ActionReducerMap } from '@ngrx/store';
import { CartState } from './cart/cart.state';
import { cartStateReducer } from './cart/cart.reducers';

export interface StoreState {
  cartState: CartState;
}

export const storeReducers: ActionReducerMap<StoreState> = {
  cartState: cartStateReducer,
};
