import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  serverUrl = 'http://localhost:3000/api/stats';

  constructor(private http: HttpClient) { }

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
}
