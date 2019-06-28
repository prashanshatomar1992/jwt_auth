import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: []
})
export class SignupComponent implements OnInit {
  public signupForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email:['admin'],
      password:['1234']
    })
  }
  get f(){
    return this.signupForm.controls;
  }
  signup(){
    console.log('login save');
    console.log('location');
    console.log(location);
    console.log(location.port);
    console.log(localStorage);
    console.log(window.location.protocol);
    console.log(window.location.hostname);
    console.log(this.signupForm.value);
  }
}
