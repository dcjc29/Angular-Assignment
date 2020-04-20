import { Component, OnInit } from '@angular/core';
import {Event} from '../../event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  event = new  Event('0', 'Event 1', new Date('2020-04-21'), {hour: 15, minute: 30}, {hour: 16, minute: 30});
  event2 = new  Event('1', 'Event 2', new Date('2020-04-21'), {hour: 22, minute: 30}, {hour: 23, minute: 30});
  event3 = new  Event('2', 'Event 3', new Date('2020-04-19'), {hour: 15, minute: 40}, {hour: 15, minute: 50});
  eventList = [];
  eventsInADay: Event[];
  selectedDate =  new Date();
  nextEvent: Event;
  constructor() { }

  ngOnInit(): void {
    this.eventList.push(this.event, this.event2, this.event3);
    this.sortEventList();
    this.nextEvent = this.eventList[0];
    // tslint:disable-next-line:prefer-const
    let events = [];
    for (const event of this.eventList){
      if (event.day.toDateString() === this.selectedDate.toDateString()){
        events.push(event);
      }
    }
    this.eventsInADay = events;
  }

  receiveDate($event) {
    this.selectedDate = $event;
    // tslint:disable-next-line:prefer-const
    let events = [];
    for (const event of this.eventList){
      if (event.day.toDateString() === this.selectedDate.toDateString()){
        events.push(event);
      }
    }
    this.eventsInADay = events;
  }

  receiveNewEvent($event){
    this.eventList.push($event);
    this.sortEventList();
  }

  deleteEvent($event){
    // tslint:disable-next-line:prefer-const
    this.eventList.splice( this.eventList.indexOf($event), 1 );
    this.sortEventList();
    console.log(this.eventList);
    this.nextEvent = this.eventList[0];
    // tslint:disable-next-line:prefer-const
    let events = [];
    for (const event of this.eventList){
      if (event.day.toDateString() === this.selectedDate.toDateString()){
        events.push(event);
      }
    }
    this.eventsInADay = events;
  }

  updateEvent($event){
    console.log('Home Update Event');
    const index = this.eventList.findIndex(item => item.id === $event.id);
    this.eventList.splice(index, 1, $event);

    this.sortEventList();
    console.log(this.eventList);
    this.nextEvent = this.eventList[0];
    // tslint:disable-next-line:prefer-const
    let events = [];
    for (const event of this.eventList){
      if (event.day.toDateString() === this.selectedDate.toDateString()){
        events.push(event);
      }
    }
    this.eventsInADay = events;
  }

  sortEventList(){
    // tslint:disable-next-line:only-arrow-functions
    const list = this.eventList.sort(function(a, b){
      return a.day - b.day;
    });
    this.eventList = list;
    this.nextEvent = this.eventList[0];
  }

}
