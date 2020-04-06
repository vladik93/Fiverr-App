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
    {
      name: 'Alejandro',
      image: 'assets/images/translator_pic.jpg',
      description: 'This is a profile descriptionasdjasoid asd askdjaklsdhlklsahdkjashdkjashkdjas',
      lang_from: 'assets/images/flags/russian.jpg',
      lang_to: 'assets/images/flags/spanish.jpg',
      price: 200
    },
    {
      name: 'Alejandro',
      image: 'assets/images/translator_pic.jpg',
      description: 'This is a profile description',
      lang_from: 'assets/images/flags/not-specified2.png',
      lang_to: 'assets/images/flags/spanish.jpg',
      price: 300
    },
    {
      name: 'Alejandro',
      image: 'assets/images/translator_pic.jpg',
      description: 'This is a profile description',
      lang_from: 'assets/images/flags/russian.jpg',
      lang_to: 'assets/images/flags/spanish.jpg',
      price: 330
    },
    {
      name: 'Alejandro',
      image: 'assets/images/translator_pic.jpg',
      description: 'This is a profile description',
      lang_from: 'assets/images/flags/russian.jpg',
      lang_to: 'assets/images/flags/spanish.jpg',
      price: 500
    },
    {
      name: 'Alejandro',
      image: 'assets/images/translator_pic.jpg',
      description: 'This is a profile description',
      lang_from: 'assets/images/flags/russian.jpg',
      lang_to: 'assets/images/flags/spanish.jpg',
      price: 300
    },
    {
      name: 'Alejandro',
      image: 'assets/images/translator_pic.jpg',
      description: 'This is a profile description',
      lang_from: 'assets/images/flags/russian.jpg',
      lang_to: 'assets/images/flags/spanish.jpg',
      price: 120
    },
    {
      name: 'Alejandro',
      image: 'assets/images/translator_pic.jpg',
      description: 'This is a profile description',
      lang_from: 'assets/images/flags/russian.jpg',
      lang_to: 'assets/images/flags/spanish.jpg',
      price: 320
    },
    {
      name: 'Alejandro',
      image: 'assets/images/translator_pic.jpg',
      description: 'This is a profile description',
      lang_from: 'assets/images/flags/not-specified2.png',
      lang_to: 'assets/images/flags/spanish.jpg',
      price: 240
    },
    {
      name: 'Alejandro Huliosdfsdf',
      image: 'assets/images/translator_pic.jpg',
      description: 'This is a profile description',
      lang_from: 'assets/images/flags/russian.jpg',
      lang_to: 'assets/images/flags/spanish.jpg',
      price: 50
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
