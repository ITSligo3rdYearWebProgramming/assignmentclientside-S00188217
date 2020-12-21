import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { carService } from './../car-service.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  carservice : carService

  constructor(carservice : carService) { 
    this.carservice = carservice
  }

  authForm = new FormGroup({
    emailAddress: new FormControl('', Validators.email),
    password: new FormControl('', Validators.min(5))
  });

  ngOnInit(): void {
  }

  btnSubmit() {
    console.log("Hello")
  }

}