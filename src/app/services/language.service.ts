import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Language } from '../models/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http: HttpClient) { }

  serverUrl = 'http://localhost:3000/api/languages';

  getAllLanguages = () => {
    return this.http.get<Language[]>(this.serverUrl);
  }
}
