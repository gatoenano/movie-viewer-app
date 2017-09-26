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
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // data from store
  movies$: Observable<reducer.State>;

  constructor(private store: Store<reducer.State>) {
    // subscribe to data
    this.movies$ = store.select(reducer.getSearchState);
  }

  ngOnInit() {
    console.log('NavbarComponent loaded');
  }

}
