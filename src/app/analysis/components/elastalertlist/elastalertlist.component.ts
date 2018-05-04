import { Component, OnInit } from '@angular/core';
import { ElastalertComponent } from '../elastalert/elastalert.component';
import { AnalysisService } from '../../analysis.service';

import { ElastalertDataForm_List } from '../../alert.data';

@Component({
  selector: 'app-elastalertlist',
  templateUrl: './elastalertlist.component.html',
  styleUrls: ['./elastalertlist.component.scss']
})
export class ElastalertlistComponent implements OnInit {

  msg:string = "";
  elastalertList:ElastalertDataForm_List;
  elastalertListDatas:string[];
  elastalertListData:string;

  constructor(private commonservice:AnalysisService, private elastalertcomponent:ElastalertComponent) { }

  ngOnInit() {
    this.getElastalertData();
  }

  onSelectRule() {
    this.elastalertcomponent.ruleName = "";
    this.elastalertcomponent.ruleData = "";
    this.elastalertcomponent.select = "rule";
  }

  onSelectRuleID(ruleID:string) {
    this.elastalertcomponent.ruleData = this.commonservice.getElastAlertRule("/ea/rules/" + ruleID);
    this.elastalertcomponent.ruleName = ruleID;
    this.elastalertcomponent.select = "rule"
  }

  getElastalertData(){
    this.elastalertList = this.commonservice.getElastAlert("/ea/rules");
    this.elastalertListDatas = this.elastalertList.rules;
  }

  postElastalertData(){
    //postElastAlert(uri:string, body:string)
    //this.msg = this.commonservice.postElastAlert();
  }

  delElastalertRule(rulename:string){
    this.msg = this.commonservice.deleteElastAlert("/ea/rules/" + rulename);
  }

}
