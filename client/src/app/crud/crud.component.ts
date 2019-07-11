import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  public data:any;

  constructor(public apiService: ApiService, 
    // public toastr: ToastrService
    ) { }

  ngOnInit() {
  }
  get() {
    console.log('----------1-------------------')
    var dd = this.apiService.getUser()
    this.apiService.getUser().subscribe(res => { 
      console.log('dsdfs ', res)
      this.data=res['payload']
    
    })
    // console.log('Data received ',this.apiService.getUser().subscribe(res=>{console.log('dsdfs ',res)}))
    console.log('----------1--34-----------------')

  }
  signup() {
    this.apiService.addUser().subscribe(res => { 
      console.log('Add user ', res);
      // this.toastr.success('User added successfully');
    
    })
   
    // this.toastr.error(Response.message);
    // this.toastr.error('', err.json().message, {
    //   timeOut: 1000
    // });
  }
}
