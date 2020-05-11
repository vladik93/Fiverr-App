import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { StatsService } from 'src/app/services/stats.service';
import { CollapseService } from '../../services/collapse.service';
import { TranslatorService } from 'src/app/services/translator.service';

@Component({
  selector: 'app-side-widget',
  templateUrl: './side-widget.component.html',
  styleUrls: ['./side-widget.component.css']
})
export class SideWidgetComponent implements OnInit {
  isCollapsed: Boolean = true;
  stats;


  constructor(
    private authService: AuthService,
    private statsService: StatsService,
    private collapseService: CollapseService,
    private transService: TranslatorService
  ) { }

  ngOnInit() {
    this.fetchUserStats();
    this.fetchCollapseState();
  }


  onPanelToggle = () => {
    if (this.isCollapsed === true) {
      this.isCollapsed = false;
      this.transService.changeCollapseBoolean(true);
      // this.collapseService.setCollapseStatus(true);
      this.collapseService.setCollapse(false);
    } else {
      this.isCollapsed = true;
      // this.collapseService.setCollapseStatus(false);
      this.collapseService.setCollapse(true);
    }
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

  fetchCollapseState = () => {
    this.collapseService.collapsed$
    .subscribe(
      data => this.isCollapsed = data,
      error => console.log(error)
    );
  }

}
