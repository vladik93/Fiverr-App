import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-sm-login-modal',
  templateUrl: './sm-login-modal.component.html',
  styleUrls: ['./sm-login-modal.component.css']
})
export class SmLoginModalComponent implements OnInit {
  modalRef: BsModalRef;
  modalOpen = true;

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      { class: 'login-modal-sm'}
    );
  }

  onResizeScreen = () => {
    if (window.innerWidth > 767) {

    }
  }
}
