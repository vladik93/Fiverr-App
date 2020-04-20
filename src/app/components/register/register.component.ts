import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  disclaimerChecked = false;

  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', [ Validators.required ]),
      email: new FormControl('', [ Validators.required ]),
      password: new FormControl('', [ Validators.required ]),
      password_confirm: new FormControl('', [ Validators.required]),
      recieve_emails: new FormControl(false)
    }, { validators: this.passwordConfirming});
  }

  onDisclaimerCheck = (e) => {
    this.disclaimerChecked = e.currentTarget.checked;
  }

  passwordConfirming = (c: AbstractControl) => {
    if (c.get('password').value !== c.get('password_confirm').value) {
      return {invalid: true};
    }
  }

  onRegisterSubmit = () => {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

}
