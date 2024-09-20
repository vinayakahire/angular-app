import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigSetterGuard } from './config-setter.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'm1', 
    canActivate: [ConfigSetterGuard],
    loadChildren: () => import('./M1/m1/m1.module').then(m => m.M1Module) },
  { path: 'patients', loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule) },
  { path: 'doctors', loadChildren: () => import('./doctors/doctors.module').then(m => m.DoctorsModule) },
  { path: 'health-records', loadChildren: () => import('./health-records/health-records.module').then(m => m.HealthRecordsModule) },
  { path: 'payment-records', loadChildren: () => import('./payment-records/payment-records.module').then(m => m.PaymentRecordsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
