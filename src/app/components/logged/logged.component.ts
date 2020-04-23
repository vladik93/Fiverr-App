import { Component, OnInit } from '@angular/core';
import { LoggedService } from '../../services/logged.service';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {
  data;

  constructor(private loggedService: LoggedService) { }

  ngOnInit() {
    this.fetchLoggedData();
  }

  fetchLoggedData = () => {
    this.loggedService.getLoggedData()
    .subscribe(
      data => this.data = data,
      error => console.log(error)
    );
  }

}
