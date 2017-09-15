import { Component, OnInit } from '@angular/core';

import { StarwarsApiService } from '../services/starwars-api.service';
import {Person} from "../models/person";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  person: Person;

  constructor(private swApiService: StarwarsApiService) { }

  ngOnInit() {
    this.swApiService.get("1").then(person => this.person = person);
  }

}
