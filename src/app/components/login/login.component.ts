import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoggedService } from 'src/app/services/logged.service';
import { StatsService } from 'src/app/services/stats.service';
import { TranslatorService } from 'src/app/services/translator.service';
import { CollapseService } from '../../services/collapse.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isCollapsed;
  user;

  constructor(private authService: AuthService,
    private loggedService: LoggedService,
    private router: Router,
    private statsService: StatsService,
    private transService: TranslatorService,
    private collapseService: CollapseService
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      remember: new FormControl(false)

      // Implement a remember me option putting token in sessionStorage if the user decides not to be remembered
    });
    this.fetchLoginPanelState();
  }

  onLoginSubmit = () => {
    const rememberMe = this.loginForm.get('remember').value;

    if (this.loginForm.valid) {
      const body = {
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value
      };
      this.authService.loginUser(body)
      .subscribe(
        data => {
          if (rememberMe) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.username);
            this.loggedService.setUsername(data.username);
            this.isCollapsed = true;
            this.loginForm.reset();
            this.updateVisitCount();
            this.statsService.setInitialRequestCount();
            this.router.navigate(['/logged']);
          } else if (!rememberMe) {
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('username', data.username);
            this.loggedService.setUsername(data.username);
            this.isCollapsed = true;
            this.loginForm.reset();
            this.updateVisitCount();
            this.statsService.setInitialRequestCount();
            this.router.navigate(['/logged']);
          }
        },
        error => {
          this.loginForm.reset();
          console.log(error, body);
        }
      );
    } else {
      console.log('Form is invalid!');
    }
  }

  onLoginToggle = () => {
    if (this.isCollapsed === true) {
      this.isCollapsed = false;
      this.transService.changeCollapseBoolean(true);
    } else {
      this.isCollapsed = true;
    }
  }

  fetchLoginPanelState = () => {
    this.collapseService.loginPanel$
    .subscribe(
      data => this.isCollapsed = data
    );
  }

  updateVisitCount = () => {
    this.statsService.updateVisitCount()
    .subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }
}
