// core
import { Component, OnInit, Input } from '@angular/core';
// models
import { IMovie } from '../../common/models/movies.model';
// constants
import { ENDPOINT_IMAGE_URI } from '../../common/constants';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  get imageUri() {
    return ENDPOINT_IMAGE_URI;
  }
  // input to get the selected movie
  @Input() item: IMovie;

  constructor() { }

  ngOnInit(): void {
    console.log('ItemDetailsComponent loaded');
  }

}
