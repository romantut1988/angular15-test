import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccesRoutingModule } from './acces-routing.module';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from 'src/Material-Module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AccesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AccesModule { }
