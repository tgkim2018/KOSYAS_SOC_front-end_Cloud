import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing }   from './report.routes';
import { ReportComponent } from './report.component';
import { ReportService } from './report.service';
import { ConfigurationComponent } from './components/configuration/configuration.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ReportComponent, ConfigurationComponent],
  providers: [ReportService]
})
export class ReportModule { }
