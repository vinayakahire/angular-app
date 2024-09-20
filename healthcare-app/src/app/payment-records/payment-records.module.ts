import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRecordsRoutingModule } from './payment-records-routing.module';
import { PaymentRecordsComponent } from './payment-records.component';
import { AddComponentComponent } from '../add-component/add-component.component';
import { ViewComponentComponent } from './view-component/view-component.component';


@NgModule({
  declarations: [
    PaymentRecordsComponent,
    AddComponentComponent,
    ViewComponentComponent
  ],
  imports: [
    CommonModule,
    PaymentRecordsRoutingModule
  ]
})
export class PaymentRecordsModule { }
