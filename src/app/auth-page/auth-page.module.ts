import { SampleFormComponent } from './../sample-form/sample-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageRoutingModule } from './auth-page.routing.module';


@NgModule({
    imports: [
        CommonModule,
        AuthPageRoutingModule
    ],
    declarations: [SampleFormComponent]
})
export class authPageModule {}