import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccesRoutingModule } from './acces-routing.module';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AccesRoutingModule
  ]
})
export class AccesModule { }
