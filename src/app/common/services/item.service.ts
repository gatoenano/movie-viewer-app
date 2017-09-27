// core
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// constants
import { ENDPOINT_URI, API_KEY } from '../constants';

@Injectable()
export class ItemService {
  path = 'movie/';

  constructor(private http: Http) { }

  get url() {
    return `${ENDPOINT_URI}${this.path}`;
  }

  all() {
    return this.http.get(this.url)
      .map(res => res.json());
  }

  item(item) {
    console.log('SERVICE ItemService item: ', item);
    return this.http.get(`${this.url}${item.payload}?${API_KEY}`)
      .map(res => res.json())
      .catch(error => { throw (error); });
  }
}

