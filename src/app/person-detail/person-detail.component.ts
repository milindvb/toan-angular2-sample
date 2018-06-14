import { Component, OnInit, Input } from '@angular/core';
import { People } from '../person';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  @Input() person: People;
  
  constructor() { }

  ngOnInit() {
  }

}
