import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {
  serverUrl = 'http://localhost:3000/api/logged';
  public usernameSource = new Subject();
  username$ = this.usernameSource.asObservable();

  constructor(private http: HttpClient) { }

  getLoggedUserData = () => {
    return this.http.get<any>(`${this.serverUrl}/userInfo`);
  }

  setUsername = (username: string) => {
   this.usernameSource.next(username);
  }


}
