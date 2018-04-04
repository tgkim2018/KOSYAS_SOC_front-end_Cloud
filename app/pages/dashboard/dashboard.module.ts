import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { PieChart } from './pieChart';
import { TrafficChart } from './trafficChart';
import { LineChart } from './lineChart';
import { Fulllogs } from './fulllogs';
import { Intrusion } from './intrusion';
import { Systems } from './systems';
import { Vulnerability } from './vulnerability';
import { ChartistJs } from './chartistJs/';
import { DashboardMain } from './dashboardmain.component';

import { LineChartService } from './lineChart/lineChart.service';
import { PieChartService } from './pieChart/pieChart.service';
import { TrafficChartService } from './trafficChart/trafficChart.service';
import { FulllogsService } from './fulllogs/fulllogs.service';
import { IntrusionService } from './intrusion/intrusion.service';
import { SystemsService } from './systems/systems.service';
import { VulnerabilityService } from './vulnerability/vulnerability.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing
  ],
  declarations: [
    PieChart,
    TrafficChart,
    LineChart,
    Dashboard,
    Fulllogs,
    Intrusion,
    Systems,
    Vulnerability,
    DashboardMain,
    ChartistJs
  ],
  providers: [
    LineChartService,
    PieChartService,
    TrafficChartService,
    FulllogsService,
    IntrusionService,
    SystemsService,
    VulnerabilityService
  ]
})
export class DashboardModule {}
