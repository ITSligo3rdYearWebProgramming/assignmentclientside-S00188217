import { AuthPageComponent } from './auth-page.component';
import { SampleFormComponent } from './../sample-form/sample-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageRoutingModule } from './auth-page.routing.module';

// Facebook Login
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angular5-social-login';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const config = new AuthServiceConfig([
    {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('3538544999532593')
    }
]);

export function provideConfig() {
    return config;
}

@NgModule({
    imports: [
        CommonModule,
        AuthPageRoutingModule,
        SocialLoginModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule
    ],
    providers: [
        {
            provide: AuthServiceConfig,
            useFactory: provideConfig
        }
    ],
    declarations: [AuthPageComponent, SampleFormComponent, AuthPageRoutingModule]
})
export class authPageModule {}