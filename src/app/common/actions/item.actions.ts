// ngrx
import { Action } from '@ngrx/store';
// models
import { IMovie } from '../models/movies.model';

// set action types
export const ActionTypes = {
  ITEM: '[Item] Get item',
  ITEM_SUCCESS: '[Item] Get item Success',
  ITEM_FAIL: '[Item] Get item Fail'
};

export class GetItem implements Action {
  readonly type = ActionTypes.ITEM;

  constructor(public payload: IMovie['id']) {
    console.log('ACTION GetItem payload: ', payload);
   }
}

export class GetItemSuccess implements Action {
  readonly type = ActionTypes.ITEM_SUCCESS;

  constructor(public payload?: IMovie) {
    console.log('ACTION GetItemSuccess payload: ', payload);
   }
}

export class GetItemFail implements Action {
  readonly type = ActionTypes.ITEM_FAIL;

  constructor(public payload?: any) {
    console.log('ACTION GetItemFail payload: ', payload);
  }
}

// Export an action group
export type Actions
  = GetItem
  | GetItemSuccess
  | GetItemFail;
