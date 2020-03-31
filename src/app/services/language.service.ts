import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Language } from '../models/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http: HttpClient) { }

  serverUrl = 'http://localhost:3000/api/languages';

  getAllLanguages = (quant?) => {
    const params = new HttpParams().set('limit', quant);

    return this.http.get<Language[]>(this.serverUrl, {params: params} );
  }
}
