import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-account-reconfirm',
  templateUrl: './account-reconfirm.component.html',
  styleUrls: ['./account-reconfirm.component.css']
})
export class AccountReconfirmComponent implements OnInit {
  emailForm: FormGroup;


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.emailForm = new FormGroup({
      email: new FormControl('')
    });
  }

  onEmailSubmit = () => {
    if (this.emailForm.valid) {
      const email = this.emailForm.get('email').value;

      this.userService.reconfirmUserByEmail(email)
      .subscribe(
        data => {
          console.log(data);
          this.emailForm.reset();
        },
        error => console.log(error)
      );
    }
  }



}
