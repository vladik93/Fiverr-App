import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from '../../services/auth.service';
import { EmailService } from '../../services/email.service';


@Component({
  selector: 'app-email-send',
  templateUrl: './email-send.component.html',
  styleUrls: ['./email-send.component.css']
})
export class EmailSendComponent implements OnInit {
  list: any[] = [];

  constructor(public bsModalRef: BsModalRef, private authService: AuthService, private emailService: EmailService) { }

  ngOnInit() {
  }

  onRequestConfirm = (id) => {
    if (this.authService.loggedIn()) {
      this.emailService.sendEmailRequest(id)
      .subscribe(
        data => {
          console.log(data);
          this.bsModalRef.hide();
        },
        error => console.log(error)
      );
    }
  }

}
