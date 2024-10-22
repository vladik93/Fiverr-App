import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Language } from '../../models/language';
import { LanguageService } from '../../services/language.service';
import { TranslatorService } from '../../services/translator.service';

@Component({
  selector: 'app-language-menu',
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.css']
})
export class LanguageMenuComponent implements OnInit {

  languages: Language[];

  constructor(
    private langService: LanguageService,
    private tranService: TranslatorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.showAllLanguages('');
  }


  showAllLanguages = (limit) => {
    this.langService.getAllLanguages(limit)
    .subscribe(data => this.languages = data);
  }

  onLanguageClick = (id) => {
    this.tranService.getTranslatorsByLanguage(id, 1);
  }

  onSmallScrLangClick = (id) => {
    if (window.innerWidth < 768) {
      this.router.navigate(['translators'], {queryParams: {lang: id}});
    }
  }
}

