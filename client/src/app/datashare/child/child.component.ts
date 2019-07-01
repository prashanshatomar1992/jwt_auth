import { Component, OnInit,Input, SimpleChange,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public message : any;

  @Input() adminid: String;

  ngOnChanges(changes:SimpleChanges){
    const data : SimpleChange = changes.adminid;
    console.log('data   ')
    console.log(data)
    console.log(data.currentValue.dd)

    console.log('data   ')

  }

  constructor() { }

  ngOnInit() {
  }

}
