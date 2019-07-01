import { Component, OnInit } from '@angular/core';

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
