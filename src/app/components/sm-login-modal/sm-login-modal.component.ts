import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef, ModalDirective} from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoggedService } from 'src/app/services/logged.service';
import { StatsService } from 'src/app/services/stats.service';
import { TranslatorService } from 'src/app/services/translator.service';
import { CollapseService } from '../../services/collapse.service';


@Component({
  selector: 'app-sm-login-modal',
  templateUrl: './sm-login-modal.component.html',
  styleUrls: ['./sm-login-modal.component.css']
})
export class SmLoginModalComponent implements OnInit {
  modalRef: BsModalRef;
  @ViewChild('loginModal') loginModal: ModalDirective;

  loginForm: FormGroup;
  // isCollapsed;
  isOpen;
  user;
  error;

  constructor(
    private modalService: BsModalService,
    private authService: AuthService,
    private loggedService: LoggedService,
    private router: Router,
    private statsService: StatsService,
    private transService: TranslatorService,
    private collapseService: CollapseService ) {
  }

  ngOnInit() {
      this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      remember: new FormControl(false)
      // Implement a remember me option putting token in sessionStorage if the user decides not to be remembered
    });
    // this.fetchLoginPanelState();
  }

  onLoginSubmit = () => {
    // const rememberMe = this.loginForm.get('remember').value;

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
            // this.isCollapsed = true;
            this.loginForm.reset();
            this.updateVisitCount();
            this.statsService.setInitialRequestCount();
            this.router.navigate(['/logged']);
        },
        error => {
          if (error.status === 403) {
            // console.log(error.error.forbidden);
            this.error = error.error.forbidden;
            console.log(error);
          } else if (error.status === 401) {
            this.error = 'User not registered!';
          }
          this.loginForm.reset();
        }
      );
    } else {
      console.log('Form is invalid!');
    }
  }

  updateVisitCount = () => {
    this.statsService.updateVisitCount()
    .subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  onAlertClosed = () => {
    // this.isOpen = false;
    this.error = undefined;
  }

}
