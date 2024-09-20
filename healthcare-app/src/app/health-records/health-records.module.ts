import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthRecordsRoutingModule } from './health-records-routing.module';
import { HealthRecordsComponent } from './health-records.component';


@NgModule({
  declarations: [
    HealthRecordsComponent
  ],
  imports: [
    CommonModule,
    HealthRecordsRoutingModule
  ]
})
export class HealthRecordsModule { }
