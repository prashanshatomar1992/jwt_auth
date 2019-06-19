import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl, Form } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
//reference link   all forms
//link = https://angularfirebase.com/lessons/basics-reactive-forms-in-angular

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  
  public loginForm: FormGroup;
  public nestedForm: FormGroup;
  public dynamicForm: FormGroup;
  public validationForm: FormGroup;


  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    const phone = this.fb.group({
      area: [], prefix: [], line: []
    })
    this.loginForm = this.fb.group({
      username: 'Prashansha',
      password: 12345
    })
    this.nestedForm = this.fb.group({
      username: 'Prashansha',
      password: 12345,
      phoneno: phone
    })
    this.dynamicForm = this.fb.group({
      emailid: null,
      phones: this.fb.array([])
    })

    this.validationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      age: [null, [Validators.required, Validators.minLength(2), Validators.min(18), Validators.max(65)]]
    })
  }
  login() {
    console.log('login form')
    console.log(this.loginForm.value)
  }
  get phoneForms() {
    return this.dynamicForm.get('phones') as FormArray
  }

  addPhone() {
    const phone = this.fb.group({
      area: [], prefix: [], line: []
    });
    this.phoneForms.push(phone)
  }
  deletePhone(i) {
    this.phoneForms.removeAt(i);
  }



}
