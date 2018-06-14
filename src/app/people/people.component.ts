import { Component, OnInit } from '@angular/core';
import { People } from '../person';
import { PEOPLE } from '../mock-people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'] 
})
export class PeopleComponent implements OnInit {

  people = PEOPLE;
  selectedPerson: People;
  
  constructor() { }

  ngOnInit() {
  }
  

onSelect(person: People): void {
  this.selectedPerson = person;
}
}
