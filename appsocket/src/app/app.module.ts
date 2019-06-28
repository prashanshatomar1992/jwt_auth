import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/**Scoket in angular6 
 * https://www.npmjs.com/package/ng6-socket-io
 */
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
var URL:any = (location.port=='4201')? window.location.protocol+'//'+window.location.hostname:window.location.protocol+'//'+ window.location.hostname + ":" + location.port;
const config:SocketIoConfig = { url: 'http://localhost:4201',options:{}};
import { AppComponent } from './app.component';
import { SocketcompComponent } from './socketcomp/socketcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    SocketcompComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
