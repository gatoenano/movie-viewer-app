// core
import { ActionReducer, Action } from '@ngrx/store';
// rxjs
import { Observable } from 'rxjs/Rx';
// models
import { IMovie } from '../models/movies.model';
// actions
import * as item from '../actions/item.actions';

export interface State {
  movie?: IMovie;
  error?: any;
}

export const initialState: State = {
  movie: null,
  error: null
};

export function reducer(state = initialState, action: item.Actions): State {

  switch (action.type) {
    case item.ActionTypes.ITEM_SUCCESS:
      console.log('REDUCER ITEM_SUCCESS: ', action.payload);
      return Object.assign({}, state, {
        movie: action.payload
      });
    case item.ActionTypes.ITEM_FAIL:
      console.log('REDUCER ITEM_FAIL: ', action.payload);
      return Object.assign({}, state, {
        error: action.payload
      });
    default: {
      return state;
    }
  }
}

// item - selectors
export const getItemState = (state: State) => state;
