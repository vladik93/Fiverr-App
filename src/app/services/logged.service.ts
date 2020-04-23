import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {
  serverUrl = 'http://localhost:3000/api/logged';

  constructor(private http: HttpClient) { }

  getLoggedData = () => {
    return this.http.get(this.serverUrl);
  }
}
