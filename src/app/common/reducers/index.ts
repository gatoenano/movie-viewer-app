// ngrx
import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { createSelector } from 'reselect';
// reducers
import * as search from './search.reducer';


export interface State {
  search: search.State;
}

const reducers = {
  search: search.reducer
};

// const globalReducer: ActionReducer<any> = combineReducers(reducers);
const globalReducer: ActionReducer<any> = compose(storeFreeze, combineReducers)(reducers);

export function reducer(state: any, action: any) {
  console.log('REDUCER MAIN function state: ', state);
  console.log('REDUCER MAIN function action: ', action);
  return globalReducer(state, action);
}

// search - selectors
export const getState = (state: State) => state.search;
