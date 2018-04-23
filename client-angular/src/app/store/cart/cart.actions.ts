import { Action } from '@ngrx/store';
import { OrderItem } from '../../model/models';

export const ADD_TO_CART = 'ADD_TO_CART';

export class AddToCart implements Action {
  readonly type = ADD_TO_CART;
  constructor(public payload: OrderItem) { }
}

export type Actions = AddToCart;
