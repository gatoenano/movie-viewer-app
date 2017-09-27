// core
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// models
import { IMovies } from '../../common/models/movies.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  // input to get the movies
  @Input() list: IMovies;
  // event of the selected movie
  @Output() selected = new EventEmitter<number>();

  selectedIndex: number;

  constructor() { }

  ngOnInit(): void {
    console.log('ItemsListComponent loaded');
  }
  // set element to active state
  active(index: number) {
    this.selectedIndex = index;
  }
}
