import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService implements OnInit {
  serverUrl = 'http://localhost:3000/api/stats';

  private visitCountSource = new BehaviorSubject(null);
  visitCount$ = this.visitCountSource.asObservable();

  private totalRequestSource = new ReplaySubject(1);
  totalRequest$ = this.totalRequestSource.asObservable();

  constructor(private http: HttpClient) {
    this.setInitialRequestCount();
  }

  ngOnInit() {
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
    this.getUserStats()
    .subscribe(
      data => {
        this.totalRequestSource.next(data[0].total_requests);
      }
    );
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
