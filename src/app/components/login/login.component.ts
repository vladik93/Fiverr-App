import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isCollapsed = true;

  constructor(private authService: AuthService, private router: Router) { }

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
          console.log(data);
          this.router.navigate(['/logged']);
        },
        error => console.log(error, body)
      );
    } else {
      console.log('Form is invalid!');
    }
  }
}
