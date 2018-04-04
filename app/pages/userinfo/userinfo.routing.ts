import { Routes, RouterModule }  from '@angular/router';
import { UserInfo } from './userinfo.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: UserInfo,
    children: [
      //{ path: 'buttons', component: Buttons },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
