// ngrx
import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
// reducers
import * as search from './search.reducer';
import * as item from './item.reducer';

export interface State {
  search: search.State;
  item: item.State;
}

const reducers = {
  search: search.reducer,
  item: item.reducer
};

// const globalReducer: ActionReducer<any> = combineReducers(reducers);
const globalReducer: ActionReducer<any> = compose(storeFreeze, combineReducers)(reducers);

export function reducer(state: any, action: any) {
  console.log('GLOBAL REDUCER state: ', state);
  console.log('GLOBAL REDUCER action: ', action);
  return globalReducer(state, action);
}

// search - selectors
export const getState = (state: State) => state.search;
