import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TranslatorService } from '../../services/translator.service';
import { Translator } from '../../models/translator';

@Component({
  selector: 'app-translator-page',
  templateUrl: './translator-page.component.html',
  styleUrls: ['./translator-page.component.css']
})
export class TranslatorPageComponent implements OnInit, OnDestroy {
  translator: Translator;
  // paramId;

  subscription: Subscription;

  constructor(private tranService: TranslatorService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.subscription = this.route.params.subscribe(params => {
    //   this.paramId = params.id;
    // });
    this.fetchTranslatorById();
  }

  fetchTranslatorById = () => {
    this.subscription = this.route.params.subscribe(params => {
      this.tranService.getTranslatorById(params.id)
      .subscribe(
        data => {
          this.translator = data[0];
        },
        error => console.log(error)
      );
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
