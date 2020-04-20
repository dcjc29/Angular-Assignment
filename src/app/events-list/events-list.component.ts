import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Event} from '../../event';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  @Input() eventsInADay: Event[];
  @Input() selectedDate: Date;
  @Output() deleteEventEvent = new EventEmitter();
  @Output() updateEventEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}
  deleteAEvent($event){
    console.log('EventList Delete');
    this.deleteEventEvent.emit($event);
  }

  updateAEvent($event){
    console.log('Event List Update');
    console.log($event);
    this.updateEventEvent.emit($event);
  }
}
