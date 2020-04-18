import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Ad } from '../models/ad';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  serverUrl = 'http://localhost:3000/api/ads';

  constructor(private http: HttpClient) { }


  getAdWithCounter = () => {
    const params = new HttpParams().set('mode', 'counter');

    return this.http.get<Ad>(this.serverUrl, {params: params});
  }
}
