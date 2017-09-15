import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {People} from '../models/people';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class StarwarsApiService {

  private url: string = 'https://swapi.co/api';

  constructor(private http: HttpClient) {
  }

  get(id: string): Promise<People> {
    return this.http.get<People>(`${this.url}/people/${id}`)
      .toPromise();
  }

}
