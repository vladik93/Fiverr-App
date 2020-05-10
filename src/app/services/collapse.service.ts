import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollapseService {
  private collapsedSource = new BehaviorSubject<Boolean>(true);
  collapsed$ = this.collapsedSource.asObservable();

  private panelStatus = new Subject<Boolean>();
  panelStatusObs$ = this.panelStatus.asObservable();


  constructor(private http: HttpClient) {}

  setCollapse = (bool: Boolean) => {
    return this.collapsedSource.next(bool);
  }

  setCollapseStatus = (bool: Boolean) => {
    this.panelStatus.next(bool);
  }
}
