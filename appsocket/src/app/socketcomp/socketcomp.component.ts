import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
@Component({
  selector: 'app-socketcomp',
  templateUrl: './socketcomp.component.html',
  styleUrls: ['./socketcomp.component.css']
})
export class SocketcompComponent implements OnInit {

  constructor(public socket: Socket) { }

  ngOnInit() {
    this.socket.on("message", function (data) {
      console.log('Inside socket connection  start')
      console.log(data)
      console.log('Inside socket connection  end')

    });
  }

}
