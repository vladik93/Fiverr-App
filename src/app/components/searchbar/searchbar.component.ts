import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(private tranService: TranslatorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.fetchTranslatorsForTypeahead();
  }

  fetchTranslatorsForTypeahead = () => {
    this.tranService.getTranslatorsForTypeahead()
    .subscribe(
      data => this.translators = data,
      error => console.log(error)
    );
  }

  onSearchSelect = (e) => {
    this.router.navigate(['/translators', e.item.id]);
    this.selected = null;
  }

}
