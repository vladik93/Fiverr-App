import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Subscription } from '../models/subscription';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  serverUrl = 'http://localhost:3000/api/emails';

  constructor(private http: HttpClient) { }

  addSubscription = (email: Subscription) => {
    return this.http.post(this.serverUrl, {email: email});
  }

}
