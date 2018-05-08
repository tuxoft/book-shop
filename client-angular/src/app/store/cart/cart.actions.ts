import { Action } from '@ngrx/store';
import { OrderItem, Cart } from '../../model/models';

export const ADD_TO_CART = 'ADD_TO_CART';
export const CHANGE_ITEM_COUNT = 'CHANGE_ITEM_COUNT';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const INIT_CART = 'INIT_CART';
export const INIT_CART_SUCCESS = 'INIT_CART_SUCCESS';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS';

export class AddToCart implements Action {
  readonly type = ADD_TO_CART;
  constructor(public payload: OrderItem) { }
}

export class AddToCartSuccess implements Action {
  readonly type = ADD_TO_CART_SUCCESS;
  constructor(public payload: any) { }
}

export class ChangeItemCount implements Action {
  readonly type = CHANGE_ITEM_COUNT;
  constructor(public payload: OrderItem) { }
}

export class RemoveItem implements Action {
  readonly type = REMOVE_ITEM;
  constructor(public payload: OrderItem[]) { }
}

export class RemoveItemSuccess implements Action {
  readonly type = REMOVE_ITEM_SUCCESS;
  constructor(public payload: number[]) { }
}

export class InitCart implements Action {
  readonly type = INIT_CART;
  constructor() { }
}

export class InitCartSuccess implements Action {
  readonly type = INIT_CART_SUCCESS;
  constructor(public payload: Cart) { }
}

export type Actions = AddToCart
  | ChangeItemCount
  | RemoveItem
  | InitCart
  | InitCartSuccess
  | AddToCartSuccess
  | RemoveItemSuccess;
