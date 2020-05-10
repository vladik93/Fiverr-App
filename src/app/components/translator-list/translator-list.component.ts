import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslatorService } from '../../services/translator.service';
import { Translator } from '../../models/translator';
import { Subscription } from 'rxjs';
import { share } from 'rxjs/operators';
import { EmailSendComponent } from '../email-send/email-send.component';
import { CollapseService } from 'src/app/services/collapse.service';
import { CollapseDirective } from 'ngx-bootstrap/collapse';


@Component({
  selector: 'app-translator-list',
  templateUrl: './translator-list.component.html',
  styleUrls: ['./translator-list.component.css'],
  providers: [CollapseDirective]
})
export class TranslatorListComponent implements OnInit, OnDestroy {
  bsModalRef: BsModalRef | null;

  private subscription: Subscription;

  translators: Translator[];

  langParam: String;

  currentPage = 0;
  disabledPages = false;

  oneAtATime = true;
  collapseOpen;
  customClass = 'customClass';


  constructor(
    private transService: TranslatorService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private collapseService: CollapseService,
  ) { }

  ngOnInit() {
    // this.langParam = this.route.snapshot.queryParamMap.get('lang');
    this.getInitTranslatorsWithOffset();
    this.onPanelClick();
    console.log('OnInit: collapse: ' + this.collapseOpen );
  }

  emailModal(template: TemplateRef<any>, translator) {
    console.log(translator);
    const initialState  = {
      list: [
        {
          id: translator.id,
          name: translator.name,
          image: translator.image,
          price: translator.price,
          from: translator.image_from,
          codefrom: translator.code_from,
          to: translator.image_to,
          codeto: translator.code_to
        }
      ]
    };
    this.bsModalRef = this.modalService.show(EmailSendComponent, {initialState});
  }


  onAccordionClick = (state) => {
    if (state) {
      this.collapseService.setCollapse();
    }
  }

  onPanelClick = () => {
    this.collapseService.panelStatusObs$
    .subscribe(data => {
      if (data === true) {
        this.collapseOpen = false;
        console.log('status: ' + data, 'collapse: ' + this.collapseOpen);
      } else {
        this.collapseOpen = null;
        console.log('status: ' + data, 'collapse: ' + this.collapseOpen);
      }
    });
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

  onMoreButtonClick = (id) => {
    this.router.navigate(['/translators', id], );
  }

  ngOnDestroy() {
   this.subscription.unsubscribe();
  }
}
