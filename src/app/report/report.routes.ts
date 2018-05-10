import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './report.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';

const routes: Routes = [
    {
        path: '',
        component: ReportComponent,
        data: {
            title: 'Report'
        },
        children: [
            {
                path: 'configuration',
                component: ConfigurationComponent,
                data: { title: 'Configuration' }
            },
            {path: '',redirectTo: 'configuration', pathMatch: 'full' }
        ]
    }
];

export const routing = RouterModule.forChild(routes);