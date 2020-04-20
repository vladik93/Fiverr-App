import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordConfirming } from '../../custom-validators/password-confirm';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  disclaimerChecked = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', [ Validators.required ]),
      email: new FormControl('', [ Validators.required ]),
      password: new FormControl('', [ Validators.required ]),
      password_confirm: new FormControl('', [ Validators.required]),
      recieve_emails: new FormControl(false)
    }, { validators: passwordConfirming});
  }

  onDisclaimerCheck = (e) => {
    this.disclaimerChecked = e.currentTarget.checked;
  }

  // passwordConfirming = (c: AbstractControl) => {
  //   if (c.get('password').value !== c.get('password_confirm').value) {
  //     return {invalid: true};
  //   }
  // }

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
        data => console.log(data),
        error => console.log(error)
      );
    } else {
      console.log('Form is invalid');
    }
  }

}
