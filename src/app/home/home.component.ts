import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Event} from '../../event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  event = new  Event('0', 'Sample Event 1', new Date('2020-04-30'), {hour: 15, minute: 30}, {hour: 16, minute: 30});
  event2 = new  Event('1', 'Sample Event 2', new Date('2020-05-02'), {hour: 22, minute: 30}, {hour: 23, minute: 30});
  event3 = new  Event('2', 'Sample Event 3', new Date('2020-05-05'), {hour: 18, minute: 2}, {hour: 18, minute: 3});
  eventList = [];
  eventsInADay: Event[];
  selectedDate =  new Date();
  nextEvent: Event;
  duration: {hours: number, minute: number, seconds: number};
  remaining: {hours: number, minute: number, seconds: number};
  constructor() { }

  ngOnInit(): void {
    this.eventList.push(this.event, this.event2, this.event3);
    this.updateData();
  }

  receiveDate($event) {
    this.selectedDate = $event;
    this.updateData();
  }

  receiveNewEvent($event){
    this.eventList.push($event);
    this.sortEventList();
    this.updateData();
  }

  deleteEvent($event){
    this.eventList.splice( this.eventList.indexOf($event), 1 );
    this.updateData();
  }

  updateEvent($event){
    console.log('Home Update Event');
    const index = this.eventList.findIndex(item => item.id === $event.id);
    this.eventList.splice(index, 1, $event);
    this.updateData();
  }

  sortEventList(){
    // tslint:disable-next-line:prefer-const only-arrow-functions
    this.eventList = this.eventList.sort(function(a, b) {
      if (a.day < b.day) {
        return -1;
      }
      if (a.day > b.day) {
        return 1;
      }
      if (a.startTime.hour > b.startTime.hour) {
        return 1;
      }
      if (a.startTime.hour < b.startTime.hour) {
        return -1;
      }
      if (a.startTime.minute > b.startTime.minute) {
        return 1;
      }
      if (a.startTime.minute < b.startTime.minute) {
        return -1;
      }
    });

  }

  updateData(){
    this.sortEventList();
    // tslint:disable-next-line:prefer-const
    let events = [];
    for (const event of this.eventList){
      if (event.day.toDateString() === this.selectedDate.toDateString()){
        events.push(event);
      }
    }
    this.eventsInADay = events;
    this.nextEvent = this.eventList[0];

  }
}
