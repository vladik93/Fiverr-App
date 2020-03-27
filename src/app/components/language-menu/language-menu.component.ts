import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
    private tranService: TranslatorService
  ) { }

  ngOnInit() {
    this.showAllLanguages();
  }


  showAllLanguages = () => {
    this.langService.getAllLanguages()
    .subscribe(data => this.languages = data);
  }

  onLanguageClick = (id) => {
    this.tranService.getTranslatorsByLanguage(id, 1);
  }

  onLanguageMouseEnter = (e) => {
    console.log(e);
  }
}
