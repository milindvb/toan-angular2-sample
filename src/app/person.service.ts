import { Injectable } from '@angular/core';
import { People } from './person';
import { PEOPLE } from './mock-people';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  getPeople(): People[] {
    return PEOPLE;
  }
}

