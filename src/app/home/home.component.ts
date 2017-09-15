import { Component, OnInit } from '@angular/core';
import { LocalStorage } from 'ngx-store';

import { StarwarsApiService } from '../services/starwars-api/starwars-api.service';
import {Person} from "../models/person";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  person: Person;
  @LocalStorage() username: string = '';

  constructor(private swApiService: StarwarsApiService) { }

  ngOnInit() {
    this.swApiService.getPerson("1").then(person => this.person = person);
  }

}
