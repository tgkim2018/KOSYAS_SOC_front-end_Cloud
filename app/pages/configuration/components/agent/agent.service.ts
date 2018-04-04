import {Injectable} from '@angular/core';
import { HttpModule, Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import { HttpClient, HttpResponse } from '@angular/common/http';

/* 'post/delete' method Response */
export interface ResCommonForm {
    error: string;
    data : {
        msg: string;
    }
}

/* Wazuh Agent list from Wazuh Server */
export interface WazuhAgentList_Os {
    major:          string; //
    uname:          string; //
    platform:       string;
    version:        string;
    name:           string;
    codename:       string; //
    arch:           string; //
}

export interface WazuhAgentList_Item {
    status:         string;
    //configSum:      string; //
    //group:          string; //
    name:           string;
    mergedSum:      string; //
    ip:             string;
    //dateAdd:        string;
    version:        string;
    manager_host:   string; //
    lastKeepAlive:  string;
    os:             WazuhAgentList_Os;
    id:             string;
}

export interface WazuhAgentList_Data {
    totalItems:     number;
    items:          WazuhAgentList_Item[];
}

export interface WazuhAgentList {
    error : string;
    data : WazuhAgentList_Data;
}
/* Wazuh manager status from Wazuh Server */
export interface WazuhManagerStatus_Data {
    "wazuh-modulesd":       string;
    "ossec-authd":          string;
    "wazuh-clusterd":       string;
    "ossec-monitored":      string;
    "ossec-logcollector":   string;
    "ossec-execd":          string;
    "ossec-remoted":        string;
    "ossec-syscheckd":      string;
    "ossec-analysisd":      string;
    "ossec-maild":          string;
}

export interface WazuhManagerStatus {
    error : string;
    data : WazuhManagerStatus_Data;
}

@Injectable()
export class AgentService {
    baseURL = 'http://192.168.0.249:3001';

    wazuhagentlist:WazuhAgentList;
    wazuhagentlistitem:WazuhAgentList_Item;
    wazuhagentlistitems:WazuhAgentList_Item[];

    constructor(public http:Http) { }

     /* **WAZUH AGENT** connect wazuh manager to get wazuh agent list*/
 // getWazuhagentList(uri:string){
    public getWazuhagentList(uri:string){
        //return this.http.get(this.baseURL.concat(uri)).map((res:Response) => res.json());
        //return {"error":"0","data":{"totalItems":2,"items":[{"status":"Active","name":"wazuh-server","ip":"127.0.0.1","dateAdd":"2017-12-27 18:38:27","version":"Wazuh v3.1.0","manager_host":"wazuh-server","os":{"platform":"centos","version":"7","name":"CentOS Linux"},"id":"000"},{"status":"Active","name":"115","ip":"any","dateAdd":"2018-03-22 00:34:48","version":"Wazuh v3.2.1","manager_host":"wazuh-server","os":{"platform":"ubuntu","version":"16.04.3 LTS","name":"Ubuntu"},"id":"001"}]}};
        
    }

  /* **WAZUH MANAGER** connect wazuh manager to get wazuh manager status */
  //getWazuhmanagerStatus(){
  //  return this.http.get<WazuhManagerStatus>(this.baseURL.concat("/wazuh/manager/status"));
  //}

}