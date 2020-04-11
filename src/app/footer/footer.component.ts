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

  constructor(private subscrService: SubscriptionService) { }

  ngOnInit() {
  }

  onSubscriptFormSubmit = (form) => {
    // console.log(form.value.email);
    this.subscrService.addSubscription(form.value.email)
    .subscribe(
      data => {
        console.log(data);
        this.subscription.email = '';
      },
      error => console.log(error)
    );

  }

}
