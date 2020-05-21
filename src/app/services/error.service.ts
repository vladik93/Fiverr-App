import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private errorSource = new BehaviorSubject(null);
  error$ = this.errorSource.asObservable();



  constructor() { }

  setError = (error) => {
    this.errorSource.next(error);
  }
}
