import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {
  serverUrl = 'http://localhost:3000/api/logged';
  public userDataSouce = new Subject();
  userData$ = this.userDataSouce.asObservable();

  constructor(private http: HttpClient) { }

  getLoggedUserData = () => {
    return this.http.get<any>(`${this.serverUrl}/userInfo`);
  }

  getUsername = () => {
    return this.http.get<any>(`${this.serverUrl}/userInfo`)
    .subscribe(
      data => this.userDataSouce.next(data),
      error => console.log(error)
    );
  }


}
