import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-side-widget',
  templateUrl: './side-widget.component.html',
  styleUrls: ['./side-widget.component.css']
})
export class SideWidgetComponent implements OnInit {
  isCollapsed = true;
  stats;


  constructor(private authService: AuthService, private statsService: StatsService) { }

  ngOnInit() {
    this.fetchUserStats();
  }

  fetchUserStats = () => {
    if (this.authService.loggedIn()) {
      this.statsService.getUserStats()
      .subscribe(
        data => this.stats = data[0],
        error => console.log(error)
      );
    }
  }

}
