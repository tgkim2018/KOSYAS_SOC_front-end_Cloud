import { NgModule } from '@angular/core';
//import { ChartsModule } from 'ng2-charts/ng2-charts';

import { routing }   from './dashboard.routes';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DashboardComponent } from './dashboard.component';
//import { DashboardRoutingModule } from './dashboard-routing.module';
import { IntrusionComponent } from './components/intrusion/intrusion.component';
import { VulnerabilityComponent } from './components/vulnerability/vulnerability.component';
import { SystemComponent } from './components/system/system.component';
import { FulllogsComponent } from './components/fulllogs/fulllogs.component';
import { DashboardService } from './dashboard.service';
import { OverviewComponent } from './components/overview/overview.component';

@NgModule({
  imports: [
    //DashboardRoutingModule,
    //ChartsModule,
    ChartsModule,
    routing
  ],
  declarations: [ DashboardComponent, IntrusionComponent, VulnerabilityComponent, SystemComponent, FulllogsComponent, OverviewComponent ],
  providers: [DashboardService]
})
export class DashboardModule { }
