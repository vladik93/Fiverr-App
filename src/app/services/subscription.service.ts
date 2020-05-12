import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from '../models/subscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  serverUrl = 'http://localhost:3000/api/subscriptions';

  constructor(private http: HttpClient) { }

  addSubscription = (email: Subscription) => {
    return this.http.post(this.serverUrl, {email: email});
  }
}

