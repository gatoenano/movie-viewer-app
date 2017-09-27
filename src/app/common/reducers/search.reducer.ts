// core
import { ActionReducer, Action } from '@ngrx/store';
// rxjs
import { Observable } from 'rxjs/Rx';
// models
import { ICurrentSearch } from '../models/search.model';
import { IMovies } from '../models/movies.model';
// actions
import * as search from '../actions/search.actions';

export interface State {
  text: ICurrentSearch;
  movies?: IMovies;
  error?: any;
}

export const initialState: State = {
  text: null,
  movies: null,
  error: null
};

export function reducer(state = initialState, action: search.Actions): State {

  switch (action.type) {
    case search.ActionTypes.SEARCH_SUCCESS:
      console.log('REDUCER SEARCH_SUCCESS: ', action.payload);
      return Object.assign({}, state, {
        movies: action.payload.results
      });
    case search.ActionTypes.SEARCH_FAIL:
      console.log('REDUCER SEARCH_FAIL: ', action.payload);
      return Object.assign({}, state, {
        text: null,
        error: action.payload
      });
    case search.ActionTypes.SEARCH_CLEAR:
      console.log('REDUCER SEARCH_CLEAR: ', action.payload);
      return Object.assign({}, state, {
        text: null
      });
    default: {
      return state;
    }
  }
}

// search - selectors
export const getSearchState = (state: State) => state;
