import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log('Start');
      }
      if (event instanceof NavigationEnd) {
        console.log('End');
      }
      if (event instanceof NavigationError) {
        console.log('Error Nav');
      }
    });
  }
}
