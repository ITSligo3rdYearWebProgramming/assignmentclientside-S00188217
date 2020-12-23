import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

// Facebook Login
import * as queryString from 'query-string';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  facebookLoginUrl: string;

  constructor() {
  }

  ngOnInit(): void {
      const stringifiedParams = queryString.stringify({
        client_ID: '078a20bf39a651151c45e1ca52c4cdf4',
        redirect_uri: 'https://localhost:8080/authenticate/facebook',
        scope: ['email', 'user_friends'].join(','),
        response_type: 'code',
        auth_type: 'rerequest',
        display: 'popup',
      });

      this.facebookLoginUrl = `https://www.facebook.com/v4.0/dialog/oauth?${stringifiedParams}`;
  }
}