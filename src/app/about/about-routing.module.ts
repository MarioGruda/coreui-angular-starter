import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core';
import { AboutComponent } from './about.component';

const routes: Routes = [
  Route.withShell([
    {
      path: 'about',
      component: AboutComponent,
      data: {
        title: 'APP_NAME'
      }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}

export const routedComponents = [AboutComponent];
