import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ElastalertComponent } from '../elastalert/elastalert.component';
import { AnalysisService } from '../../analysis.service';
import { ElastalertTemplateForm_List } from '../../alert.data';

@Component({
  selector: 'app-elastalertrule',
  templateUrl: './elastalertrule.component.html',
  styleUrls: ['./elastalertrule.component.scss']
})
export class ElastalertruleComponent implements OnInit {

  @Input() rule:string;
  @Input() name:string;

  msg:string = "";
  elastalertList:ElastalertTemplateForm_List;
  elastalertListTemplates:string[];
  elastalertListTemplate:string;
  ruleData:string;
  ruleName:string;
  saveData:string;

  constructor(private commonservice:AnalysisService, private elastalertcomponent:ElastalertComponent) { }

  ngOnInit() {
    this.getElastalertTemplate();
    if(this.rule && this.name) {
      this.ruleData = this.rule;
      this.ruleName = this.name;
    }
  }

  onSelectList () {
    this.elastalertcomponent.select = "list";
  }

  onSelectTemplateID(templateID:string) {
    this.ruleData = this.commonservice.getElastAlertTemplateRule("/ea/templates/" + templateID);
    this.ruleName = templateID;
  }

  onSaveRule() {
    //postElastAlert(uri:string, body:string)
    this.saveData = '{\"yaml\":' + '\"' + this.ruleData.replace('\"','\\\"').replace('\n','\\n') + '\"' + '}';
    this.msg = this.commonservice.postElastAlert("/ea/rules/" + this.ruleName, this.saveData);
    alert(this.msg);
    this.elastalertcomponent.select = "list";
  }

  getElastalertTemplate(){
    this.elastalertList = this.commonservice.getElastAlertTemplate("/ea/templates");
    this.elastalertListTemplates = this.elastalertList.templates;
  }

  postElastalertData(){
    //postElastAlert(uri:string, body:string)
    //this.msg = this.commonservice.postElastAlert();
  }

  delElastalertTemplate(templatename:string){
    this.msg = this.commonservice.deleteElastAlertTemplate("/ea/templates/" + templatename);
  }
}
