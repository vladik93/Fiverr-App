import { Component, OnInit } from '@angular/core';
import { Subscription } from '../models/subscription';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  subscription: Subscription = {
    id: null,
    email: ''
  };

  alert;
  dismissible = true;

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }

  onSubscriptFormSubmit = (form) => {
    console.log(form.value.email);
    this.emailService.addSubscription(form.value.email)
    .subscribe(
      data => {
        this.subscription.email = '';
        this.alert = 'Thank you for subscribing!';
      },
      error => console.log(error)
    );
  }

  onAlertClosed = (alert) => {
    this.alert = null;
  }

  onEmailInput = () => {
    this.alert = null;
  }

}
