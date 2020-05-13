import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Subject, ReplaySubject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  serverUrl = 'http://localhost:3000/api/stats';

  private visitCountSource = new BehaviorSubject(null);
  visitCount$ = this.visitCountSource.asObservable();

  private totalRequestSource = new BehaviorSubject(null);
  totalRequest$ = this.totalRequestSource.asObservable();
  initValue;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.setInitialRequestCount();
  }



  addUserStats = () => {
    return this.http.post(this.serverUrl, null);
  }

  getUserStats = () => {
    return this.http.get(this.serverUrl);
  }


  updateVisitCount = () => {
    const params = new HttpParams().set('prop', 'visited');

    return this.http.put(this.serverUrl, null, {params: params});
  }

  setInitialRequestCount = () => {
    if (this.authService.loggedIn()) {
      this.getUserStats()
      .subscribe(
        data => {
          if (!!data) {
            this.totalRequestSource.next(data[0].total_requests);
            console.log(data);
          }
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  setTotalRequestCount = () => {
    this.getUserStats()
    .subscribe(
      data => {
        this.totalRequestSource.next(data[0].total_requests++);
      }
    );
  }
}
