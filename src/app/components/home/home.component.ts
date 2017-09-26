// core
import { Component, OnInit } from '@angular/core';
// ngrx
import { Store } from '@ngrx/store';
// rxjs
import { Observable } from 'rxjs/Rx';
// models
import { IMovies } from '../../common/models/movies.model';
// reducers
import * as reducer from '../../common/reducers/search.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // data from store
  list$: Observable<reducer.State>;

  constructor(private store: Store<reducer.State>) {
    // subscribe to data
    this.list$ = store.select(reducer.getSearchState);
  }

  ngOnInit() {
    console.log('Home component loaded');
  }

  // selected movie id
  setCurrentMovie(movieId): void {
    console.log('setCurrentMovie movieId: ', movieId);
  }

}
