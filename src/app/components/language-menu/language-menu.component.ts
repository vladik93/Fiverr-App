import { Component, OnInit } from '@angular/core';
import { Language } from '../../models/language';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-menu',
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.css']
})
export class LanguageMenuComponent implements OnInit {

  languages: Language[];

  constructor(private langService: LanguageService) { }

  ngOnInit() {
    this.showAllLanguages();
  }


  showAllLanguages = () => {
    this.langService.getAllLanguages()
    .subscribe(data => this.languages = data);
  }

}
