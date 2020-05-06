import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { TranslatorService } from './services/translator.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private tranService: TranslatorService, private authService: AuthService ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log('Start');
      }
      if (event instanceof NavigationEnd) {
        this.tranService.changeCollapseBoolean(true);
      }
      if (event instanceof NavigationError) {
        console.log('Error Nav');
      }
    });
  }
}
