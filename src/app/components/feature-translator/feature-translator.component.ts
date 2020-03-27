import { Component, OnInit, OnDestroy } from '@angular/core';
import { Translator } from '../../models/translator';
import { TranslatorService } from '../../services/translator.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feature-translator',
  templateUrl: './feature-translator.component.html',
  styleUrls: ['./feature-translator.component.css']
})
export class FeatureTranslatorComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  translator: Translator;

  constructor(private tranService: TranslatorService) { }

  ngOnInit() {
    this.subscription = this.tranService.featureTranslator$
    .subscribe(
      data => this.translator = data[0]
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
