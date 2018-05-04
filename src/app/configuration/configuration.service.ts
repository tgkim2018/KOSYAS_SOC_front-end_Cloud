import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base.service';
import { CelebroOverview, CelebroOverview_Data } from './celebro.data';
import { WazuhManagerStatus, WazuhAgentList } from './agent.data';

@Injectable()
export class ConfigurationService {

  fullData: CelebroOverview;
  infoData: CelebroOverview_Data;

  mangerStatus: WazuhManagerStatus;
  wazuhAgentList: WazuhAgentList;
  baseURL = 'http://172.27.0.230:3001';

  //constructor(private baseService:BaseService, public http:HttpClient) { }
  constructor(public http: HttpClient) { }

  //getBaseUrl():string {
  //return this.baseService.getBaseUrl();
  //}

  public getCelebroOverview(): CelebroOverview {
    //this.http.get<CelebroOverview>(this.getBaseUrl().concat('/cats/overview')).subscribe(Data => this.fullData = Data);
    //this.http.get<CelebroOverview>(this.baseURL.concat('/cats/overview')).subscribe(Data => this.fullData = Data);
    //return this.http.get<CelebroOverview>(this.baseURL.concat('/cats/overview'));
    //this.infoData = this.fullData.data;
    //return this.infoData;
    this.http.get<CelebroOverview>(this.baseURL.concat('/cats/overview')).subscribe(fullData => this.fullData = fullData);
    return this.fullData;
  }

  public getManangerStatus(): WazuhManagerStatus {
    this.http.get<WazuhManagerStatus>(this.baseURL.concat('/wazuh/manager/status')).subscribe(mangerStatus => this.mangerStatus = mangerStatus);
    return this.mangerStatus;
  }

  public getAgentList(): WazuhAgentList {
    this.http.get<WazuhAgentList>(this.baseURL.concat('/wazuh/agents')).subscribe(wazuhAgentList => this.wazuhAgentList = wazuhAgentList);
    return this.wazuhAgentList;
  }
}
