import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Translator } from '../models/translator';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  constructor(private http: HttpClient) { }

  serverUrl = 'http://localhost:3000/api/translators';

  private featureTranslatorSource: Subject<Translator[]> = new Subject(); // Works for interacting between two sibling/unrelated
  featureTranslator$ = this.featureTranslatorSource.asObservable();       // components

  private collapseBoolSource = new BehaviorSubject(true);
  currentBoolean$ = this.collapseBoolSource.asObservable();



  getTranslatorsByLanguage = (lang_id, quant) => {
    const paramData = {
      lang_to: lang_id,
      limit: quant
    };
    const body = new HttpParams({fromObject: paramData});

    return this.http.get<Translator[]>(this.serverUrl, {params: body}).subscribe(data => {
      this.featureTranslatorSource.next(data);
    });
  }

  changeCollapseBoolean = (boolean: boolean) => {
    this.collapseBoolSource.next(boolean);
  }
}
