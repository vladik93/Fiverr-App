import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslatorService } from '../../services/translator.service';
import { Translator } from '../../models/translator';

@Component({
  selector: 'app-translator-list',
  templateUrl: './translator-list.component.html',
  styleUrls: ['./translator-list.component.css']
})
export class TranslatorListComponent implements OnInit {
  translators: Translator[];

  langParam: String;

  oneAtATime = true;
  customClass = 'customClass';


  constructor(private transService: TranslatorService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.langParam = this.route.snapshot.queryParamMap.get('lang');

    this.transService.getTranslatorsByLanguageWithOffset(this.langParam, 9, 0)
    .subscribe(
      data => this.translators = data,
      error => console.log(error)
    );
  }


  onPageChange = (e) => {
    this.transService.getTranslatorsByLanguageWithOffset(this.langParam, 9, ((e.page - 1) * 9))
    .subscribe(
      (data) => this.translators = data,
      (error) => console.log(error)
    );
  }
}
