import {
    AuthServiceConfig,
    FacebookLoginProvider
  } from 'angular5-social-login';
  
  export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig([
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('3538544999532593')
      }
    ]);
    return config;
  }