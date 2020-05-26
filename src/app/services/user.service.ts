import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  serverUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  reconfirmUserByEmail = (email) => {
    return this.http.post(this.serverUrl, {email: email});
  }
}
