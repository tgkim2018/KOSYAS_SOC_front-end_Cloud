import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../configuration.service';
import { CelebroOverview, CelebroOverview_Data} from '../../celebro.data';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {

  subject = "System configuration";
  context = "Elasticsearch";
  nodes = 1;
  indices = 133;
  shards = 1322;
  docs = 51349322;
  disk = "19.2gb"
  celebroData :CelebroOverview;
  celebroOverviewData : CelebroOverview_Data;

  constructor(private configurationService:ConfigurationService) { }
  //constructor() { }

  ngOnInit() {
    this.getCelebroOverview();
  }

  getCelebroOverview(){
    //this.configurationService.getCelebroOverview().subscribe(celebroData => this.celebroData = celebroData);
    this.celebroData = this.configurationService.getCelebroOverview();
    this.celebroOverviewData = this.celebroData.data;
  }
}
