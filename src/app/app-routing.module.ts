import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SampleFormComponent } from './sample-form/sample-form.component';

// const routes: Routes = [
//   {path: '', component: AppComponent},
//   {path: 'carForm', component: SampleFormComponent},
//   {path: 'carList', component: CarListComponent}
// ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
