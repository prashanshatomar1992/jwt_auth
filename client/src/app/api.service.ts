import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, take, toArray } from 'rxjs/operators';

/**
 * Study points
 * Why service still work even when @Injectable not used
 * Link : https://blog.ninja-squad.com/2016/12/08/angular-injectable/
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://localhost:3001/';
  constructor(private httpClient:HttpClient) { }
  public getUser(){
  console.log('----------1--2-----------------')
  // this.authhttp.get("/accessarea/" + id).pipe(
  //   map(res => res.json()) // or any other operator
  // ).subscribe(
  //   Response => {
  //     console.log(Response)
  //     this.asset_data = Response.payload;
  //     this.addForm.patchValue(Response.payload);
  //     this.addForm.controls['siteid'].patchValue(Response.payload.siteid._id);

  //   },
  //   err => {
  //   }
  // )
    return this.httpClient.get(this.apiURL)
    // .pipe(
    //   map(res=>{ return res} )
    // )
    // .subscribe(
    //   Response=>{
    //     console.log(Response)
    //     return Response
    //   },
    //   err=>{
    //     console.log(err)
    //     return err;
    //   }
    // );
  }

  public addUser(){
    return this.httpClient.post(this.apiURL+'user/signup',{email:'prashansha@mail.com',password:'prashansha'})
  }
  public sendmail(data){
    return this.httpClient.post(this.apiURL+'user/sendmail',data)
  }
}
