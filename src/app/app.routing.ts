import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'analysis',
        loadChildren: './analysis/analysis.module#AnalysisModule'
      },
      {
        path: 'configuration',
        loadChildren: './configuration/configuration.module#ConfigurationModule'
      },
      {
        path: 'report',
        loadChildren: './report/report.module#ReportModule'
      },
      {
        path: 'userinfo',
        loadChildren: './userinfo/userinfo.module#UserinfoModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
