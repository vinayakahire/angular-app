import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { C1Component } from '../c1/c1.component';
import { C2Component } from '../c2/c2.component';
import { ConfigGetterGuard } from '../config.getter.guard';
import { C3Component } from '../c3/c3.component';

const routes: Routes = [

  {
    path: '',
    component: C1Component,
    canActivate: [ConfigGetterGuard],
    children: [
      {
        path: 'c2',
        component: C2Component,
      },
    ],

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    ConfigGetterGuard,

    {
      provide: ROUTES,
      useFactory: () => {
        let extaRoutes: Routes = [];

        routes.push({
          path: 'c3',
          component: C3Component
        });


        return [
          ...routes,
          ...extaRoutes
        ];
      },
      multi: true
    }
  ]
})
export class M1RoutingModule {

}
