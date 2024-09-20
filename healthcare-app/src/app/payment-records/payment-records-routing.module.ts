import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentRecordsComponent } from './payment-records.component';

const routes: Routes = [{ path: '', component: PaymentRecordsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRecordsRoutingModule { }
