import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {Event} from '../../event';

@Component({
  selector: 'app-event-add-form',
  templateUrl: './event-add-form.component.html',
  styleUrls: ['./event-add-form.component.css']
})
export class EventAddFormComponent {
  @Input() selectedDate: Date;
  closeResult = '';
  model: NgbDateStruct;
  startTime = {hour: 13, minute: 30};
  endTime = {hour: 14, minute: 30};
  eventName = 'Dureksha';

  @Output() addNewEventEvent = new EventEmitter();

  constructor(private modalService: NgbModal) {}


  open(content) {
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

  addEvent(){
   const date = new Date(this.model.year, this.model.month - 1, this.model.day);
   const event = new Event(new Date().toString(), this.eventName, date, this.startTime, this.endTime);
   this.addNewEventEvent.emit(event);
  }

}
