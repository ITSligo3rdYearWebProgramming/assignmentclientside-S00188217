import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarComponentComponent } from './car-component/car-component.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { AuthenticationComponent } from './authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleFormComponent,
    CarListComponent,
    CarComponentComponent,
    AuthPageComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }