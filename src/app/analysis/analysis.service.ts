import { Injectable } from '@angular/core';

import { ElastalertDataForm } from './alert.data';
import { ElastalertDataForm_List } from './alert.data';

import { ElastalertTemplateForm } from './alert.data';
import { ElastalertTemplateForm_List } from './alert.data';

import { ElastalertRuleForm } from './alert.data';
import { ResCommonForm } from './alert.data';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import "rxjs/add/operator/map";

@Injectable()
export class AnalysisService {

  elastalertData:ElastalertDataForm;
  elastalertDatalist:ElastalertDataForm_List;
  elastalertTemplate:ElastalertTemplateForm;
  elastalertTemplatelist:ElastalertTemplateForm_List;

  baseURL = 'http://172.27.0.230:3001';

  constructor(public http:HttpClient) { }

  /* **ElastAlert Rules** */
  getElastAlert(uri:string) {
    this.http.get<ElastalertDataForm>(this.baseURL.concat(uri)).subscribe(elastalertData => this.elastalertData = elastalertData);
    this.elastalertDatalist = this.elastalertData.data;
    return this.elastalertDatalist;
  }

  elastalertRule:ElastalertRuleForm;
  getElastAlertRule(uri:string) {
    this.http.get<ElastalertRuleForm>(this.baseURL.concat(uri)).subscribe(elastalertRule => this.elastalertRule = elastalertRule);
    return this.elastalertRule.data.data;
  }

  elastalertRes:ResCommonForm;
  postElastAlert(uri:string, body:string){
    this.http.post<ResCommonForm>(this.baseURL.concat(uri), body).subscribe(elastalertRes => this.elastalertRes = elastalertRes);
    return this.elastalertRes.data.msg;
  }

  deleteElastAlert(uri:string){
    this.http.delete<ResCommonForm>(this.baseURL.concat(uri)).subscribe(elastalertRes => this.elastalertRes = elastalertRes);
    return this.elastalertRes.data.msg;
  }
  
  /* **ElastAlert templates** */
  getElastAlertTemplateRule(uri:string) {
    this.http.get<ElastalertRuleForm>(this.baseURL.concat(uri)).subscribe(elastalertRule => this.elastalertRule = elastalertRule);
    return this.elastalertRule.data.data;
  }

  getElastAlertTemplate(uri:string) {
    this.http.get<ElastalertTemplateForm>(this.baseURL.concat(uri)).subscribe(elastalertTemplate => this.elastalertTemplate = elastalertTemplate);
    this.elastalertTemplatelist = this.elastalertTemplate.data;
    return this.elastalertTemplatelist;
  }

  postElastAlertTemplate(uri:string, body:string){
    this.http.post<ResCommonForm>(this.baseURL.concat(uri), body).subscribe(elastalertRes => this.elastalertRes = elastalertRes);
    return this.elastalertRes.data.msg;
  }

  deleteElastAlertTemplate(uri:string){
    this.http.delete<ResCommonForm>(this.baseURL.concat(uri)).subscribe(elastalertRes => this.elastalertRes = elastalertRes);
    return this.elastalertRes.data.msg;
  }

}
