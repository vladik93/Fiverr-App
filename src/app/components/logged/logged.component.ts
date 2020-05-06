import { Component, OnInit } from '@angular/core';
import { LoggedService } from '../../services/logged.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {
  userData;

  constructor(private loggedService: LoggedService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.fetchLoggedData();
    setTimeout(() => {
      this.router.navigate(['']);
    }, 2000);
  }

  fetchLoggedData = () => {
    if (this.authService.loggedIn()) {
      this.loggedService.getLoggedUserData()
      .subscribe(
        data => this.userData = data,
        error => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              this.router.navigate(['']);
            }
          }
        }
      );
    }
  }
}
