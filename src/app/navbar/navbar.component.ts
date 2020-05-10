import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { TranslatorService } from '../services/translator.service';
import { AuthService } from '../services/auth.service';
import { LoggedService } from '../services/logged.service';
import { CollapseService } from '../services/collapse.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed;
  userData;
  username;

  constructor(
    private languageService: LanguageService,
    private tranService: TranslatorService,
    private authService: AuthService,
    private loggedService: LoggedService,
    private collapseService: CollapseService
    ) { }

  ngOnInit() {
    this.tranService.currentBoolean$.subscribe(bool => this.isCollapsed = bool);
    // this.getUserData();
    this.getUsername();
  }

  // getUserData = () => {
  //   this.loggedService.getLoggedUserData()
  //   .subscribe(
  //     data => this.userData = data,
  //     error => console.log(error)
  //   );
  // }

  onNavbarToggle = () => {
    if (this.isCollapsed === true) {
      this.isCollapsed = false;
      this.collapseService.setCollapse(true);
    } else {
      this.isCollapsed = true;
    }
  }

  getUsername = () => {
    if (this.authService.loggedIn()) {
      this.loggedService.username$
      .subscribe(
        data => this.username = data
      );
    }
  }

  getStorageUsername = () => {
    return localStorage.getItem('username');
  }

}
