import { Component, OnInit } from '@angular/core';
import { TranslatorService } from '../../services/translator.service';

@Component({
  selector: 'app-review-modal',
  templateUrl: './review-modal.component.html',
  styleUrls: ['./review-modal.component.css']
})
export class ReviewModalComponent implements OnInit {
  carouselInterval = 2000;
  translators;

  imagePath = 'http://localhost/translation_app/translators';

  constructor(private transService: TranslatorService) { }

  ngOnInit() {
    this.fetchFeaturedTranslators();
  }

  fetchFeaturedTranslators = () => {
    this.transService.getRandFeaturedTranslators(2)
    .subscribe(
      data => this.translators = data,
      error => console.log(error)
    );
  }

}
