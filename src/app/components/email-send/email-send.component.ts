import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from '../../services/auth.service';
import { EmailService } from '../../services/email.service';
import { StatsService } from 'src/app/services/stats.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-email-send',
  templateUrl: './email-send.component.html',
  styleUrls: ['./email-send.component.css']
})
export class EmailSendComponent implements OnInit {
  list: any[] = [];

  constructor(
    public bsModalRef: BsModalRef,
    private authService: AuthService,
    private emailService: EmailService,
    private statsService: StatsService
    ) { }

  ngOnInit() {
  }

  onRequestConfirm = (form: NgForm) => {
    if (this.authService.loggedIn()) {
      this.emailService.sendEmailRequest(form.value.id, form.value.content)
      .subscribe(
        data => {
          this.statsService.setTotalRequestCount();
          this.bsModalRef.hide();
        },
        error => console.log(error)
      );
    }

  }



}
