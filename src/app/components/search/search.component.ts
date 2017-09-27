// core
import { Component, OnInit, ElementRef, Input } from '@angular/core';
// ngrx
import { Store } from '@ngrx/store';
// rxjs
import { Observable } from 'rxjs/Rx';
// actions
import * as searchActions from '../../common/actions/search.actions';
// reducers
import * as reducer from '../../common/reducers/search.reducer';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private el: ElementRef,
    private store: Store<reducer.State>
  ) { }

  ngOnInit(): void {
    console.log('SearchComponent loaded');
    // initialize the listener for the typed text
    this.search();
  }

  // Gets the searched text in the search box
  search(): void {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe((text: string) => {
        console.log('SearchComponent searched text: ', text);
        if (text) {
          this.store.dispatch(new searchActions.Search({ text }));
        }
      });
  }
}
