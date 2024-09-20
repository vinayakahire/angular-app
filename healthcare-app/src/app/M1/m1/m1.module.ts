import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { M1RoutingModule } from './m1-routing.module';
import { C1Component } from '../c1/c1.component';
import { C2Component } from '../c2/c2.component';
import { ConfigService } from '../config.service';
import { C3Component } from '../c3/c3.component';
import { Router, Routes, ROUTES } from '@angular/router';


@NgModule({
  declarations: [
    C1Component,
    C2Component,
    C3Component
  ],
  imports: [
    CommonModule,
    M1RoutingModule
  ],
  providers: [ConfigService]
  
})
export class M1Module {

  constructor(private router: Router) {
    const newRoute = { path: 'c3', C3Component};
    console.log(this.router.config[0].children);
  }
 }
