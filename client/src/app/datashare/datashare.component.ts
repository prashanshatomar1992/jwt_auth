import { Component, OnInit } from '@angular/core';
/**
 * Link to study data sharing between components
 * https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/#Parent-to-Child-Sharing-Data-via-Input
 */
@Component({
  selector: 'app-datashare',
  templateUrl: './datashare.component.html',
  styleUrls: ['./datashare.component.css']
})
export class DatashareComponent implements OnInit {
  public admininfoid: String;
  constructor() { }

  ngOnInit() {
  }
  userInfo($event) {
    this.admininfoid = $event
  }
}
