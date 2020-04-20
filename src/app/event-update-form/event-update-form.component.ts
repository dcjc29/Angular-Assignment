import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalDismissReasons, NgbDateStruct, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Event} from '../../event';

@Component({
  selector: 'app-event-update-form',
  templateUrl: './event-update-form.component.html',
  styleUrls: ['./event-update-form.component.css']
})
export class EventUpdateFormComponent{
  closeResult = '';
  @Input() event: Event;
  model: NgbDateStruct;
  startTime = {hour: 13, minute: 30};
  endTime = {hour: 14, minute: 30};
  eventName = '';

  @Output() updatingEvent =  new EventEmitter();
  constructor(private modalService: NgbModal) {
  }

  open(content) {
    this.eventName = this.event.name;
    this.startTime = this.event.startTime;
    this.endTime = this.event.endTime;
    this.model = {year: this.event.day.getFullYear(), month: this.event.day.getMonth() + 1, day: this.event.day.getDate()};
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  updateEvent(){
    console.log('Update Form');
    const date = new Date(this.model.year, this.model.month - 1, this.model.day);
    const e = new Event(this.event.id, this.eventName, date, this.startTime, this.endTime);
    console.log(e);
    this.updatingEvent.emit(e);
  }
}
