import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../services/subscription.service';
import { Subscription } from '../models/subscription';

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

  constructor(private subscrService: SubscriptionService) { }

  ngOnInit() {
  }

  onSubscriptFormSubmit = (form) => {
    console.log(form.value.email);
    this.subscrService.addSubscription(form.value.email)
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
