// ngrx
import { Action } from '@ngrx/store';
// models
import { ICurrentSearch } from '../models/search.model';
import { IMovies } from '../models/movies.model';

// set action types
export const ActionTypes = {
  SEARCH: '[Search] Searching',
  SEARCH_SUCCESS: '[Search] Search Success',
  SEARCH_FAIL: '[Search] Search Fail',
  SEARCH_CLEAR: '[Search] Search Clear'
};

export class Search implements Action {
  readonly type = ActionTypes.SEARCH;

  constructor(public payload: ICurrentSearch) {
    console.log('ACTION Search payload: ', payload);
   }
}

export class SearchSuccess implements Action {
  readonly type = ActionTypes.SEARCH_SUCCESS;

  constructor(public payload?: IMovies) {
    console.log('ACTION SearchSuccess payload: ', payload);
   }
}

export class SearchFail implements Action {
  readonly type = ActionTypes.SEARCH_FAIL;

  constructor(public payload?: any) {
    console.log('ACTION SearchFail payload: ', payload);
  }
}

export class ClearSearch implements Action {
  readonly type = ActionTypes.SEARCH_CLEAR;

  constructor(public payload?: any) {
    console.log('ACTION SearchClear payload: ', payload);
  }
}

// Export an action group
export type Actions
  = Search
  | SearchSuccess
  | ClearSearch;
