import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RamaComponent } from './rama.component';
import { RamaDashboardComponent } from './rama-dashboard/rama-dashboard.component';
import { RamaScheduleComponent } from './rama-schedule/rama-schedule.component';

const routes: Routes = [{
  path: '',
  component: RamaComponent,
  children: [{
    path: 'rama-dashboard',
    component: RamaDashboardComponent,
  }, {
    path: 'rama-schedule',
    component: RamaScheduleComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RamaRoutingModule { }

export const routedComponents = [
  RamaComponent,
  RamaDashboardComponent,
  RamaScheduleComponent,
];
