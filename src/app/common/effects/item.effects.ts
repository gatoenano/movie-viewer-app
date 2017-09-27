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
import { IMovie } from '../models/movies.model';
// actions
import * as item from '../actions/item.actions';
// services
import { ItemService } from '../services/item.service';

@Injectable()
export class ItemEffects {

  @Effect() item$ = this.actions$
    .ofType(item.ActionTypes.ITEM)
    .distinctUntilChanged()
    .switchMap(id => this.itemService.item(id))
    .map((result: IMovie) => {
      console.log('EFFECT ItemEffects result: ', result);
      return new item.GetItemSuccess(result);
    })
    .catch((err: any) => Observable.of({ type: item.ActionTypes.ITEM_FAIL, payload: err }))
  ;

  constructor(
    private itemService: ItemService,
    private actions$: Actions
  ) { }
}
