import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
// import { AuthHttp } from "../jwt/index";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  // constructor(private fb: FormBuilder, private authhttp: AuthHttp) { }
  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }
  get f() {
    return this.loginForm.controls;
  }
  save() {
    console.log('login save')
    console.log(this.loginForm.value)

  }
  signup() {
    console.log('login save')
    console.log(this.loginForm.value)

  }
}
