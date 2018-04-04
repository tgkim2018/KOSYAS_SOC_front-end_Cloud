import { Routes, RouterModule }  from '@angular/router';

import { Configuration } from './configuration.component';
import { Agent } from './components/agent/agent.component';
import { Log } from './components/log/log.component';
import { System } from './components/system/system.component';
import { User } from './components/user/user.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Configuration,
    children: [
      { path: 'agent', component: Agent },
      { path: 'log', component: Log },
      { path: 'system', component: System },
      { path: 'user', component: User }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
