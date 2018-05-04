import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { routing }   from './analysis.routes';
import { AnalysisComponent } from './analysis.component';
import { CorrelationComponent } from './components/correlation/correlation.component';
import { ElastalertComponent } from './components/elastalert/elastalert.component';
import { AnalysisService } from './analysis.service';
import { ElastalertlistComponent } from './components/elastalertlist/elastalertlist.component';
import { ElastalertruleComponent } from './components//elastalertrule/elastalertrule.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    routing
  ],
  declarations: [AnalysisComponent, 
    CorrelationComponent, 
    ElastalertComponent, 
    ElastalertlistComponent, 
    ElastalertruleComponent],
  providers: [AnalysisService]
})
export class AnalysisModule { }
