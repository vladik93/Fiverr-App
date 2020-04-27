import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { TranslatorService } from '../services/translator.service';
import { AuthService } from '../services/auth.service';
import { LoggedService } from '../services/logged.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed;
  username = localStorage.getItem('username');

  constructor(
    private languageService: LanguageService,
    private tranService: TranslatorService,
    private authService: AuthService,
    private loggedService: LoggedService
    ) { }

  ngOnInit() {
    this.tranService.currentBoolean$.subscribe(bool => this.isCollapsed = bool);
  }

}
