import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule}  from '@angular/forms';
import {RouterModule} from '@angular/router';
import { CustomerComponent } from './CustomerApp.CustomerComponent';
import { CustomerRouts } from '../Routing/CustomerApp.CustomerRouting';

import { CommonModule } from '@angular/common';
import { GridComponent } from '../Utility/CustomerApp.GridComponent';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CustomerComponent, GridComponent
  ],
  imports: [
    RouterModule.forChild(CustomerRouts),
    CommonModule, FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
