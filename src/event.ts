import {NgbDate} from '@ng-bootstrap/ng-bootstrap';

export class Event {

  constructor(
    public id: string,
    public name: string,
    public day: Date,
    public startTime: { hour: number; minute: number },
    public endTime: { hour: number; minute: number }
  ) {  }

}
