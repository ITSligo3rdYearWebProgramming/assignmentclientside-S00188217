import { AuthService } from './../auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialLoginModule, FacebookLoginProvider } from 'angularx-social-login';
import { AuthServiceConfig } from 'angular5-social-login';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SocialLoginModule,
    FacebookLoginProvider,
    AuthServiceConfig
  ],
  providers: [
    
  ]
})
export class AuthenticationModule { }