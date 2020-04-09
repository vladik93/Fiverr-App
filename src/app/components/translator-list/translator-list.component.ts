import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslatorService } from '../../services/translator.service';
import { Translator } from '../../models/translator';
import { Subscription } from 'rxjs';
import { share } from 'rxjs/operators';


@Component({
  selector: 'app-translator-list',
  templateUrl: './translator-list.component.html',
  styleUrls: ['./translator-list.component.css']
})
export class TranslatorListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  translators: Translator[];

  langParam: String;

  currentPage = 0;
  disabledPages = false;

  oneAtATime = true;
  customClass = 'customClass';


  constructor(private transService: TranslatorService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.langParam = this.route.snapshot.queryParamMap.get('lang');
    this.getInitTranslatorsWithOffset();
  }



  getInitTranslatorsWithOffset = () => {
    this.subscription = this.route.queryParams.subscribe(params => {
      this.transService.getTranslatorsByLanguageWithOffset(params.lang, 9, 0)
      .subscribe(
        data => {
          if (data.length > 0) {
            this.translators = data;
            this.currentPage = 1;
          }
        },
        error => console.log(error)
      );
    });
  }

  onPageChange = (e) => {
    this.subscription = this.route.queryParams.subscribe(params => {
      this.transService.getTranslatorsByLanguageWithOffset(params.lang, 9, ((e.page - 1) * 9))
      .subscribe(
        (data) => {
          if (data.length > 0) {
            this.translators = data;
          }
        },
        (error) => console.log(error)
      );
    });
  }

  ngOnDestroy() {
   this.subscription.unsubscribe();
  }
}
