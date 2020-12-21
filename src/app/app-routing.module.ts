import { SampleFormComponent } from './sample-form/sample-form.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthPageComponent
  },
  {
    path: 'form',
    component: SampleFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AuthPageComponent, SampleFormComponent]