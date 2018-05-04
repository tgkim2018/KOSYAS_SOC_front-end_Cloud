import { Routes, RouterModule } from '@angular/router';
import { AnalysisComponent } from './analysis.component';
import { CorrelationComponent } from './components/correlation/correlation.component';
import { ElastalertComponent } from './components/elastalert/elastalert.component';

const routes: Routes = [
    {
        path: '',
        component: AnalysisComponent,
        data: {
            title: 'Analysis'
        },
        children: [
            {
                path: 'correlation',
                component: CorrelationComponent,
                data: { title: 'Correlation' }
            },
            {
                path: 'elastalert',
                component: ElastalertComponent,
                data: { title: 'Elastalert' }
            }
        ]
    }
];

export const routing = RouterModule.forChild(routes);