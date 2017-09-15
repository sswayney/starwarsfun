import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Resource } from "./resource.enum";

import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";

/**
 * Service to consume the swapi star wars api
 */
@Injectable()
export class StarwarsApiService {

  private url: string = 'https://swapi.co/api';

  /**
   * Maps a Resource enum to its resource url string
   * @type {Map<number, string>}
   */
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
   * Generic Get for resources at base api url
   * @param resource
   * @param id
   * @returns {Promise<T>}
   */
  get<T>(resource: Resource, id: string): Observable<T> {
    return this.http.get<T>(`${this.url}/${this.ResourceName.get(+resource.valueOf())}/${id}`);
  }

  getUrl<T>(url: string): Observable<T> {
    return this.http.get<T>(`${url}`);
  }

}
