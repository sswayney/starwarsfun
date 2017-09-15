import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from '../../models/person';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class StarwarsApiService {

  private url: string = 'https://swapi.co/api';

  constructor(private http: HttpClient) {
  }

  getPerson(id: string): Promise<Person> {
    return this.http.get<Person>(`${this.url}/people/${id}`)
      .toPromise();
  }

  getSpecies(id: string): Promise<Person> {
    return this.http.get<Person>(`${this.url}/species/${id}`)
      .toPromise();
  }


}
