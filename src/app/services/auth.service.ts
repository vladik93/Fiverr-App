import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Subject } from 'rxjs';

const headers = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  serverUrl = 'http://localhost:3000/api/auth';
  public usernameSource = new Subject<string>();
  public username$ = this.usernameSource.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  registerUser = (body) => {
    return this.http.post<User>(`${this.serverUrl}/register`, body);
  }

  loginUser = (body) => {
    return this.http.post<any>(`${this.serverUrl}/login`, body);
  }

  loggedIn = () => {
    return !!localStorage.getItem('token'); // !! (double negation) returns either true or false if value exists or not
  }                                        //  instead of just returning the value (i.e. the token)

  getToken = () => {
    return localStorage.getItem('token');
  }

  logoutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigate(['']);
  }

 }
