import { Action } from '@ngrx/store';
import { OrderItem } from '../../model/models';

export const ADD_TO_CART = 'ADD_TO_CART';
export const CHANGE_ITEM_COUNT = 'CHANGE_ITEM_COUNT';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export class AddToCart implements Action {
  readonly type = ADD_TO_CART;
  constructor(public payload: OrderItem) { }
}

export class ChangeItemCount implements Action {
  readonly type = CHANGE_ITEM_COUNT;
  constructor(public payload: OrderItem) { }
}

export class RemoveItem implements Action {
  readonly type = REMOVE_ITEM;
  constructor(public payload: OrderItem[]) { }
}

export type Actions = AddToCart
  | ChangeItemCount
  | RemoveItem;
