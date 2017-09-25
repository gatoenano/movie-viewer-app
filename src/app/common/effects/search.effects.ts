// core
import { Injectable } from '@angular/core';
// ngrx
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
// rxjs
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
// models
import { IMovies } from '../models/movies.model';
// actions
import * as search from '../actions/search.actions';
// services
import { SearchService } from '../services/search.service';

@Injectable()
export class SearchEffects {

  @Effect() search$ = this.actions$
    .ofType(search.ActionTypes.SEARCH)
    .switchMap(text => this.searchService.search(text))
    .map((result: IMovies) => {
      console.log('EFFECT SearchEffects result: ', result);
      return new search.SearchSuccess(result);
    })
    .catch((err: any) => Observable.of({ type: search.ActionTypes.SEARCH_FAIL, payload: err }))
  ;

  constructor(
    private searchService: SearchService,
    private actions$: Actions
  ) { }
}
