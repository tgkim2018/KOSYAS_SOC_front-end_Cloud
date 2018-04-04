import { Routes, RouterModule }  from '@angular/router';

import { Dashboard } from './dashboard.component';
import { ModuleWithProviders } from '@angular/core';

import { ChartistJs } from './chartistJs/chartistJs.component';
import { Fulllogs } from './fulllogs/fulllogs.component';
import { Intrusion } from './intrusion/intrusion.component';
import { Systems } from './systems/systems.component';
import { Vulnerability } from './vulnerability/vulnerability.component';
import { DashboardMain } from './dashboardmain.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      { path: 'intrusion', component:  Intrusion},
      { path: 'systems', component: Systems },
      { path: 'vulnerability', component: Vulnerability },
      { path: 'fulllogs', component: Fulllogs },
      { path: 'main', component: DashboardMain }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
