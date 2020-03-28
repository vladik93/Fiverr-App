import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-modal',
  templateUrl: './review-modal.component.html',
  styleUrls: ['./review-modal.component.css']
})
export class ReviewModalComponent implements OnInit {
  carouselInterval = 2500;

  constructor() { }

  ngOnInit() {
  }

}
