import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Language } from '../../models/language';

@Component({
  selector: 'app-highlight-language',
  templateUrl: './highlight-language.component.html',
  styleUrls: ['./highlight-language.component.css']
})
export class HighlightLanguageComponent implements OnInit {

  languages: Language[];

  constructor(private langService: LanguageService) { }

  ngOnInit() {
    this.showHighlightLanguages();
  }

  showHighlightLanguages = () => {
    this.langService.getAllLanguages(3)
    .subscribe(data => this.languages = data);
  }




}
