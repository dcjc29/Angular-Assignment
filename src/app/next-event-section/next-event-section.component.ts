import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {Event} from '../../event';

@Component({
  selector: 'app-next-event-section',
  templateUrl: './next-event-section.component.html',
  styleUrls: ['./next-event-section.component.css']
})
export class NextEventSectionComponent implements OnInit, OnChanges{

  @Input() nextEvent: Event;
  @Output() autoDeleteEvent = new EventEmitter();
  timeRemainingHour: number;
  timeRemainingMinute: number;
  timeRemainingSeconds: number;
  timeDuratingHour: number;
  timeDuratingMinute: number;
  timeDuratingSeconds: number;
  intervalId1: number;
  intervalId2: number;
  constructor() {

  }

  ngOnInit(): void {
    //this.calculateTimeRemaining();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['nextEvent']) {
        clearInterval(this.intervalId1);
        clearInterval(this.intervalId2);
        this.calculateTimeRemaining();
    }
  }
  calculateTimeRemaining() {
    // tslint:disable-next-line:prefer-const
    let currentDate = new Date();
    // tslint:disable-next-line:prefer-const
    let eventStart = new Date(this.nextEvent.day.getFullYear(), this.nextEvent.day.getMonth(), this.nextEvent.day.getDate(),
      this.nextEvent.startTime.hour, this.nextEvent.startTime.minute);
    // tslint:disable-next-line:prefer-const
    let diff = (eventStart.getTime() - currentDate.getTime()) / (1000 * 3600);
    this.timeDuratingHour = this.nextEvent.endTime.hour - this.nextEvent.startTime.hour;
    this.timeDuratingMinute = this.nextEvent.endTime.minute - this.nextEvent.startTime.minute;
    if (this.timeDuratingMinute < 0){
      this.timeDuratingMinute = (this.nextEvent.endTime.minute + 60) - this.nextEvent.startTime.minute;
      this.timeDuratingHour -= 1;
    }
    this.timeDuratingSeconds = 0;
    console.log(eventStart.getTime() - currentDate.getTime());
    console.log(diff);
    this.timeRemainingHour = Math.floor(diff % 3600);
    this.timeRemainingMinute = Math.floor(diff % 60);
    this.timeRemainingSeconds = 0;
    this.setIntrvl();
  }

  countdown() {
    this.timeRemainingSeconds -= 1;
    if (this.timeRemainingSeconds === -1){
      this.timeRemainingSeconds = 59;
      this.timeRemainingMinute -= 1;
      if (this.timeRemainingMinute === -1){
        this.timeRemainingHour -= 1;
        this.timeRemainingMinute = 59;
        if (this.timeRemainingHour === -1){
          clearInterval(this.intervalId1);
          this.timeRemainingHour = 0;
          this.timeRemainingMinute = 0;
          this.timeRemainingSeconds = 0;
          this.setautoDeleteIntrvl();
        }
      }
    }
  }

  countdownDuration(){
    this.timeDuratingSeconds -= 1;
    if (this.timeDuratingSeconds === -1){
      this.timeDuratingSeconds = 59;
      this.timeDuratingMinute -= 1;
      if (this.timeDuratingMinute === -1){
        this.timeDuratingHour -= 1;
        this.timeDuratingMinute = 59;
        if (this.timeDuratingHour === -1){
          clearInterval(this.intervalId2);
          this.autoDeleteEvent.emit(this.nextEvent);
          this.ngOnInit();
        }
      }
    }
  }


  setIntrvl(){
    this.intervalId1 = setInterval(() => this.countdown(), 1000);
  }

  setautoDeleteIntrvl(){
    this.intervalId2 = setInterval(() => this.countdownDuration(), 1000);
  }


}
