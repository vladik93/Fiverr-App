import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef, ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-sm-login-modal',
  templateUrl: './sm-login-modal.component.html',
  styleUrls: ['./sm-login-modal.component.css']
})
export class SmLoginModalComponent implements OnInit {
  modalRef: BsModalRef;
  @ViewChild('loginModal') loginModal: ModalDirective;

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
    if (window.innerWidth > 767) {
      this.loginModal.hide();
    }
  }

  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(
  //     template,
  //     { class: 'login-modal-sm'}
  //   );
  // }

  onResizeScreen = (e) => {
    console.log(e);
  }
}
