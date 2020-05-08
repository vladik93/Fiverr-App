import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TranslatorService } from '../../services/translator.service';
import { Translator } from '../../models/translator';
import { EmailSendComponent } from '../email-send/email-send.component';

@Component({
  selector: 'app-translator-page',
  templateUrl: './translator-page.component.html',
  styleUrls: ['./translator-page.component.css']
})
export class TranslatorPageComponent implements OnInit, OnDestroy {
  bsModalRef: BsModalRef | null;

  translator: Translator;
  // paramId;

  subscription: Subscription;

  constructor(private tranService: TranslatorService, private route: ActivatedRoute, private modalService: BsModalService) { }

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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
