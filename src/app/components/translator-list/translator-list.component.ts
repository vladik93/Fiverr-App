import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translator-list',
  templateUrl: './translator-list.component.html',
  styleUrls: ['./translator-list.component.css']
})
export class TranslatorListComponent implements OnInit {
  oneAtATime = true;
  customClass = 'customClass';

  translators = [
    {name: 'Alejandro', image: 'assets/images/translator_pic.jpg', description: 'This is a profile description'},
    {name: 'Maxim', image: 'assets/images/translator_pic2.jpg', description: 'This is a profile description'},
    {name: 'Jack McBlack', image: 'assets/images/translator_pic3.jpg', description: 'This is a profile description'},
    {name: 'Scary Woman', image: 'assets/images/translator_pic4.jpg', description: 'This is a profile description'},
    {name: 'Alejandro', image: 'assets/images/translator_pic.jpg', description: 'This is a profile description'},
    {name: 'Maxim', image: 'assets/images/translator_pic2.jpg', description: 'This is a profile description'},
    {name: 'Jack McBlack', image: 'assets/images/translator_pic3.jpg', description: 'This is a profile description'},
    {name: 'Alejandro', image: 'assets/images/translator_pic.jpg', description: 'This is a profile description'},
    {name: 'Maxim', image: 'assets/images/translator_pic2.jpg', description: 'This is a profile description'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
