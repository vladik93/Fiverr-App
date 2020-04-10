import { Component, OnInit } from '@angular/core';
import { TranslatorService } from '../../services/translator.service';
import { Translator } from '../../models/translator';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  translators: Translator[];
  selected;

  constructor(private tranService: TranslatorService) { }

  ngOnInit() {
    this.fetchTranslatorsForTypeahead();
    console.log(this.translators);
  }

  fetchTranslatorsForTypeahead = () => {
    this.tranService.getTranslatorsForTypeahead()
    .subscribe(
      data => this.translators = data,
      error => console.log(error)
    );
  }

}
