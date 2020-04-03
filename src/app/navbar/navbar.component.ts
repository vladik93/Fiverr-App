import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { TranslatorService } from '../services/translator.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed;

  constructor(
    private languageService: LanguageService,
    private tranService: TranslatorService
    ) { }

  ngOnInit() {
    this.tranService.currentBoolean$.subscribe(bool => this.isCollapsed = bool);
  }







}
