import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { IntrusionComponent } from './components/intrusion/intrusion.component';
import { VulnerabilityComponent } from './components/vulnerability/vulnerability.component';
import { SystemComponent } from './components/system/system.component';
import { FulllogsComponent } from './components/fulllogs/fulllogs.component';
import { OverviewComponent } from './components/overview/overview.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        data: {
            title: 'Dashboard'
        },
        children: [
            {
                path: 'overview',
                component: OverviewComponent,
               data: { title: 'Overview' }
            },
            {
                path: 'intrusion',
                component: IntrusionComponent,
                data: { title: 'Intrusion' }
            },
            {
                path: 'vulnerability',
                component: VulnerabilityComponent,
                data: { title: 'Vulnerability' }
            },
            {
                path: 'system',
                component: SystemComponent,
                data: { title: 'System' }
            },
            {
                path: 'fulllogs',
                component: FulllogsComponent,
                data: { title: 'Full Logs' }
            },
            {path: '',redirectTo: 'overview', pathMatch: 'full' }
        ]
    }
];

export const routing = RouterModule.forChild(routes);