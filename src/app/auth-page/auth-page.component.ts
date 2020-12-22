import { Observable } from 'rxjs';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { carService } from './../car-service.service';
import { AuthService as MyService } from '../auth.service';

// Facebook Login
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular5-social-login';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  ngOnInit(): void {
  }

  authForm = new FormGroup({
    emailAddress: new FormControl('', Validators.min(1))
  });

  btnSubmit() {
    console.log("Hello")
  }

  carservice : carService

  constructor(private socialAuthService: AuthService, private http: Http) {}

  public facebookLogin() {
    let socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
            //this will return user data from facebook. What you need is a user token which you will send it to the server
            this.sendToRestApiMethod(userData.token);
       }
    );
}
}