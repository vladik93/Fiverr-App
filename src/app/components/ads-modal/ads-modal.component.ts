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
