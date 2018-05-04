import { Routes, RouterModule } from '@angular/router';
import { UserinfoComponent } from './userinfo.component';
import { InformationComponent } from './components/information/information.component';

const routes: Routes = [
    {
        path: '',
        component: UserinfoComponent,
        data: {
            title: 'User Information'
        },
        children: [
            {
                path: 'information',
                component: InformationComponent,
                data: { title: 'Information' }
            }
        ]
    }
];

export const routing = RouterModule.forChild(routes);