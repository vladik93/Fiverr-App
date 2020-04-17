import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ads-modal',
  templateUrl: './ads-modal.component.html',
  styleUrls: ['./ads-modal.component.css']
})
export class AdsModalComponent implements OnInit, AfterViewInit {
  @ViewChild('autoShownModal') autoShownModal: ModalDirective;
  isModalShown = false;
  shownOnce = false;

  ads = [
    {
      id: 1,
      image: 'assets/images/ads/ad-1.jpg',
      content: 'Stuck writing a letter to your boss? Want to translate documents from abroad? \
       Or maybe you want to learn a new language with the best translators in the industry? \
       Contact us and we\'ll be happy to assist you!'
    },
    {
      id: 2,
      image: 'assets/images/ads/ad-2.jpg'
    },
    {
      id: 3,
      image: 'assets/images/ads/ad-3.jpg'
    }
  ];

  showModal(): void {
    this.isModalShown = true;
  }

  hideModal(): void {
    this.autoShownModal.hide();
  }

  onHidden(): void {
    this.isModalShown = false;
    sessionStorage.setItem('popup', 'false');
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (!sessionStorage.getItem('popup')) {
      this.showModal();
    }
  }


}
