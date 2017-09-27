// core
import { Component, OnInit } from '@angular/core';
// ngrx
import { Store } from '@ngrx/store';
// rxjs
import { Observable } from 'rxjs/Rx';
// models
import { IMovies } from '../../common/models/movies.model';
// actions
import * as itemActions from '../../common/actions/item.actions';
// reducers
import * as searchReducer from '../../common/reducers/search.reducer';
import * as itemReducer from '../../common/reducers/item.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // data from store
  list$: Observable<searchReducer.State>;
  item$: Observable<itemReducer.State>;

  constructor(
    private searchStore: Store<searchReducer.State>,
    private itemStore: Store<itemReducer.State>
  ) {
    // subscribe to data
    this.list$ = searchStore.select(searchReducer.getSearchState);
    this.item$ = itemStore.select(itemReducer.getItemState);
  }

  ngOnInit(): void {
    console.log('HomeComponent loaded');
  }

  // selected item id
  showItemDetails(itemId: number): void {
    console.log('HomeComponent showItemDetails itemId: ', itemId);
    if (itemId) {
      this.itemStore.dispatch(new itemActions.GetItem(itemId));
    }
  }

}
