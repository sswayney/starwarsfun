import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from '../models/person';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class StarwarsApiService {

  private url: string = 'https://swapi.co/api';

  constructor(private http: HttpClient) {
  }

  get(id: string): Promise<Person> {
    return this.http.get<Person>(`${this.url}/people/${id}`)
      .toPromise();
  }

}
