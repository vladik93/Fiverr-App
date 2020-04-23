import { Component, OnInit } from '@angular/core';
import { LoggedService } from '../../services/logged.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {
  data;

  constructor(private loggedService: LoggedService, private router: Router) { }

  ngOnInit() {
    this.fetchLoggedData();
  }

  fetchLoggedData = () => {
    this.loggedService.getLoggedData()
    .subscribe(
      data => this.data = data,
      error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 403) {
            this.router.navigate(['']);
          }
        }
      }
    );
  }

}
