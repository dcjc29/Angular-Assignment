import { Component, OnInit } from '@angular/core';
import {Event} from '../../event';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  constructor() { }
   event = new  Event(0 , 'Event 1', '2020/04/21', '9:00', '10:00');
   event2 = new  Event(1 , 'Event 2', '2020/04/21', '9:00', '10:00');
   event3 = new  Event(2 , 'Event 3', '2020/04/21', '9:00', '10:00');
  eventsInADay = [];

  ngOnInit(): void {
    this.eventsInADay.push(this.event, this.event2, this.event3);
  }

}
