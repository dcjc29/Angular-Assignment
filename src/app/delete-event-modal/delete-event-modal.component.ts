import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Event} from '../../event';


@Component({
  selector: 'app-delete-event-modal',
  templateUrl: './delete-event-modal.component.html',
  styleUrls: ['./delete-event-modal.component.css']
})
export class DeleteEventModalComponent{
  @Input() event: Event;
  @Output() confirmationEvent = new EventEmitter();
  closeResult = '';
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

  deleteEvent(){
    console.log('Confirmation Pressed');
    this.confirmationEvent.emit(this.event);
  }
}


