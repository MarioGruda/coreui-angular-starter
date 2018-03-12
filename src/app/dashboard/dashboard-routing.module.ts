import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { Route } from '../core';

const routes: Routes = [
  Route.withShell([
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    {
      path: 'dashboard',
      component: DashboardComponent,
      data: {
        title: 'Dashboard'
      }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
