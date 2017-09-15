import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Resource } from "./resource.enum";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class StarwarsApiService {

  private url: string = 'https://swapi.co/api';

  private ResourceName: Map<number, string> = new Map<number, string>([
    [Resource.FILM, 'films'],
    [Resource.PERSON, 'people'],
    [Resource.PLANET, 'planets'],
    [Resource.SPECIES, 'species'],
    [Resource.STARSHIP, 'starships'],
    [Resource.VEHICLE, 'vehicles']
  ]);

  constructor(private http: HttpClient) {
  }

  /**
   *
   * @param resource
   * @param id
   * @returns {Promise<T>}
   */
  get<T>(resource: Resource, id: string): Promise<T> {
    return this.http.get<T>(`${this.url}/${this.ResourceName.get(+resource.valueOf())}/${id}`)
      .toPromise();
  }

}
