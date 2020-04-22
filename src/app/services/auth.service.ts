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

  loginUser = (body) => {
    return this.http.post<any>(`${this.serverUrl}/login`, body);
  }

  loggedIn = () => {
    return !!localStorage.getItem('token'); // !! (double negation) returns either true or false if value exists or not
  }                                        //  instead of just returning the value (i.e. the token)
}
