import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-nodemailer',
  templateUrl: './nodemailer.component.html',
  styleUrls: []
})
export class NodemailerComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: [null]
    });
  }
  get f() {
    return this.form.controls;
  }
  send() {
    console.log(this.form.value);
    this.apiService.sendmail(this.form.value).subscribe(
      res=>{
        console.log('response   ',res)
      },
      err=>{
        console.log('err   ',err)

      })
  }
}
