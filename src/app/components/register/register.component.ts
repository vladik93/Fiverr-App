import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordConfirming } from '../../custom-validators/password-confirm';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  get username() { return this.registerForm.get('username'); }
  get email() { return this.registerForm.get('email'); }
  get pass() { return this.registerForm.get('password'); }
  get cpass() { return this.registerForm.get('password_confirm'); }
  get recieveEmails() { return this.registerForm.get('recieve_emails'); }


  disclaimerChecked = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', [ Validators.required, Validators.minLength(3), Validators.pattern('[^()/><\][\\\x22,;|]+') ]),
      email: new FormControl('', [ Validators.required, Validators.email ]),
      password: new FormControl('', [ Validators.required ]),
      password_confirm: new FormControl('', [ Validators.required]),
      recieve_emails: new FormControl(false)
    }, { validators: passwordConfirming});
  }

  onDisclaimerCheck = (e) => {
    this.disclaimerChecked = e.currentTarget.checked;
  }

  onRegisterSubmit = () => {
    if (this.registerForm.valid) {
      const body = {
        username: this.registerForm.get('username').value,
        email: this.registerForm.get('email').value,
        password: this.registerForm.get('password').value
      };
      console.log(body);
      this.authService.registerUser(body)
      .subscribe(
        data => {
          console.log(data);
          this.registerForm.reset();
          this.router.navigate(['']);

        },
        error => console.log(error)
      );
    } else {
      console.log('Form is invalid');
    }
  }

}
