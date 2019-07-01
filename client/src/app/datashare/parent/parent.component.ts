import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ChildComponent } from '../child/child.component';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @Output() admin_id = new EventEmitter()
  @ViewChild(ChildComponent) ChildActivationEnd;

  constructor() {}

  ngOnInit() {}

  emitData() {
    console.log('child data er')
    this.admin_id.emit({ dd: Date.now() })
    // this.m.message = Date.now()
  }

}
