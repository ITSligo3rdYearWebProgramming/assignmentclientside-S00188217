import { AuthPageComponent } from './auth-page.component';
import { SampleFormComponent } from './../sample-form/sample-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'form',
    component: SampleFormComponent
  },
  {
    path: '',
    component: AuthPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
