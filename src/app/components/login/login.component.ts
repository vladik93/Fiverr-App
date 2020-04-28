import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoggedService } from 'src/app/services/logged.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isCollapsed = true;
  user;

  constructor(private authService: AuthService, private loggedService: LoggedService,  private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onLoginSubmit = () => {
    if (this.loginForm.valid) {
      const body = {
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value
      };
      this.authService.loginUser(body)
      .subscribe(
        data => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('username', data.username);
          this.loggedService.setUsername(data.username);
          this.isCollapsed = true;
          this.loginForm.reset();
          this.router.navigate(['/logged']);
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
}
