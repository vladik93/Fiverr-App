import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  serverUrl = 'http://localhost:3000/api/stats';

  constructor(private http: HttpClient) { }

  addUserStats = () => {
    return this.http.post(this.serverUrl, null);
  }
}
