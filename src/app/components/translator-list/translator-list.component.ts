import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translator-list',
  templateUrl: './translator-list.component.html',
  styleUrls: ['./translator-list.component.css']
})
export class TranslatorListComponent implements OnInit {
  oneAtATime = true;

  constructor() { }

  ngOnInit() {
  }

}
