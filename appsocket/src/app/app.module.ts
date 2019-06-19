import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/**Scoket in angular6 
 * https://www.npmjs.com/package/ng6-socket-io
 */
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
var URL:any = (location.port=='4201')? window.location.protocol+'//'+window.location.hostname:window.location.protocol+'//'+ window.location.hostname + ":" + location.port;
const config:SocketIoConfig = { url: 'https://localhost:3001',options:{}};
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
