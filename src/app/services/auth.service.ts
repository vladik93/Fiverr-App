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
    if (localStorage.getItem('token')) {
      return !!localStorage.getItem('token');
    }
    if (sessionStorage.getItem('token')) {
      return !!sessionStorage.getItem('token');
    }
     // !! (double negation) returns either true or false if value exists or not
  }                                        //  instead of just returning the value (i.e. the token)

  getToken = () => {
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token');
    }
    if (sessionStorage.getItem('token')) {
      return sessionStorage.getItem('token');
    }
  }

  logoutUser = () => {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      this.router.navigate(['']);
    }
    if (sessionStorage.getItem('token')) {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('username');
      this.router.navigate(['']);
    }
  }

 }
