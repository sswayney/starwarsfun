import {Component, OnInit} from '@angular/core';
import {LocalStorage} from 'ngx-store';

import {StarwarsApiService} from '../services/starwars-api/starwars-api.service';
import {Person} from "../models/person";
import {Resource} from "../services/starwars-api/resource.enum";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  person: Person;
  @LocalStorage() username: string = '';

  constructor(private swApiService: StarwarsApiService) {
  }

  ngOnInit() {
    //this.swApiService.get<Person>(Resource.PERSON, "1").toPromise().then(person => this.person = person);
    this.swApiService.get<Person>(Resource.PERSON, "1")
      .subscribe(pers => {
        this.swApiService.getUrl(pers.homeworld)
          .subscribe(hw => {

            pers.homeworld = hw;
            this.person = pers;
          })
      });
  }

}
