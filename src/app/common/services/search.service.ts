// core
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// constants
import { ENDPOINT_URI, FILTER_POPULARITY, API_KEY } from '../constants';

@Injectable()
export class SearchService {
  path = 'search/movie?';

  constructor(private http: Http) { }

  get url() {
    return `${ENDPOINT_URI}${this.path}`;
  }

  all() {
    return this.http.get(this.url)
      .map(res => res.json());
  }

  search(searchCriteria) {
    console.log('service searchCriteria: ', searchCriteria);
    return this.http.get(`${this.url}query=${searchCriteria.payload.text}${FILTER_POPULARITY}${API_KEY}`)
      .map(res => res.json())
      .catch(error => { throw (error); });
  }
}

