import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  serverUrl = 'http://localhost:3000/api/emails';

  constructor(private http: HttpClient) { }

  sendEmailRequest = (transId: Number, content) => {
    return this.http.post(`${this.serverUrl}/${transId}`, content);
  }

}
