import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

const headers = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  serverUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) { }

  registerUser = (body) => {
    return this.http.post<User>(`${this.serverUrl}/register`, body);
  }
}
