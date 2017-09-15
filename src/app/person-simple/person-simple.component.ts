import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../models/person";

@Component({
  selector: 'person-simple',
  templateUrl: './person-simple.component.html',
  styleUrls: ['./person-simple.component.css']
})
export class PersonSimpleComponent implements OnInit {

  @Input() simplePerson: Person;

  constructor() { }

  ngOnInit() {
  }

}
