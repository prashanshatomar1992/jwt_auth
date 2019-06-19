import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email:[''],
      password:['']
    })
  }
  get f(){
    return this.signupForm.controls;
  }
  signup(){
    console.log('login save')
    console.log(this.signupForm.value);
  }
}
