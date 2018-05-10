import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from './configuration.component';
import { UserComponent } from './components/user/user.component';
import { AgentComponent } from './components/agent/agent.component';
import { SystemComponent } from './components/system/system.component';

const routes: Routes = [
    {
        path: '',
        component: ConfigurationComponent,
        data: {
            title: 'Configuration'
        },
        children: [
            {
                path: 'user',
                component: UserComponent,
                data: { title: 'User' }
            },
            {
                path: 'agent',
                component: AgentComponent,
                data: { title: 'Agent' }
            },
            {
                path: 'system',
                component: SystemComponent,
                data: { title: 'System' }
            },
            {path: '',redirectTo: 'agent', pathMatch: 'full' }
        ]
    }
];

export const routing = RouterModule.forChild(routes);