import {Component, Injectable, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LocalStorage } from '@ngx-pwa/local-storage';
import {Router} from "@angular/router";




  @Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})

export class RegistrationPageComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;


  courses = [  'java','C','C++' ];

  countries = [ 'USA','India','Australia']

  districts = [ 'khammam','kottagudem','hyderabad'];

  states = [  'telangana','andhra pradesh','tamilnadu']
    first;
    father;
    emal;
    pwd;
    date;
    precentadd;
    mob;
    gend;


  constructor(private formBuilder: FormBuilder,private localStorage:LocalStorage,private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      fatherName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      padd: ['',Validators.required],
      gender:  ['',Validators.required],
     city: ['', Validators.required],
     course: ['', Validators.required],
      district: ['', Validators.required],
      state: ['', Validators.required],
      mobile: ['', [Validators.required]],
      dob: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit(route) {

    this.router.navigate([route]);

    console.log(this.registerForm.value);
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.localStorage.setItem('user', this.registerForm.value).subscribe(() => {});

  }
}
