import { Component, OnInit } from '@angular/core';
import { Translator } from '../../models/translator';
import { TranslatorService } from '../../services/translator.service';

@Component({
  selector: 'app-feature-translator',
  templateUrl: './feature-translator.component.html',
  styleUrls: ['./feature-translator.component.css']
})
export class FeatureTranslatorComponent implements OnInit {

  translator: Translator;

  constructor(private tranService: TranslatorService) { }

  ngOnInit() {
    this.tranService.featureTranslator$
    .subscribe(
      data => this.translator = data[0]
    );
  }
}
